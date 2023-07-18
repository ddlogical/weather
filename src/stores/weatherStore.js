import { defineStore } from "pinia";
import getCityWeather from "../api/getCityWeather";

export const useWeatherStore = defineStore("weatherStore", {
  state: () => ({
    weather: [],
    loaded: true,
  }),
  actions: {
    async addWeather(lat, lon) {
      this.loaded = false;
      const {
        city: { id, name },
        list,
      } = await getCityWeather(lat, lon);
      this.weather = [{ id, name, list }];
      this.loaded = true;
    },
  },
});
