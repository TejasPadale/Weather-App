import React, { useState } from "react";

import clear_icon from "./Components/Assets/clear.png";
import cloudy_icon from "./Components/Assets/cloudy.png";
import drizzle_icon from "./Components/Assets/drizzle.png";
import humidity_icon from "./Components/Assets/humidity.png";
import rain_icon from "./Components/Assets/rain.png";
import search_icon from "./Components/Assets/search.png";
import snow_icon from "./Components/Assets/snow.png";
import wind_icon from "./Components/Assets/wind.png";

const WeatherApp = () => {
  let api_key = "f2a556d8d972658c70a711d34d4a122e";
  const [wicon, setWicon] = useState(cloudy_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("hunidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    location[0].innerHTML = data.name;
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
   
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloudy_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  return (
    
    <div className="w-96 m-auto mt-16 mb-20 rounded-lg font-custom bg-gradient-to-b from-slate-900 to-slate-700 container">
      <div className="flex justify-center gap-4 pt-10 px-5 top-bar">
        <input
          type="text"
          className="flex w-96 h-12 bg-white border-none outline-none rounded-full pl-10 text-xl font-normal cityInput"
          placeholder="Search"
        />
        <div
          className=" flex justify-center items-center w-12 h-12 cursor-pointer search-icon"
          onClick={search}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="mt-7 flex justify-center weather-image">
        <img src={wicon} alt="" className="w-32 h-32" />
      </div>
      <div className="flex justify-center text-white text-6xl font-normal mb-3 weather-temp">
        Temp°C
      </div>
      <div className="flex justify-center text-white text-6xl font-normal weather-location">
        City
      </div>
      <div className="mt-12 text-white flex justify-center pb-12 data-container">
        <div className="m-auto flex items-start gap-3 element">
          <img src={humidity_icon} alt="" className="mt-3 w-9 h-9 icon" />
          <div className="text-4xl font-normal data">
            <div className="hunidity-percent">--%</div>
            <div className="text-xl font-normal text">Humidity</div>
          </div>
        </div>
        <div className="m-auto flex items-start gap-3 element">
          <img src={wind_icon} alt="" className="mt-3 w-9 h-9 icon" />
          <div className="text-4xl font-normal data">
            <div className="wind-rate">-- km/h</div>
            <div className="text-xl font-normal text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
