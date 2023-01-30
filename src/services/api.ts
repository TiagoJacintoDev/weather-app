import axios from "axios";

export const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/weather",
});

export const getWeatherData = async (city: string) => {
  const { data } = await api.get(
    `?q=${city}&appid=${import.meta.env.VITE_API_KEY}`
  );
  return data;
};
