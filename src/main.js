import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import NewAliasPage from '@/pages/NewAliasPage.vue'
import RedirectLink from '@/pages/RedirectLink.vue'

import '@/registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: NewAliasPage },
    { path: '/:token', component: RedirectLink, props: true }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
