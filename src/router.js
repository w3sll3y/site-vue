import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./views/Home')
  },
  {
    name: 'about-us',
    path: '/about-us',
    component: () => import('./views/aboutUs/AboutUs')
  },
  {
    name: 'blog',
    path: '/blog',
    component: () => import('./views/blog/Blog')
  },
  {
    path: '/blog/category',
    component: () => import('./views/blog/Widget')
  },
  {
    name: 'post',
    path: '/blog/post/:slug',
    component: () => import('./views/blog/Post')
  },
  {
    name: 'index',
    path: '/plans',
    component: () => import('./views/plans/Index')
  },
  {
    name: 'plans',
    path: '/plans/:plan/:id?',
    component: () => import('./views/plans/plan')
  },
  {
    name: 'platform',
    path: '/platform',
    component: () => import('./views/platform/Platform')
  },
  {
    path: '/teste',
    component: () => import('./views/plans/FormRd')
  },
  { path: '*', component: () => import('./views/Error') }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

// Tratar controle ACL
// router.beforeEach((to, from, next) => {
//   if (to.meta.rule) {
//     router.push('/error')
//   }
//   return next()
// })

export default router;
