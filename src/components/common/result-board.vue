<template>
  <div class="result-board">
    <div v-if="loading" class="loader">Загрузка...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="result-board__wrapper">
      <div class="result-board__title">Результаты</div>
      <div class="result-board__items">
        <result-board-item v-for="user in users" :key="user.id" @click="selectUser(user)"
          :class="{ 'result-board-item__selected': selectedUser && selectedUser.id === user.id }" :user="user">
        </result-board-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import resultBoardItem from './result-board-item.vue';

export default {
  name: 'ResultBoard',
  components: {
    resultBoardItem,
  },

  computed: {
    ...mapState(['users', 'selectedUser', 'loading', 'error']),
  },
}
</script>

<style lang="scss" scoped>
.result-board {
  padding: 30px 0;
  width: 100%;
  height: calc(80vh - 285px);
  overflow-y: auto;
  overflow-x: hidden;

  &__title {
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%;
    margin-block: 18px;
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}

@media(max-width: 991px) {
  .result-board {
    display: flex;
    justify-content: center;
  }
}
</style>
