let Vue = ''

// 1.实现一个插件，挂载$router
class PyVueRouter {
    constructor(options) {
        this.$options = options
    }
}

PyVueRouter.install = function(_Vue) {
    // 保存构造函数，在PyRouter中使用
    Vue = _Vue

    // 挂载$router
    // 获取根实例中的router选项

    Vue.mixin({
        beforeCreate() {
            // 根实例中存在router
            if (this.$options.router) {
                
            }
        },
    })

}
export default PyVueRouter