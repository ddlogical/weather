<script setup>
import WeatherChart from "./WeatherChart.vue";
import CustomButton from "./CustomButton.vue";
import { useModalStore } from "../stores/modalStore";
import Icon from "./Icon.vue";

const { weather, isFavorite } = defineProps({
  weather: Object,
  isFavorite: Boolean,
});
const { show } = useModalStore();
const {
  id,
  name,
  list,
  list: [
    {
      main: { temp },
      weather: [{ main, icon }],
    },
  ],
} = weather;
const temperature = Math.round(temp);
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date = new Date().toLocaleString("en-US", options);
const handleDeleteClick = () => {
  show("delete", "Do you really want to delete this city?", false, id);
};
</script>

<template>
  <li class="weather-card">
    <div class="weather-card-container">
      <h2 class="weather-card-city">{{ name }}</h2>
      <div class="weather-card-content">
        <div class="weather-card-common">
          <h3 class="weather-card-title">Weather</h3>
          <p class="weather-card-date">{{ date }}</p>
          <p class="weather-card-weather">{{ main }}</p>
        </div>
        <div class="weather-card-visual">
          <img
            class="weather-card-image"
            :src="`https://openweathermap.org/img/wn/${icon}@2x.png`"
            :alt="`Weather image ${id}}`"
          />
          <p class="weather-card-temp">{{ temperature }}&#8451;</p>
        </div>
      </div>
      <WeatherChart :weather="list" :id="id" />
      <div class="card-btns">
        <CustomButton class="card-btn">
          <Icon type="favorite" class="card-icon" />
        </CustomButton>
        <CustomButton class="card-btn" @clickHandler="handleDeleteClick">
          <Icon type="delete" class="card-icon" />
        </CustomButton>
      </div>
    </div>

    <div class="weather-card-decoration"></div>
  </li>
</template>

<style scoped>
.weather-card {
  min-height: 40rem;
  width: 80%;
  margin: 0 auto;
  position: relative;
  margin-top: 2rem;
  background-color: var(--color-accent-dark);
  border-radius: 2rem;
  list-style: none;
  box-shadow: 0px 0px 5px var(--color-white);
  padding: 2rem;
}

.weather-card-container {
  position: relative;
  z-index: 2;
}

.weather-card-city {
  font-size: 5rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
}

.weather-card-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.weather-card-title {
  font-size: 3rem;
  letter-spacing: 1px;
}

.weather-card-date,
.weather-card-weather {
  font-size: 2rem;
  color: var(--color-gray);
}

.weather-card-visual {
  display: flex;
  align-items: center;
}

.weather-card-image {
  max-width: 10rem;
}

.weather-card-temp {
  font-size: 8rem;
  font-weight: 100;
}

.weather-card-decoration {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background-color: var(--color-accent-lightest);
  clip-path: polygon(56% 40%, 100% 71%, 100% 100%, 0 100%, 0 0);
  z-index: 0;
}

.card-btns {
  position: absolute;
  top: 0;
  right: 0;
}

.card-btn {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: all 0.2s ease-in;
}
.card-btn:hover {
  transform: scale(1.1);
}

.card-icon {
  fill: var(--color-white);
}
</style>
