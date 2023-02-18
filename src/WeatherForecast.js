import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
      setLoaded(false);
    }, [props.coordinates]);
  

    function handleResponse(response){
      console.log(response.data.daily);
setForecast(response.data.daily);
setLoaded(true);
    }

    

if (loaded) {

    return(
        <div className="WeatherForecast">
        <div className="row">
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
         
        </div>
      </div>
    );
} else {
    const key = "of8d835eb2e54e8t80a14b484afc54de";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${key}`;
  axios.get(apiUrl).then(handleResponse);

  return null;
}
}