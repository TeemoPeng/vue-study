/**
 * 模拟vue-router路由跳转
 * 
 * 1. 注册插件 Vue.use(vueRouter), vueRouter 是一个插件
 * 2. 注册全局组件 router-link，router-view 
 * 3. 监听url变化, 获取当前path（ path需定义为响应式，render函数才能重新渲染 ）
 * 4. 在router-view组件中，找到当前path对应的component，调用render方法渲染
 */

// 定义Vue变量，不用import的方式引入，目的是让CustomRouter 能够不依赖vue, 在install方法调用时，会传入Vue
let Vue = ''

// 定义CustomRouter  
class CustomRouter {
    constructor(options) {
        this.$options = options
        
        // 当前path
        // 为当前对象创建一个响应式属性：
        Vue.util.defineReactive(this, 'currentPath', window.location.hash.slice(1))

        // 监听url变化

        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash.slice(1)
        })

    }
}

CustomRouter.install = function(_Vue) {
    Vue = _Vue

    // 获取根实例中的router
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                // 注册全局$router
                Vue.prototype.$router = this.$options.router
            }
        },
    })

    // 注册全局组件 router-link
    Vue.component('router-link', {
        // 最终渲染的结果： <a href='#/'>xxx</a>
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render(createElement) {
            return createElement('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
        }
    })
    
    // 注册全局组件 router-view
    Vue.component('router-view', {
        
        render(createElement) {
            // 获取当前path对应的component
            let component = null

            this.$router.$options.routes.forEach(route => {
                console.log('route:', route);
                if (this.$router.currentPath === route.path) {
                    component = route.component                    
                }
            })

            return createElement(component)
        }
    })
}


export default CustomRouter

