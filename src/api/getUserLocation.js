import axios from "axios";

const getUserLocation = async (Ip) => {
  const URL = `http://ip-api.com/json/${Ip}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};
export default getUserLocation;
