<template>
  <div class="result-board-item" @click="selectUser(user)">
    <img src="../../assets/logo.png" class="result-board-item__image" alt="">
    <div class="result-board-item__description">
      <div class="result-board-item__title">{{ user.name }}</div>
      <div class="result-board-item__subtitle">{{ user.email }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ResultBoardItem',

  props: {
    user: {
      type: Object,
      require: true
    }
  },

  methods: {
    ...mapActions(['selectUser'])
  }
}
</script>

<style lang="scss" scoped>
.result-board-item {
  display: flex;
  width: 300px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  cursor: pointer;

  &__image {
    width: 70px;
    height: 70px;
    border-right: 1px solid #E0E0E0;
  }

  &__description {
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 5px;
    width: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__title {
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  &__subtitle {
    color: #76787D;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-overflow: ellipsis;
  }

  &__selected {
    .result-board-item__description {
      background-color: #E0E0E0;
    }
  }
}
</style>
