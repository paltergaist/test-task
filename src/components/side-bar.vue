<template>
  <div class="side-bar">
    <base-input :title="inputText" :place-holder="placeHolder"></base-input>
    <result-board></result-board>
  </div>
</template>

<script>
import BaseInput from '@/components/common/base-input.vue'
import ResultBoard from '@/components/common/result-board.vue'

export default {
  name: 'SideBar',

  components: {
    BaseInput,
    ResultBoard
  },

  data() {
    return {
      inputText: 'Поиск сотрудников',
      placeHolder: 'Введите Id или имя',
    }
  },

}
</script>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  max-width: 350px;
  border-right: 1px solid #DEDEDD;
  padding: 30px 25px;
}

@media(max-width: 991px) {
  .side-bar {
    max-width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    padding: 0;
  }
}
</style>
