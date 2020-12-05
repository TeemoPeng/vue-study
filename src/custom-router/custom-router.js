/**
 * 模拟vue-router路由跳转
 * 
 * 1. 注册插件 Vue.use(vueRouter), vueRouter 是一个插件
 * 2. 注册全局组件 router-link，router-view 
 * 3. 监听url变化, 获取当前path（ path需定义为响应式，render函数才能重新渲染 ）
 * 4. 在router-view组件中，找到当前path对应的component，调用render方法渲染
 */

import customRouterView from './custom-router-view'
import customRouterLink from './custom-router-link'

// 定义Vue变量，不用import的方式引入，目的是让CustomRouter 能够不依赖vue, 在install方法调用时，会传入Vue
let Vue = ''

// 定义CustomRouter  
class CustomRouter {
    constructor(options) {
        this.$options = options
        
        // 当前path
        // 为当前对象创建一个响应式属性：
        Vue.util.defineReactive(this, 'currentPath', window.location.hash.slice(1) || '/')

        // 监听url变化

        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash.slice(1)
        })


        // 创建router映射表
        this.routerMap = {}
        
        options.routes.forEach(route => {
            this.routerMap[route.path] = route
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
    Vue.component('router-link', customRouterLink)
    
    // 注册全局组件 router-view
    Vue.component('router-view', customRouterView)
}


export default CustomRouter

