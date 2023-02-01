import {
  convertDegreeToDirection,
  convertUnixTime,
} from "../helpers/functions";
import { FullWeatherApiResponse } from "../types/FullWeatherApiResponse";

interface Props {
  speedUnit: "imperial" | "metric";
  weather: FullWeatherApiResponse | undefined;
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

  return (
    <div className="mt-4">
      <h2 className="text-xl text-center md:text-left md:text-2xl tracking-wide font-light capitalize">
        Feels Like {feels_like && Math.round(feels_like)}°. {description}
      </h2>
      <div className="flex flex-col md:flex-row md:space-y-0 place-content-center md:justify-between font-extralight max-sm:flex-col mt-4 justify-between">
        <div className="flex md:flex-col justify-around md:space-y-6">
          <span>High: {max && Math.round(max)}°</span>
          <span>Low: {min && Math.round(min)}°</span>
        </div>

        <div className="flex md:flex-col justify-around md:space-y-6">
          <span>Sunrise: {convertUnixTime(sunrise)}</span>
          <span>Sunset: {convertUnixTime(sunset)}</span>
        </div>

        <div className="flex md:flex-col justify-around md:space-y-6">
          <span>UV Index: {uvi}</span>
          <span>Humidity: {humidity}%</span>
        </div>

        <div className="flex md:flex-col justify-around md:space-y-6">
          <span>
            Wind: {wind_speed} {speedUnit === "imperial" ? "mph" : "km/h"}{" "}
            {convertDegreeToDirection(wind_deg)}
          </span>
          <span>
            Visibility: {visibility ? visibility / 1000 : null}{" "}
            {speedUnit === "imperial" ? "mi" : "km"}
          </span>
        </div>
      </div>
    </div>
  );
};
