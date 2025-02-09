import React from "react";

const DaysForecast = ({ item }) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center px-2 py-2">
      <p className="text-base font-semibold md:text-lg  text-[#fff] md:font-bold">
        {item.day}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${item.image}@2x.png`}
        alt="w-icon"
        className="w-10"
      />
      <p className="text-[12px] text-[#000] font-medium w-[80%] mx-auto text-center md:text-[14px] lg:text-[16px]">
        {item.description.toUpperCase()}
      </p>
      <p className="text-[14px]  font-medium text-[#9ee4e6] md:text-[16px]">
        {item.temperature}°C
      </p>
    </div>
  );
};

export default DaysForecast;
