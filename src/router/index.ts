import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
const routes: Array<RouteRecordRaw> = [
  //默认首页
  {
    path: '',
    redirect: 'home'
  },
  //首页
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  //文章
  {
    path: '/article',
    name: 'Article',
    component: () => import('../components/Article.vue')
  },
  //项目
  {
    path: '/project',
    name: 'Project',
    component: () => import('../components/Project.vue')
  },
  //留言
  {
    path: '/message',
    name: 'Message',
    component: () => import('../components/Message.vue')
  },
  //关于
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/:currentPath(.*)*', // 路由未匹配到，进入这个
    redirect: (_) => {
      return { path: '/404' }
    }
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    }
  }
})
export default router
