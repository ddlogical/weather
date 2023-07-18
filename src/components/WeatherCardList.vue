<script setup>
import WeatherCard from "./WeatherCard.vue";

const { weather } = defineProps({
  weather: Array,
});
</script>

<template>
  <ul class="weather-list">
    <WeatherCard
      v-for="elem of weather"
      :weather="elem"
      :key="elem.id * Math.random(elem.id)"
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
