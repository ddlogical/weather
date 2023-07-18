import { ref, computed, watch } from "vue";
import { debounce } from "../helpers/debounce";
import { useWeatherStore } from "../stores/weatherStore";
import getCityData from "../api/getCityData";
import cities from "cities.json";

export function useSearch() {
  const weatherStore = useWeatherStore();
  const search = ref("");
  const searchCity = ref({});
  const searchedCities = computed(() => {
    const result = [];
    if (search.value === "") {
      return result;
    }

    for (let city of cities) {
      if (result.length >= 5) {
        break;
      }
      if (city.name.toLowerCase().includes(search.value.toLowerCase())) {
        result.push({
          name: city.name,
          lat: city.lat,
          lon: city.lng,
          country: city.country,
        });
      }
    }

    return result;
  });
  watch(search, async (newSearch, oldSearch) => {
    if (searchCity.value.name) {
      weatherStore.addWeather(searchCity.value.lat, searchCity.value.lon);
      debounce(async () => {}, 3000)();
      searchCity.value = {};
    } else if (newSearch.length > 3) {
      debounce(async () => {
        const [data] = await getCityData(newSearch);
        weatherStore.addWeather(data.lat, data.lon);
      }, 3000)();
    }
  });
  return { search, searchCity, searchedCities };
}
