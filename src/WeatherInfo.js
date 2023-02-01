import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTempConversion from "./WeatherTempConversion.js"

export default function WeatherInfo(props){
    return (
        <div className ="WeatherInfo">
    <div className="overview">
    <h1>{props.info.city}</h1>
    <ul>
      <li>Last updated: <FormattedDate date= {props.info.date} /></li>
      <li>{props.info.description}</li>
    </ul>
  </div>
  <div className="row">
    <div className="col-6">
      <div className="clearfix weather-temperature">
      <div>
       <WeatherIcon code={props.info.icon}  />
       </div>
       <WeatherTempConversion celsius={props.info.temperature} />
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {props.info.humidity}%</li>
        <li>Wind: {props.info.wind} km/h</li>
      </ul>
    </div>
  </div>
    <div>
    <a href="https://github.com/ValeriaBodrova/my-app-weather">Open-soursed</a> by <a href="https://bucolic-bubblegum-022291.netlify.app/">Valeria Bodrova</a> from <a href="https://www.shecodes.io/">SheCodes</a>
    </div>
    </div>
    );
}