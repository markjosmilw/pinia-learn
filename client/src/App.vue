<!-- <script setup>
import { useCounterStore } from "./store/useCounterStore";
const store = useCounterStore();
</script>

<template>
  <div>
    <h1>hey</h1>
    <p>{{ store.getCount }}</p>
    <button @click.prevent="store.increment">Add</button>
  </div>
</template>

<style scoped></style> -->

<script setup>
import Register from './views/Register.vue'
</script>
<template>
<Register />
</template>