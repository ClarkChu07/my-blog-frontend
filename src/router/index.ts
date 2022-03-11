import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw, } from 'vue-router'
import Home from '@/pages/Home/index.vue';
import Article from '@/pages/Article/index.vue';
import Project from '@/pages/Project/index.vue';
import About from '@/pages/About/index.vue';

const routes: Array<RouteRecordRaw> = [
  //默认首页
  {
    path: '',
    redirect: 'Home'
  },
  //首页
  {
    path: '/Home',
    component: Home
  },
  //文章
  {
    path: '/Article',
    component: Article
  },
  //项目
  {
    path: '/Project',
    component: Project
  },
  //关于
  {
    path: '/About',
    component: About
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
