<script setup>
import { computed, onMounted } from "vue";
import WeatherCardList from "../components/WeatherCardList.vue";
import { useFavoritesStore } from "../stores/favoritesStore";

const favoritesStore = useFavoritesStore();

const isLoaded = computed(() => {
  return favoritesStore.favorites[favoritesStore.favorites.length - 1]?.list
    .length > 0
    ? true
    : false;
});

onMounted(() => {
  favoritesStore.loadAllFavorites();
});
</script>

<template>
  <p v-if="favoritesStore.favorites.length === 0" class="favorites-empty">
    Please, add some favorites.
  </p>
  <WeatherCardList
    v-if="isLoaded"
    isFavorite
    :weather="[...favoritesStore.favorites].reverse()"
  />
</template>

<style scoped>
.favorites-empty {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
}
</style>
