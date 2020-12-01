import Vue from 'vue'
import Router from './custom-router'
import Index from '@'
import Form from '@/components/form'

// 1.应用插件
Vue.use(Router)
console.log('index:', Index);
// 2.创建实例
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
    }
  ],
  mode: 'hash'
})
