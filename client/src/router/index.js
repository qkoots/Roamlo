import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupPage.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/ProfilePage.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/products',
      name: 'ProductsPage',
      component: () => import('../views/ProductsPage.vue'),
      // meta: { requireAuth: true }
    },
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundPage.vue')
    // }
  ]
})

// Global Route Guard
// router.beforeEach((to, _from, next) => {
//   
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (store.isLoggedIn) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next()
//   }
// })

export default router
