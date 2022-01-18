<template>
  <el-container>
    <el-header class="header-flex">
      <el-avatar
        :src="Images.logoUrl"
        fit="contain"
        shape="square"
        size="default"
      ></el-avatar>
      <p>ClarkChu</p>
      <el-menu
        mode="horizontal"
        router
        default-active="/Home"
        background-color="#424245"
        text-color="#fff"
        active-text-color="#ffffff"
        :ellipsis="isCollapse"
      >
        <el-menu-item index="/Home">Home</el-menu-item>
        <el-menu-item disabled index="/Article">Article</el-menu-item>
        <el-menu-item disabled index="/Project">Project</el-menu-item>
        <el-menu-item index="/About">About</el-menu-item>
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

.el-avatar{
  margin-left: 3rem;
}

.el-main {
  border-top: 1px solid #f2f2f2;
  width: 100%;
  height: 100%;
  position: relative;
}

.header-flex {
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #424245;
  z-index: 99;

  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: #d6d6d6;
    margin: 0 8rem 0 1rem;
  }

}
</style>
