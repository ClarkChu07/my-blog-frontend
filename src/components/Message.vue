<template>
  <h1>{{ msg }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Message',
  data() {
    return {
      msg: 'Message Page'
    }
  },
  setup() {}
})
</script>
