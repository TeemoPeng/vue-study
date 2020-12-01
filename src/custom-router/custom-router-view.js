export default {        
    render(createElement) { // render函数，只要用到那些响应式的数据，那么当数据变化时，render就会重新执行
        // 获取当前path对应的component
        // let component = null

        // this.$router.$options.routes.forEach(route => {
        //     if (this.$router.currentPath === route.path) {
        //         component = route.component                    
        //     }
        // })

        const {routerMap, currentPath} = this.$router

        return createElement(routerMap[currentPath].component || null)
    }
}