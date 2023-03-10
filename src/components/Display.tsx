import {
  getWeatherIcon,
  convertUnixToDayOfWeek,
  convertUnixTime,
} from "../helpers/functions";
import { FullWeatherApiResponse } from "../types/FullWeatherApiResponse";
import { useState } from "react";
import { Details } from "./Details";
import { Weather } from "./Weather";

interface Props {
  unit: "imperial" | "metric";
  changeUnit: (unit: "imperial" | "metric") => void;
  weather?: FullWeatherApiResponse;
}

export const Display = ({ unit, changeUnit, weather }: Props) => {
  const [display, setDisplay] = useState<"daily" | "hourly" | "details">(
    "daily"
  );

  return (
    <main className="w-full sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 sm:p-14 sm:container rounded-xl sm:shadow-2xl text-white">
      {weather && (
        <>
          <div className="max-sm:flex-col flex items-center justify-between max-sm:mt-32">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-light capitalize">
                {weather.city}
              </h2>
              <h3 className="max-sm:hidden text-xl font-light mt-6">
                {new Date().toLocaleDateString(undefined, {
                  dateStyle: "long",
                })}
              </h3>
              <img
                className="w-20 h-20 mt-4 max-sm:hidden"
                src={getWeatherIcon(weather.current.weather[0].icon)}
                alt="Current Weather Icon"
              />
              <h2 className="text-xl md:text-2xl lg:text-4xl font-light mt-4 md:mt-6 max-sm:text-center">
                {weather.current.weather[0].main}
              </h2>
            </div>

            <div className="text-center font-light">
              <p className="text-7xl md:text-8xl lg:text-9xl my-1">
                {Math.round(weather.current.temp)}°
              </p>
              <span className="text-xl text-center mr-6">
                H: {Math.round(weather.daily[0].temp.max)}°
              </span>
              <span className="text-xl text-center">
                L: {Math.round(weather.daily[0].temp.min)}°
              </span>
            </div>
          </div>

          <div className="max-sm:justify-center flex gap-6 mt-10 text-xl font-light border-b pb-1">
            <button
              className={`${
                display === "daily"
                  ? "text-white"
                  : "text-gray-200 text-opacity-50"
              } hover:text-white transition-colors duration-400`}
              onClick={() => setDisplay("daily")}
            >
              Daily
            </button>
            <button
              className={`${
                display === "hourly"
                  ? "text-white"
                  : "text-gray-200 text-opacity-50"
              } hover:text-white transition-colors duration-400`}
              onClick={() => setDisplay("hourly")}
            >
              Hourly
            </button>
            <button
              className={`${
                display === "details"
                  ? "text-white"
                  : "text-gray-200 text-opacity-50"
              } hover:text-white transition-colors duration-400`}
              onClick={() => setDisplay("details")}
            >
              Details
            </button>

            {unit === "imperial" ? (
              <button onClick={() => changeUnit("metric")}>F°</button>
            ) : (
              <button onClick={() => changeUnit("imperial")}>C°</button>
            )}
          </div>

          {display === "daily" && (
            <div className="max-sm:flex-col flex justify-between mt-4">
              {weather.daily.map((day, index) => (
                <Weather
                  temperature={day.temp.max}
                  icon={day.weather[0].icon}
                  day={convertUnixToDayOfWeek(day.dt)}
                  weather={day.weather[0].main}
                />
              ))}
            </div>
          )}

          {display === "hourly" && (
            <div className="max-sm:flex-col flex justify-between mt-4 w-full">
              {weather?.hourly.map(
                (hour, index) =>
                  index < 8 && (
                    <Weather
                      temperature={hour.temp}
                      icon={hour.weather[0].icon}
                      hour={convertUnixTime(hour.dt)}
                      weather={hour.weather[0].main}
                    />
                  )
              )}
            </div>
          )}

          {display === "details" && (
            <Details speedUnit={unit} weather={weather} />
          )}
        </>
      )}
    </main>
  );
};
