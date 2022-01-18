<template>
  <div class="main">
    <Particles id="tsparticles" class="main__particles" :options="particles" />
    <el-row class="cert-flex" justify="center" align="middle">
      <span class="cert">网站备案/许可证号：</span>
      <el-link href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备20019717号-1</el-link>
    </el-row>
  </div>
</template>

<script lang="ts">
  import {
    ref, reactive, defineComponent, computed,
    onMounted, toRefs, unref,
  } from 'vue'
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { particles } from '../config/particles-config'

  export default defineComponent({
    setup() {
      return {
        particles
      }
    }
  })
</script>
<style lang="less" scoped>
  .main{
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    &__particles {
      height: 100%;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('../assets/images/logo.png');
    }
  }

  .el-row {
    width: 100%;
  }

  .cert-flex {
    position: fixed;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .cert{
    font-size: 0.95rem;
  }
</style>
