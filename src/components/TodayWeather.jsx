import React from "react";

const TodayWeather = ({ weather, date }) => {
  return (
    <div className="bg-[#7c7c89a6] flex flex-row gap-4 justify-center py-2 rounded-lg cursor-pointer shadow-xl border border-transparent hover:border-[#fff] md:gap-5">
      {/* left info */}
      <div className="flex flex-col space-y-2 px-1.5 text-center justify-center items-center lg:px-4">
        <p className="text-base md:text-xl font-bold text-[#9ee4e6]">
          {(parseInt(weather.list[0].main.temp) - 273.15).toFixed()}°C
        </p>
        <p className="text-[13px] font-semibold text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
          {weather.list[0].weather[0].description.toUpperCase()}
        </p>
        {/* image */}
        <img
          src={`https://openweathermap.org/img/wn/${weather?.list[0].weather[0]?.icon}@2x.png`}
          alt="img"
          className="w-14"
        />
        <p className="text-[16px] font-semibold text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px] ">
          {date(weather.list[0].dt)}
        </p>
      </div>

      <div className="border border-[#fff] rounded-lg mx-1 md:mx-10 lg:mx-5 xl:mx-1"></div>
      {/* right info */}
      <div className="flex flex-col justify-between px-1.5 lg:px-10">
        <p className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
          Feels Like :{" "}
          <span className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
            {(parseInt(weather.list[0].main.feels_like) - 273.15).toFixed()}
            °C
          </span>
        </p>
        <p className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
          Humidity :{" "}
          <span className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
            {weather.list[0].main.humidity}%
          </span>
        </p>
        <p className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
          Min Temp :{" "}
          <span className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
            {(parseInt(weather.list[0].main.temp_min) - 273.15).toFixed()}
            °C
          </span>
        </p>
        <p className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
          Max Temp :{" "}
          <span className="text-base font-medium text-[#fff] md:text-[18px] lg:text-[16px] xl:text-[18px]">
            {(parseInt(weather.list[0].main.temp_max) - 273.15).toFixed()}
            °C
          </span>
        </p>
      </div>
    </div>
  );
};

export default TodayWeather;
 