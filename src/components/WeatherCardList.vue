<script setup>
import WeatherCard from "./WeatherCard.vue";

const { weather, isFavorite } = defineProps({
  weather: Array,
  isFavorite: Boolean,
});
</script>
<template>
  <ul class="weather-list">
    <WeatherCard
      v-for="elem of weather"
      :weather="elem"
      :key="elem.id"
      :isFavorite="isFavorite"
    />
  </ul>
</template>

<style scoped>
.weather-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
