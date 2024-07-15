import React from "react"
import Box from "./Box";
import WeatherComponent from "./Box";
function Body({ weatherData }) {
  const {
    name,
    region,
    country,
    localtime,
    text,
    icon,
    temp_c,
    temp_f,
    mintemp_c,
    windspeed,
    wind_dir,
    humidity,
    precip_in,
    vis_km,
    pm10,
    forecast_array,
  } = weatherData;
console.log(weatherData);
  return (
    <div className="box-container">
     <div className="box-first">
    <div className="today-weather">
      <div className="city-detail">
        <section>
          <h2>
          {name} ,{region},{country}
        </h2>
        </section>
        <section>
           <img src={icon} width="100px" height="90px" />
        <h4 style={{
          fontStyle : "cursive"
        }}>{text}</h4>
        <h3>{temp_c}<sup>o</sup>C</h3>
        </section>
       <section>
        
       </section>
        <h2 style={{
          float: "none"
        }}>{localtime}</h2>
      </div>
      <div className="small-section">
        <div className="small-container">
        <img src="./images/precipitation.png" width="40px" />
<h3>Precipitation: {precip_in}</h3>
        </div>
        <div className="small-container">
          <img src="./images/windspeed.png" width="40px" />
          <h4>Windspeed: {windspeed}</h4>
        </div>
        <div className="small-container">
        <img src="./images/humidity.png" width="40px" />
        <h4>Humidity: {humidity}</h4>
        </div>
        <div className="small-container">
        <img src="./images/visibility.png" width="40px" />
        <h4>Visibility: {vis_km}</h4>
        </div>
        <div className="small-container">
        <img src="./images/air-quality.png" width="40px" />
        <h4>Air Quality: {pm10}</h4>
        </div>
      </div>
    </div>
  </div>
      <div className="box-second">
        <WeatherComponent days={forecast_array} />
      </div>
    </div>
  );
}

export default Body;
