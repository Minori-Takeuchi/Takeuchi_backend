<template>
  <div class="login">
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { ref } from "vue";
import { useStore } from "vuex";
import router from '@/router';

export default {
  name: "LoginView",

  setup() {
    const store = useStore();
    const email = ref("");
    const password = ref("");

    const login = async () => {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        const user = userCredential.user;
        store.commit("setUser", user);
        alert("ログインしました");
        router.push('/');
      } catch (error) {
        console.log(error);
        alert("ログインに失敗しました");
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>
