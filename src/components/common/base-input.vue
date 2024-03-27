<template>
  <div class="base-input">
    <div class="base-input__title">{{ title }}</div>
    <input v-model="searchQuery" :placeholder="placeHolder" class="base-input__input"
      @input="searchUsers(searchQuery)" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'BaseInput',

  props: {
    title: {
      type: String,
      default: '',
    },

    placeHolder: {
      type: String,
      default: '',
    }
  },

  data() {
    return {
      searchQuery: '',
    };
  },

  methods: {
    ...mapActions(['searchUsers']),
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;

  flex-direction: column;

  &__title {
    color: #333;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-block: 22px;
  }

  &__input {
    display: flex;
    width: 240px;
    padding: 16px;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;

    border-radius: 8px;
    border: 1.5px solid #E9ECEF;
    background: #FFF;

    outline: none;

    color: #76787D;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {}
  }
}
</style>
