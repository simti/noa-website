import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: lazyLoad('Home')
  },
  {
    path: '/projects',
    name: 'projects',
    component: lazyLoad('ProjectsList')
  },
  {
    path: '/project/:id',
    name: 'project-show',
    component: lazyLoad('ProjectShow'),
    props: true
  },
  {
    path: '/contact',
    name: 'contact',
    component: lazyLoad('Contact')
  },
  {
    path: '/about',
    name: 'about',
    component: lazyLoad('About')
  },
  {
    path: '/instagram',
    name: 'instagram',
    component: lazyLoad('Instagram')
  },
  { path: '*', component: lazyLoad('NotFound') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  },
  routes
})
export default router
