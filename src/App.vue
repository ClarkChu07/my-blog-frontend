<template>
  <el-container>
    <el-header class="header-flex">
      <el-avatar
        :src="Images.logoUrl"
        fit="contain"
        shape="square"
        size="default"
      ></el-avatar>
      <el-menu
        mode="horizontal"
        router
        default-active="/Home"
        active-text-color="#409EFF"
        :ellipsis="isCollapse"
      >
        <el-menu-item index="/Home">首页</el-menu-item>
        <el-menu-item disabled index="/Article">文章</el-menu-item>
        <el-menu-item disabled index="/Project">项目</el-menu-item>
        <el-menu-item disabled index="/Message">留言</el-menu-item>
        <el-menu-item index="/About">关于</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view :key="key" />
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from './utils/axios'
import logoUrl from './assets/images/logo.png'
import Home from './components/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  },
  computed: {
    key() {
      return this.$route.path + Math.random()
    }
  },
  setup() {
    const isCollapse = false;
    const Images = {
      logoUrl,
    };

    return {
      Images,
      isCollapse,
    }
  }
})
</script>
<style lang="less">
html,
body {
  font-size: 16px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
}
.el-container {
  position: relative;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  border-top: 1px solid #f2f2f2;
  width: 100%;
  height: 100%;
  position: relative;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 10%;
  z-index: 99;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
