### vue-router 模拟

实现步骤：

1. 注册插件 Vue.use(router), router为一个插件
2. 注册全局组件router-link, router-view
3. 监听url变化
4. 获取当前url，对比routes中的path，渲染对应的component