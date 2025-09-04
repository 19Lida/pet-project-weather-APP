import { useEffect, useState} from "react";
import './App.css'
import { getWeatherApi } from "./api/weather-api";
// import axios from "axios";

function App() {
  const [weather,setWeather]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [city,setCity]= useState('')
   const [query, setQuery] = useState("");
useEffect(()=>{
const fetchWeather=async()=>{
    if (!city.trim()) return;
    try{
setLoading(true)
setError(null);
    const response=await getWeatherApi(city)
    // console.log("API response:", response)
       setWeather(response.data)
       
  } catch (e){
    setError(e.message);
  setWeather(null);
  }finally{
      setLoading(false)

    }
  };
  
  fetchWeather()
},[city])


  return (
     <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Weather App</h1>
      {loading && (<p>Loading...</p>)}
      {error && <p style={{ color: "red" }}>{error}</p>}
<input 
type='text'
value={query}
onChange={(e)=>setQuery(e.target.value)}
placeholder="Введіть місто"
style={{ padding: "8px", marginRight: "10px" }}
/>
<button onClick={()=>setCity(query)}
   style={{ padding: "8px", cursor: "pointer" }}>
     Пошук
</button>
      {weather?.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>🌡 Температура: {weather.main.temp}°C</p>
          <p>💧 Вологість: {weather.main.humidity}%</p>
          <p>💨 Вітер: {weather.wind.speed} м/с</p>
      </div>
    )}
       </div>
  )
}

export default App
