<template>
  <div class="user-profile">
    <div v-if="!selectedUser" class="placeholder">
      Выберите сотрудника для просмотра профиля
    </div>
    <div v-else class="user-profile__content">
      <div class="user-profile__image">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="user-profile__description">
        <h2>{{ selectedUser.name }}</h2>
        <p>Username: {{ selectedUser.username }}</p>
        <p>Email: {{ selectedUser.email }}</p>
        <p>Phone: {{ selectedUser.phone }}</p>
        <p>Website: {{ selectedUser.website }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'UserProfile',
  computed: {
    ...mapState(['selectedUser']),
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  flex-grow: 1;
  padding: 30px 25px;
  align-items: center;
  justify-content: center;

  &__content {
    display: flex;
  }

  &__image {
    margin-right: 60px;
  }
}

@media(max-width: 991px) {
  .user-profile {
    &__content {
      flex-direction: column;
    }
  }
}
</style>
