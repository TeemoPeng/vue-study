// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// import router from './pyrouter'
import router from './custom-router'
import createDialog from './utils/dialog'
// import store from './store'
import store from './custom-vuex'


Vue.config.productionTip = false

// Vue.prototype.$createDialog = createDialog

Vue.use(createDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
