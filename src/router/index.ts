import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticateGuard from '@/modules/auth/guards/is-authenticate.guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: 'features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue')
        },
        {
          path: 'pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue')
        },
        {
          path: 'pokemon/:id',
          name: 'pokemon',
          beforeEnter: [isAuthenticateGuard],
          props: (route) => {
            const id = Number(route.params.id)
            return isNaN(id) ? { id: 1 } : { id }
          },
          component: () => import('@/modules/pokemon/pages/PokemonPage.vue')
        }
      ]
    },
    // Auth
    {
      path: '/auth',
      name: 'auth',
      redirect(to) {
        return { name: 'login' }
      },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue')
        }
      ]
    },
    // 404 - Not found
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/modules/common/pages/NotFound404.vue')
    }
  ]
})

export default router