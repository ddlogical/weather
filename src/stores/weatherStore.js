import { defineStore } from "pinia";
import getCityWeather from "../api/getCityWeather";

export const useWeatherStore = defineStore("weatherStore", {
  state: () => ({
    index: 0,
    weather: [],
    loaded: true,
  }),
  actions: {
    async addWeather(lat, lon) {
      this.loaded = false;
      const {
        city: { id, name, country },
        list,
      } = await getCityWeather(lat, lon);
      this.weather[this.index] = {
        id,
        name: `${name}, ${country}`,
        lat,
        lon,
        list,
      };
      this.loaded = true;
    },
  },
});
