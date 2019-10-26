import NewAliasPage from '@/pages/NewAliasPage.vue'
import RedirectLink from '@/pages/RedirectLink.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

export default [
  { path: '/', component: NewAliasPage },
  { path: '/:token([A-Za-z0-9]+)', component: RedirectLink, props: true },
  { path: '/not-found', component: NotFoundPage },
  { path: '*', redirect: '/not-found' }
]
