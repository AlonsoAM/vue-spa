import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const isAuthenticateGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {

  const userID = localStorage.getItem('userID')
  localStorage.setItem('lastLocation', to.path)

  if (!userID) {
    return next({ name: 'login' })
  }

  return next()

}

export default isAuthenticateGuard