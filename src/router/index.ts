import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw, } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  //默认首页
  {
    path: '',
    redirect: 'Home'
  },
  //首页
  {
    path: '/Home',
    component: () => import('../components/Home.vue')
  },
  //文章
  {
    path: '/Article',
    component: () => import('../components/Article.vue')
  },
  //项目
  {
    path: '/Project',
    component: () => import('../components/Project.vue')
  },
  //留言
  {
    path: '/Message',
    component: () => import('../components/Message.vue')
  },
  //关于
  {
    path: '/About',
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
  history: createWebHashHistory(),
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
