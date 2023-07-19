<script setup>
import Icon from "./Icon.vue";
import { reactive, watch, watchEffect } from "vue";
import { useFavoritesStore } from "../stores/favoritesStore";

const favoritesStore = useFavoritesStore();
// const favouritesLen = reactive({ value: favoritesLength });
// watchEffect(() => {
//   favouritesLen.value = favoritesLength;
// });
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <router-link to="/" class="header-link">
        <Icon type="home" class="header-icon" />
      </router-link>
      <router-link to="/favorites" class="header-link">
        <Icon type="favorite" class="header-icon" />
        <span
          v-if="favoritesStore.favoritesLength > 0"
          class="header-favorites-counter"
          >{{ favoritesStore.favoritesLength }}</span
        >
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem;
}
.header-nav {
  display: flex;
  gap: 1rem;
}

.header-link {
  text-decoration: none;
  transition: all 0.2s ease-in;
  position: relative;
}
.header-link:hover {
  transform: scale(1.1);
}
.header-icon {
  fill: var(--color-white);
}

.header-favorites-counter {
  position: absolute;
  bottom: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-white);
}
</style>
