import axios from 'axios';

const baseUrl = 'http://api.weatherapi.com/v1/forecast.json?';
const apiKey = 'key=7df10c444e0540a4975204452212411';

export const getWeatherData = async (cityname) => {
  try {
    const {data} = await axios.get(baseUrl + `${apiKey}&q=${cityname}`);
    return data
  } catch(error) {
    throw error;
  }
}