import axios from "axios";

const getUserIp = async () => {
  const URL = "https://api.ipify.org?format=json";
  try {
    const response = await axios.get(URL);
    return response.data.ip;
  } catch (error) {
    console.error(error.message);
  }
};
export default getUserIp;
