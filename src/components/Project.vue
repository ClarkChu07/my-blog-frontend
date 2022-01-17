<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Project',
  data() {
    return {
      msg: 'Project Page'
    }
  },
  setup() {}
})
</script>
