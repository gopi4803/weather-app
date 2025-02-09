import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {BackgroundImage} from "./components/BackgroundImage";
import WeatherForecast from "./components/WeatherForecast";
import Astronaut from "./assets/notfound.svg";
import Person from "./assets/search.svg";

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();
  const [loading,setLoading] = useState();
  const [isDataExists,setIsDataExists] = useState(false);
  const [isDataCorrect,setIsDataCorrect] = useState(false);
  const API_KEY = "d0008d85e2adc4cc335cf56d146b7ea3"; 

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
    setLoading(true);
    const response=await fetch(URL);
    const data=await response.json();

    if(data?.cod==="400"){
      setWeather(null);
      setIsDataExists(false);
      toast.warn("No data found for this city");
      return;
    }
    if(data?.cod==="404"){
      console.log(data);
      setWeather(null);
      setIsDataExists(false);
      setIsDataCorrect(false);
      setLoading(false);
      toast.error("City not found");
      return;
    }else{
      console.log(data);
      setLoading(false);
      toast.success(`Fetching data for ${data.city.name}`); 
      setWeather(data);
      setIsDataExists(true);
      setIsDataCorrect(true);
    }
    
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#262424]/80 to-[#191616]/80 pt-[3%] pb-[3%] flex flex-col justify-center items-center gap-3 md:flex-col lg:flex-row lg:gap-0">
      <div className="relative flex flex-col items-center w-[92%] pt-[2%] px-[3%]  h-[65vh] overflow-y-hidden pb-[3%] justify-between rounded-lg lg:rounded-r-none md:w-[85%] md:h-[80vh] lg:flex-col lg:pb-[5%]  lg:w-[48%] lg:h-[88vh] xl:w-[45%]">
        <img
          className="absolute inset-0 object-cover object-top w-[100%] h-[100%]"
          alt=""
          src={
            weather ? BackgroundImage(weather) : "https://i.gifer.com/fyCe.gif"
          }
        />

        {/* Top content */}
        <div className="rounded-md z-10 flex flex-row  items-center w-full py-3 lg:w-full">
          <p className="flex-1 font-bold text-[18px] bg-gradient-to-b from-[#0FA3A8] to-[#807572] text-transparent bg-clip-text text md:text-[24px] lg:text-[24px]">
            Hazz Weather
          </p>
          <div className="flex flex-row gap-1 items-center justify-center">
            <FontAwesomeIcon icon={faLocationArrow} />
            <p>
              {weather
                ? `${weather.city.name},${weather.city.country}`
                : "Unknown Location"}
            </p>
          </div>
        </div>

        {/* bottom content */}
        <div className="z-10 text-[#000] flex flex-col justify-center items-center pb-[8%] md:pb-[10%]">
          <h2 className="px-5 py-2  text-[16px] font-bold font-sans text-[#fff] md:text-3xl md:text-[#000] md:py-5 lg:p-7 rounded-md text-3xl lg:font-bold lg:font-sans lg:text-[28px] lg:text-center xl:text-[30px] xl:text-center">
            The Only Weather App You Need!
          </h2>
          <div className="border-2 border-[#fff] w-[50%] rounded my-2 md:my-4 lg:my-4"></div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-row items-center"
          >
            <ToastContainer />
            <input
              type="search"
              value={city}
              placeholder="Search city"
              onChange={handleChange}
              className="text-[13px] font-medium p-1.5 shadow-xl text-center focus:outline-none mt-3 bg-[#c5c5d0] rounded-l-md capitalize md:p-2 md:text-[21px] lg:text-[17px] lg:font-medium lg:p-2.5 xl:text-xl"
            />
            <button className="bg-gradient-to-b from-[#b7a8a4] to-[#095f62] px-2 py-1 relative top-1.5 rounded-r-md md:p-3 lg:p-[12px]">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>
      {
        loading ? (
          <>
            <div className="w-[92%] h-[60vh] bg-[#7c7c89a6] rounded-lg md:h-[80vh] md:w-[85%] lg:w-[48%] lg:h-[88vh] lg:rounded-l-none xl:w-[45%]">
              <div className="relative w-[100%] h-[100%] flex justify-center items-center">
                <div className="border-8 border-[#f3f3f3] h-[100px] w-[100px] rounded-full animate-spin border-t-[#3498db]"></div>
              </div>
              </div>         
          </>
        )  : (
          <> 
          {isDataExists ?(
            <>
            {isDataCorrect ? (
              <WeatherForecast weather={weather} />
            ):(
              <div className="w-[92%] h-[60vh] bg-[#7c7c89a6] rounded-lg md:h-[80vh] md:w-[85%] lg:w-[48%] lg:h-[88vh] lg:rounded-l-none xl:w-[45%]">
                <div className="rrelative w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                  <p className="text-2xl font-bold text-[#a9a9a9]">
                    Location not found
                  </p>
                  <img 
                  src={Astronaut}
                  alt="an astronaut lost in the space"
                  className="w-4/6"
                  />
                  <p className="text-base text-[#a9a9a9] font-semibold w-[85%] mx-auto md:text-[18px] md:font-bold text-center lg:text-xl lg:font-semibold"> 
                    Oh oh!We are lost in the space and we can't find the location you are looking for.
                  </p>
                </div>
              </div>
            )}
            </>
          ):(
            <div className="w-[92%] h-[60vh] bg-[#7c7c89a6] rounded-lg md:h-[80vh] md:w-[85%] lg:w-[48%] lg:h-[88vh] lg:rounded-l-none xl:w-[45%]">
              <div className="relative w-[100%] h-[100%] flex flex-col justify-center items-center gap-8">
                <p className="text-2xl font-bold text-[#a9a9a9]">No Data Yet</p>
                <img
                  src={Person}
                  alt="a person thinking about what place to find"
                  className="w-4/6"
                />
                <p className="text-base text-[#a9a9a9] font-semibold w-[90%] mx-auto md:text-[18px] text-center md:font-bold lg:text-xl lg:w-[80%] lg:mx-auto">
                  Don't worry, if you don't know what to search for, try:
                  Atlanta, Vancouver or may be Nuzvid.
                </p>
              </div>
            </div>
          )}
          </>
        )  
      }
      </div>
    </>
  );
}

export default App;
