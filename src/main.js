// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from './pyrouter'
import createDialog from './utils/dialog'

Vue.config.productionTip = false

// Vue.prototype.$createDialog = createDialog

Vue.use(createDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
