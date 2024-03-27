import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    selectedUser: null,
    loading: false,
    error: "",
    searchTimeout: null,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_USER(state, user) {
      state.selectedUser = user;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_USERS(state) {
      state.users = [];
      state.selectedUser = null;
    },
    SET_SEARCH_TIMEOUT(state, timeout) {
      state.searchTimeout = timeout;
    },
    CLEAR_STATE(state) {
      state.users = [];
      state.selectedUser = null;
      state.error = "";
    },
  },
  actions: {
    searchUsers({ commit, state }, query) {
      if (state.searchTimeout) {
        clearTimeout(state.searchTimeout);
      }

      const timeout = setTimeout(() => {
        if (query.trim() === "") {
          commit("CLEAR_STATE");
          return;
        }

        commit("CLEAR_STATE");
        commit("SET_LOADING", true);
        commit("SET_ERROR", "");

        let queryParams = [];

        const trimmedQuery = query
          .replace(/\s*,\s*/g, ",")
          .split(",")
          .filter(Boolean);

        const isNumeric = trimmedQuery.every((param) => /^\d+$/.test(param));

        if (isNumeric) {
          queryParams = trimmedQuery.map((param) => `id=${param}`);
        } else {
          queryParams = trimmedQuery.map((name) => `name=${name}`);
        }

        const queryString = queryParams.join("&");
        axios
          .get(`https://jsonplaceholder.typicode.com/users?${queryString}`)
          .then((response) => {
            commit("SET_USERS", response.data);
            commit("SET_LOADING", false);
          })
          .catch((error) => {
            commit("SET_ERROR", error.message);
            commit("SET_LOADING", false);
          });
      }, 666);

      commit("SET_SEARCH_TIMEOUT", timeout);
    },
    selectUser({ commit }, user) {
      commit("SET_SELECTED_USER", user);
    },
  },
});

export default store;
