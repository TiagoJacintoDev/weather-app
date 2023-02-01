import {
  convertDegreeToDirection,
  convertUnixTime,
} from "../helpers/functions";
import { FullWeatherApiResponse } from "../types/FullWeatherApiResponse";

interface Props {
  speedUnit: "imperial" | "metric";
  weather: FullWeatherApiResponse;
}

export const Details = ({ speedUnit, weather }: Props) => {
  const {
    feels_like,
    humidity,
    wind_speed,
    wind_deg,
    uvi,
    sunrise,
    sunset,
    visibility,
  } = weather?.current || {};
  const { description } = weather?.daily[0].weather[0] || {};
  const { min, max } = weather?.daily[0].temp || {};
  const { timezone_offset } = weather || {};

  return (
    <div className="mt-4">
      <h2 className="text-2xl max-md:text-center tracking-wide font-light capitalize">
        Feels Like {feels_like && Math.round(feels_like)}°. {description}
      </h2>
      <div className="grid gap-y-3 grid-cols-2 sm:flex font-light mt-4 sm:justify-between">
        <div className="flex flex-col justify-around gap-3">
          <span className="text-lg md:text-xl text-center">
            High: {max && Math.round(max)}°
          </span>
          <span className=" text-lg md:text-xl text-center">
            Low: {min && Math.round(min)}°
          </span>
        </div>

        <div className="flex flex-col justify-around gap-3">
          {sunrise && (
            <span className="text-lg md:text-xl text-center">
              Sunrise: {convertUnixTime(sunrise + (timezone_offset || 0))}
            </span>
          )}
          {sunset && (
            <span className="text-lg md:text-xl text-center">
              Sunset: {convertUnixTime(sunset + (timezone_offset || 0))}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-around gap-3">
          <span className="text-lg md:text-xl text-center">
            UV Index: {uvi}
          </span>
          <span className="text-lg md:text-xl text-center">
            Humidity: {humidity}%
          </span>
        </div>

        <div className="flex flex-col justify-around gap-3">
          <span className="text-lg md:text-xl text-center">
            Wind: {wind_speed} {speedUnit === "imperial" ? "mph" : "km/h"}{" "}
            {convertDegreeToDirection(wind_deg)}
          </span>
          <span className="text-lg md:text-xl text-center">
            Visibility: {visibility ? visibility / 1000 : null}{" "}
            {speedUnit === "imperial" ? "mi" : "km"}
          </span>
        </div>
      </div>
    </div>
  );
};
