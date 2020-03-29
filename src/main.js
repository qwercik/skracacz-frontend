import Vue from 'vue'
import VueRouter from 'vue-router'
import VueClipboard from 'v-clipboard'

import App from '@/App.vue'
import '@/registerServiceWorker'
import routes from '@/routes'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueClipboard)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
