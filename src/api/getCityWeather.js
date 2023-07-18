import axios from "axios";

const getCityWeather = async (lat, lon) => {
  const API = import.meta.env.VITE_WEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
export default getCityWeather;
