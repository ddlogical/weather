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
        id: Math.round(id * Math.random(id)),
        name: `${name}, ${country}`,
        lat,
        lon,
        list,
      };
      this.loaded = true;
    },
    addNewWeather() {
      this.index += 1;
      const newId = Math.round(
        this.weather[this.index - 1].id *
          Math.random(this.weather[this.index - 1].id)
      );
      this.weather[this.index] = {
        ...this.weather[this.index - 1],
        id: newId,
      };
    },
    deleteWeather(id) {
      this.weather = this.weather.filter((elem) => elem.id !== id);
      this.index -= 1;
    },
  },
});
