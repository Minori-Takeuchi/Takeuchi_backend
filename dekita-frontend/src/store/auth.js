// store/auth.js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [
    createPersistedState({
      key: "auth",
      paths: ["user"],
      storage: window.sessionStorage,
    }),
  ],
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
});

