import React, { useState } from "react";

export default function WeatherTempConversion(props){
const [unit, setUnit] = useState("celsius");

function showFahrenheit(event){
    event.preventDefault();
    setUnit("Fahrenheit");
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

   if (unit === "celsius" ){
    return (
    <div>
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units">
       °C | <a href="/" onClick={showFahrenheit}>°F</a>
        </span>
      </div>)
   } else {
    let fahrenheit = (props.celsius * 9 ) / 5 *32;
    return (
        
        <div>
            <strong>{Math.round(fahrenheit)}</strong>
            <span className="units">
              <a href="/"  onClick={showCelsius}>°C</a> | °F
            </span>
          </div>)
   }

}