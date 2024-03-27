<template>
  <div class="main-view">

    <base-loader></base-loader>
    <div class="main-view__header">
      <div class="main-view__logo">{{ logoText }}</div>
      <div class="main-view__username">{{ userName }}</div>
    </div>
    <div class="main-view__wrapper">
      <side-bar></side-bar>
      <user-profile></user-profile>
    </div>
  </div>
</template>

<script>
import UserProfile from '@/components/user-profile.vue';
import SideBar from '@/components/side-bar.vue';
import BaseLoader from '@/components/common/base-loader.vue';

export default {
  name: 'MainView',
  components: {
    UserProfile,
    SideBar,
    BaseLoader
  },

  data() {
    return {
      logoText: 'Жилфонд',
      userName: 'Пользователь',
    }
  },
}
</script>

<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px 0;

  &__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &__logo {
    color: #E31F24;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &__username {
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &__wrapper {
    display: flex;
    border-radius: 10px;
    background: #FDFDFD;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    width: 100%;
    height: 80vh;
  }

  @media(max-width: 991px) {
    &__wrapper {
      flex-direction: column;
      height: 100%;
    }
  }
}

.loader {
  position: absolute;
  width: 100vw;
  height: 100vh;
  filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.8)
}
</style>
