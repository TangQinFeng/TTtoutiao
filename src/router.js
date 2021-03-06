import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/'
import Login from './views/login'
import Main from './views/home/main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: Main
      },
      {
        path: 'comment',
        component: () => import('./views/comment')
      },
      {
        path: 'material',
        component: () => import('./views/material')
      },
      {
        path: 'articles',
        component: () => import('./views/articles')
      },
      {
        // 发表文章
        path: 'publish',
        component: () => import('./views/publish')
      },
      {
        // 修改文章
        path: 'publish/:articleId',
        component: () => import('./views/publish')
      },
      {
        // 账户信息
        path: 'account',
        component: () => import('./views/account')
      },
      {
        path: 'gradata',
        component: () => import('./views/fans')
      }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
