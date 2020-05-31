import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../page/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('../page/Login.vue')
    },
    {
      path: '/circular',
      name: 'circular',
      component: ()=>import('../page/Circular.vue')
    },
    {
      path: '/linear',
      name: 'linear',
      component: ()=>import('../page/Linear.vue')
    },
    {
      path: '/bar',
      name: 'bar',
      component: ()=>import('../page/ChartBar.vue')
    }
  ],
  mode:'history'
})
