import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index'
import Form from '@/components/form/index'


Vue.use(Router)

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
  mode: 'history'
})
