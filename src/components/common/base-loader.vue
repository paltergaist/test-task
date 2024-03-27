<template>
  <div v-if="loading" class="loader"></div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BaseLoader',

  computed: {
    ...mapState(['loading']),
  },
}
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  width: 100vw;
  height: 100vh;
  filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.8)
}
</style>
