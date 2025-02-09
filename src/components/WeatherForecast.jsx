import React, { useState } from "react";
import DaysForecast from "./DayForecast";
import TodayWeather from "./TodayWeather";

const WeatherForecast = ({ weather }) => {
  const [days] = useState(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);
  const [months] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  function displayDate(d) {
    var date = new Date(d * 1000);
    var day = date.getDate();
    var month = months[date.getMonth()];
    var years = date.getFullYear();
    return day + " " + month + " " + years;
  }
  const forecast = weather
    ? weather.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5)
        .map((item) => {
          let date = new Date(item.dt * 1000);
          const day = days[date.getDay()];
          const temperature = Math.round(item.main.temp - 273.15);
          const image = item.weather[0].icon;
          const description = item.weather[0].description;
          return { day, image, temperature, description };
        })
    : [];
  return (
    <>
      {weather ? (
        <div className="flex flex-col w-[92%] pt-[2%] px-[3%] pb-[12%] h-[70vh] bg-[#7c7c89a6]  rounded-lg md:h-[75vh] md:w-[85%] lg:w-[48%] lg:h-[88vh] lg:rounded-l-none xl:w-[45%]">
          <div className="flex flex-col lg:py-6 xl:py-0">
            {/* top */}
            <div className="py-2">
              <h1 className="font-bold text-[20px] text-[#fff] py-3 text-center md:text-[25px] md:text-start">
                Today
              </h1>
            </div>
            {/* bottom  */}
            <TodayWeather weather={weather} date={displayDate} />
            <div className="flex flex-col space-y-3">
              {/* top  */}
              <div>
                <p className="text-[20px] font-bold text-[#fff] py-4 text-center md:text-[25px] md:text-start">
                  More On {weather.city.name}, {weather.city.country}{" "}
                </p>
              </div>
              {/* bottom */}
              <div className="flex flex-row  bg-[#7c7c89a6] justify-between p-4 rounded-lg border border-transparent hover:border-[#fff] border-t cursor-pointer shadow-xl">
                <div className="flex flex-row overflow-x-auto space-x-2">
                  {forecast.map((item, index) => (
                    <DaysForecast key={index} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[92%] h-[60vh] bg-[#7c7c89a6]  md:h-[80vh] md:w-[85%] lg:w-[48%] lg:h-[88vh] rounded-l-none xl:w-[45%]">
          <div className="relative w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
            <p className="text-2xl font-bold text-[#a9a9a9]">
              Location Not Found
            </p>
            <img
              src="./assets/notfound.svg"
              alt="an astronaut lost in the space"
              className="w-4/6"
            />
            <p className="text-base text-[#a9a9a9] font-semibold w-[85%] mx-auto md:text-[18px] md:font-bold text-center lg:text-xl lg:font-semibold">
              Oh oh! We're lost in space finding that place.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherForecast;
