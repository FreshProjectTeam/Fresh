import Vue from 'vue'
import Router from 'vue-router'
import MyLogin from '../layout/MyLogin'
import MyRegister from '../layout/MyRegister'
import Shopping from '../layout/Shopping'
import ShoppingGoods from '../layout/ShoppingGoods'

// 1.安装插件
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      // path: '/',
      // name: 'MyLogin',
      // component: MyLogin
     
      path: '/',
      // redirect 重定向
      redirect: "/MyLogin "   
    },
    {
      path: '/MyLogin',
      name: 'MyLogin',
      component: MyLogin
    },
    {
      path: '/MyRegister',
      name: 'MyRegister',
      component: MyRegister
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/ShoppingGoods',
      name: 'ShoppingGoods',
      component: ShoppingGoods
    },
  ]
})
