<script setup>
import { ref, onMounted } from "vue";
import getUserIp from "../api/getUserIp";
import getUserLocation from "../api/getUserLocation";
import { useWeatherStore } from "../stores/weatherStore";
import SearchAutocomplete from "../components/SearchAutocomplete.vue";

const weatherStore = useWeatherStore();

onMounted(async () => {
  // const ip = await getUserIp();
  // const { lat, lon } = await getUserLocation(ip);
  // weatherStore.addWeather(lat, lon);
});
</script>

<template>
  <SearchAutocomplete />
</template>
