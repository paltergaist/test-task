<template>
  <div id="app" class="container">
    <main-view></main-view>
  </div>
</template>

<script>
import MainView from '@/views/MainView.vue'

export default {
  components: {
    MainView
  },
}
</script>

<style lang="scss" scoped>
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1266px) !default;


.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: map-get($container-max-widths, sm
    );
}

@media (min-width: 768px) {
  max-width: map-get($container-max-widths, md);
}

@media (min-width: 992px) {
  max-width: map-get($container-max-widths, lg);
}

@media (min-width: 1200px) {
  max-width: map-get($container-max-widths, xl);
}
}
</style>
