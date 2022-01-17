<template>
  <el-container>
    {{msg}}
  </el-container>
</template>
<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
export default defineComponent({
  name: 'Acticle',
  data() {
    return {
      msg: 'Acticle Page'
    }
  },
  setup() {
    return {
    }
  }
})
</script>
<style lang="less">
  .el-container {
    height: auto;
  }
</style>
