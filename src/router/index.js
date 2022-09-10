import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'

Vue.use(Router)

export default new Router({
  mode: 'history', // 去掉#，需要路由模式改为history
  //base: '/dist/', // 这个配置也很重要，否则会出现页面空白情况
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    }
  ]
})
