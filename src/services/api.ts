import axios from "axios";
import { FullWeatherApiResponse } from "../types/FullWeatherApiResponse";
import { WeatherAPIResponse } from "../types/WeatherApiResponse";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/",
});

export const getCityCoordinates = async (city: string) => {
  const { data } = await api.get(
    `2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
  );
  const castedData = data as WeatherAPIResponse;

  const { lat, lon } = castedData.coord;
  return { latitude: lat, longitude: lon };
};

export const getWeatherData = async (
  city: string,
  units: "metric" | "imperial"
) => {
  const { latitude, longitude } = await getCityCoordinates(city);

  const { data } = await api.get(
    `3.0/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );

  return { ...data, city } as FullWeatherApiResponse;
};
