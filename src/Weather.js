
import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {

const [weatherData, setWeatherData] = useState({});
const [ready, setReady] = useState(false);


if (ready){

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
        <div>
        <a href="https://github.com/ValeriaBodrova/my-app-weather">Open-soursed</a> by <a href="https://bucolic-bubblegum-022291.netlify.app/">Valeria Bodrova</a> from <a href="https://www.shecodes.io/">SheCodes</a>
        </div>
    </div>
  );
} else {
    function handleTemp(response){
        console.log(response.data);
    setWeatherData({
temperature: response.data.temperature.current,
city: response.data.city,
wind: response.data.wind.speed,
humidity: response.data.temperature.humidity,
description: response.data.condition.description,
date: response.data.time
    }
       );
    setReady(true);
    }
    
        const key = "of8d835eb2e54e8t80a14b484afc54de";
        let query = "Kyiv"
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleTemp);
    return "Loading...";
}
  
}
