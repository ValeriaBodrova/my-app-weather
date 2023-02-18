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
  <div className="row mt-3">
    <div className="col-6">
      <div className="clearfix weather-temperature">
        <div className="float-left d-inline-flex">
       <WeatherIcon code={props.info.icon}  />
       </div>
       <div className="d-inline-flex p-3"  >
       <WeatherTempConversion celsius={props.info.temperature} />
      </div>
      </div>
    </div>
    <div className="col-6">
      <ul>
        <li>Humidity: {props.info.humidity}%</li>
        <li>Wind: {props.info.wind} km/h</li>
      </ul>
    </div>
  </div>
    
    </div>
    );
}