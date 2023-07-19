<script setup>
import { ref, onMounted } from "vue";
import getUserIp from "../api/getUserIp";
import getUserLocation from "../api/getUserLocation";
import { useWeatherStore } from "../stores/weatherStore";
import { useModalStore } from "../stores/modalStore";
import SearchAutocomplete from "../components/SearchAutocomplete.vue";
import CustomButton from "../components/CustomButton.vue";
import WeatherCardList from "../components/WeatherCardList.vue";

const weatherStore = useWeatherStore();
const { show } = useModalStore();

const handleAddClick = () => {
  if (weatherStore.index < 4) {
    weatherStore.addNewWeather();
  } else {
    show("warn", "You have added too many cities. Please, delete some.");
  }
};

onMounted(async () => {
  // const ip = await getUserIp();
  // const { lat, lon } = await getUserLocation(ip);
  // weatherStore.addWeather(lat, lon);
});
</script>

<template>
  <SearchAutocomplete />
  <WeatherCardList :weather="[...weatherStore.weather].reverse()" />
  <CustomButton class="btn-add" @clickHandler="handleAddClick">+</CustomButton>
</template>

<style coped>
.btn-add {
  position: absolute;
  top: 10rem;
  right: 0;
  background-color: var(--color-accent-lightest);
  color: var(--color-white);
  border: 0;
  border-radius: 50%;
  font-size: 7rem;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.btn-add:hover {
  transform: scale(1.2);
}
</style>
