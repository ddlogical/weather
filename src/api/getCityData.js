import axios from "axios";

const getCityData = async (name) => {
  const API = import.meta.env.VITE_WEATHER_API_KEY;
  const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=1&appid=${API}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
export default getCityData;
