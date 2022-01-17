<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'About',
  data() {
    return {
      msg: 'About Page'
    }
  },
  setup() {
    const route = useRoute()
  }
})
</script>
