<template>
  <h1>一枚前端工程师</h1>
  <el-image style="width: 150px; height: 150px" :src="qcode" fit="cover"></el-image>
</template>
<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'
import qcode from '../assets/images/qcode.jpeg'

export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'About Page'
    }
  },
  setup() {
    return {
      qcode
    }
  }
})
</script>
