import { defineStore } from "pinia";
import getCityWeather from "../api/getCityWeather";

export const useFavoritesStore = defineStore("favoritesStore", {
  state: () => ({
    favorites: [],
  }),
  actions: {
    addToFavorites(favorite) {
      this.favorites.push(favorite);
    },
    inFavorites(name) {
      const isExist = this.favorites.find((elem) => elem.name === name);
      return isExist ? true : false;
    },
    loadAllFavorites() {
      this.favorites.forEach(async (favourite) => {
        const { list } = await getCityWeather(favourite.lat, favourite.lon);
        favourite.list = list;
      });
    },
    removeFromFavorites(name) {
      this.favorites = this.favorites.filter((elem) => elem.name !== name);
    },
  },
  persist: {
    storage: localStorage,
  },
});
