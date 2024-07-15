import React from 'react';

function WeatherComponent({ days = [] }){
  return (<>
      {days.length > 0 ? (
        days.map((day, dayIndex) =>
          day.hour.map((hr, hrIndex) => (
            <div className="long-box" key={`${dayIndex}-${hrIndex}`}>
              <span>{hr.time}</span>
              <div className="imgIcn">
                <img style={{ width: "100px" }} src={hr.condition.icon} alt={hr.condition.text} />
              </div>
              <p style={{ fontSize: 'large', color: '#ffc02c' }}>
                <b>
                  {hr.temp_c} <sup>°C</sup>
                </b>
              </p>
              <br />
              <p>{hr.condition.text}</p>
              <p>{hr.wind_kph} km/h</p>
            </div>
          ))
        )
      ) : (
        <p></p>
      )} </>
  );
};

export default WeatherComponent;
