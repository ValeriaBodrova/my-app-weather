
import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {

const [weatherData, setWeatherData] = useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response){
  console.log(response.data);
setWeatherData({
  ready: true,
temperature: response.data.temperature.current,
city: response.data.city,
wind: response.data.wind.speed,
humidity: response.data.temperature.humidity,
description: response.data.condition.description,
date: new Date (response.data.time * 1000),
icon: response.data.condition.icon,
});

}

function handleSubmit(event){
  event.preventDefault();
search();
}

function search(){
  const key = "of8d835eb2e54e8t80a14b484afc54de";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleCityChange(event){
setCity(event.target.value);
}

if (weatherData.ready){

  return (
    <div className="Weather">
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
              onChange={handleCityChange}
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
     <WeatherInfo info={weatherData}/>
    </div>
  );
} else {
   
    search();
        
    return "Loading...";
}
}

