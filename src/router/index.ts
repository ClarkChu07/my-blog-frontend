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
    component: () => import('../pages/Home/index.vue')
  },
  //文章
  {
    path: '/Article',
    component: () => import('../pages/Article/index.vue')
  },
  //项目
  {
    path: '/Project',
    component: () => import('../pages/Project/index.vue')
  },
  //关于
  {
    path: '/About',
    component: () => import('../pages/About/index.vue')
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
