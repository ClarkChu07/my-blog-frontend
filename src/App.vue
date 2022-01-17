<template>
  <el-container>
    <el-header class="header-flex">
      <div>
        <el-avatar
          :src="Images.logoUrl"
          fit="contain"
          shape="square"
          size="default"
        ></el-avatar>
      </div>
      <div>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="isCollapse"
          router
          :default-active="$route.path"
          active-text-color="#409EFF"
        >
          <el-menu-item index="/Home">首页</el-menu-item>
          <el-menu-item disabled index="/Article">文章</el-menu-item>
          <el-menu-item disabled index="/Project">项目</el-menu-item>
          <el-menu-item disabled index="/Message">留言</el-menu-item>
          <el-menu-item disabled index="/About">关于</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <div class="main-style">
      <router-view :key="key" />
    </div>
    <!-- <el-footer>Design By ClarkChu</el-footer> -->
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
    const activeIndex = "1";
    const isCollapse = false;
    const Images = {
      logoUrl,
    };

    // axios
    //     .get("/users/XPoet")
    //     .then((res) => {
    //       console.log("res: ", res);
    //     })
    //     .catch((err) => {
    //       console.log("err: ", err);
    //     });

    return {
      Images,
      activeIndex,
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

.el-footer{
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.main-style {
  border-top: 1px solid #f2f2f2;
  width: 100%;
  height: 100vh;
  position: relative;
  padding: 0;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 0 10%;

  div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
