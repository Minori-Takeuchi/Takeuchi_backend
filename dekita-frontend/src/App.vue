<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
  <p>{{ user?.displayName }}</p>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user?.user);

    return {
      user,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
