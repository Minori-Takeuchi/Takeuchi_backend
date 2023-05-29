<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import auth from "../firebase";
import api from "@/axios";

export default {
  name: "RegisterView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        await userCredential.user.updateProfile({
          displayName: this.name,
        });
        await api.post("/api/user", {
          id: userCredential.user.uid,
          email: this.email,
          notice: 0,
        });
        alert("登録が完了しました");


      } catch (error) {
        console.log(error);
        alert("登録に失敗しました");
      }
    },
  },
};
</script>
