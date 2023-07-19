<script setup>
import Modal from "./components/Modal.vue";
import { useModalStore } from "./stores/modalStore";

const modalStore = useModalStore();
</script>

<template>
  <div class="container">
    <router-view />
    <Modal v-if="modalStore.isVisible" />
  </div>
</template>
