import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

import Footer from "./Footer";
import WeatherDetails from "./Body";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_API_KEY;
  
  const fetchWeather = async (q) => {
    const city = await q ? q : "london";
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`;
    
    try {
      const response = await axios.get(url);
      const { data } = response;

     const weatherInfo = {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localtime: data.location.localtime,
        text: data.current.condition.text,
        icon: data.current.condition.icon,

        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        mintemp_c: data.forecast.forecastday[0].day.mintemp_c,


        windspeed: data.current.wind_kph,
        wind_dir: data.current.wind_dir,
        humidity: data.current.humidity,
        precip_in: data.current.precip_in,
        vis_km: data.current.vis_km,

        pm10: data.current.air_quality.pm10,

        forecast_array: data.forecast.forecastday,
      };

      setWeatherData(weatherInfo)
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    } finally {
      setLoading(false); // Ensure loading state is updated
    }
  };

  const handleClick = async (city) => {
    setLoading(true);
    await fetchWeather(city);
  };

  useEffect(() => {
    fetchWeather("New Delhi"); // Fetch weather for provided location or default to 'Delhi'
  }, []);


  return (
    <>
      <Header weatherData={handleClick} />
      {loading ? (<div className="loading-gif">
        <div>
          <img src="../../public/images/spinner-8565_512.gif" />
        <h1>Loading weather data...</h1>
        </div>
      </div>
      ) : (
        <WeatherDetails weatherData={weatherData} /> // Pass fetched data as props
      )}
      <Footer />
    </>
  );
}

export default App;
