import React from "react";

export default function formattedDate(props){
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[props.date.getDay()];
let hour = props.date.getHours();
let minutes = props.date.getMinutes();

if (minutes < 10) {
    minutes = `0${minutes}`;
}
if (hours < 10) {
    hours = `0${hours}`;
}


    return <div>
        {day} {hour}:{minutes}
    </div>;
}