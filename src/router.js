/* global Vue */
import Router from 'vue-router'
import ViewHome from '@/components/ViewHome'
import ViewClass from '@/components/ViewClass'
import ViewShopCart from '@/components/ViewShop'
import ViewMyCenter from '@/components/ViewMy'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'ViewHome', 
      component: ViewHome
    },
    {
      path: '/class',
      name: 'ViewClass',
      component: ViewClass
    },
    {
      path: '/shopCart',
      name: 'ViewShopCart',
      component: ViewShopCart
    },
    {
      path: '/myCenter',
      name: 'ViewMyCenter',
      component: ViewMyCenter
    }
  ]
})
