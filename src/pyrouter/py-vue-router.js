let Vue = ''

// 1.实现一个插件，挂载$router
class PyVueRouter {
    constructor(options) {
        this.$options = options
        

        // 创建响应式的current属性
        Vue.util.defineReactive(this, 'current', window.location.hash.slice(1))

        // 3. 监听url变化
        window.addEventListener('hashchange',  this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))

    }
    onHashChange() {
        this.current = window.location.hash.slice(1)
    }

}

PyVueRouter.install = function(_Vue) {
    // 保存构造函数，在PyRouter中使用
    Vue = _Vue

    // 挂载$router
    // 获取根实例中的router选项

    Vue.mixin({
        beforeCreate() {
            // 根实例中存在router, 确保根实例时才执行
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
        },
    })


    // 2.实现全局组件 router-link 、 router-view
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render(h) {
            return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
        } 
    })

    Vue.component('router-view', {
        render(h) {

            // 获取path 对应的component
            let component = null
            this.$router.$options.routes.forEach(route => {
                if (route.path === this.$router.current) {
                    component = route.component
                }
            })

            console.log('component:', component)

            return h(component)
        }
    })

}
export default PyVueRouter