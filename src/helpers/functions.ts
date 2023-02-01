import { Day } from "../types/Day";
import { Icon } from "../types/FullWeatherApiResponse";

export const getWeatherIcon = (icon: Icon) => {
  return `https://openweathermap.org/img/wn/${icon}.png`;
};

export const convertDegreeToDirection = (degree?: number) => {
  if (!degree) return null;
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  const compassMaxDegrees = 360;
  const deviationFromGeneralDirections = 22.5;

  const index = Math.round(
    (degree % compassMaxDegrees) / deviationFromGeneralDirections
  );
  return directions[index];
};

export const convertUnixTime = (unixTime?: number) => {
  if (!unixTime) return null;
  const date = new Date(unixTime * 1000);
  return date.toLocaleTimeString(undefined, { timeStyle: "short" });
};

export const convertUnixToDayOfWeek = (unixTime?: number) => {
  if (!unixTime) return null;
  const date = new Date(unixTime * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()] as Day;
};
