import axios from "axios";

const API_KEY ='de852736c2d623842dd2b80f920c39e7'
const BASE_URL='https://api.openweathermap.org/data/2.5/weather'
// export const getWeatherApi=async(city)=>{
    
//     const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//     return response
// }
export const getWeatherApi = async (city) => {

    const response = await axios.get(BASE_URL,{
       params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      lang: "ua",
    },
    });

  return response.data;
};
