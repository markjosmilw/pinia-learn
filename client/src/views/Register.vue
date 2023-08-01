<script setup>
import { ref } from "vue";
import { useRegisterStore } from "../store/useRegisterStore";

const store = useRegisterStore();
const user = ref({
  username: "",
  password: "",
});

function handleRegister(u) {
  store.registerUser(u);
  user.value.username = '';
  user.value.password = '';
}
</script>

<template>
  <form @submit.prevent="handleRegister(user)">
    <input type="text" v-model="user.username" placeholder="username" />
    <input type="text" v-model="user.password" placeholder="password" />
    <button>register</button>
  </form>
</template>
