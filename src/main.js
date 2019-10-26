import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import NewAliasPage from '@/pages/NewAliasPage.vue'
import RedirectLink from '@/pages/RedirectLink.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

import '@/registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: NewAliasPage },
    { path: '/:token([A-Za-z0-9]+)', component: RedirectLink, props: true },
    { path: '/not-found', component: NotFoundPage },
    { path: '*', redirect: '/not-found' }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
