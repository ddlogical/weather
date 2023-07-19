<script setup>
import Modal from "./components/Modal.vue";
import { useModalStore } from "./stores/modalStore";
import MainHeader from "./components/MainHeader.vue";

const modalStore = useModalStore();
</script>

<template>
  <div class="container">
    <MainHeader />
    <router-view />
    <Modal v-if="modalStore.isVisible" />
  </div>
</template>
