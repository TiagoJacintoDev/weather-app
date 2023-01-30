import { getWeatherData } from "./services/api";
import { useEffect, useState } from "react";
import { WeatherAPIResponse } from "./types/WeatherApiResponse";
import { SearchBar } from "./components/SearchBar";

export const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherAPIResponse>();
  const [city, setCity] = useState("London");
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");
  const [timeSpan, setTimeSpan] = useState<"daily" | "hourly">("daily");
  const [isCityValid, setIsCityValid] = useState(true);

  const changeCity = (city: string) => setCity(city);

  const changeWeatherData = async () => {
    try {
      const weatherData = await getWeatherData(city);
      setWeatherData(weatherData);
      setIsCityValid(true);
    } catch {
      setIsCityValid(false);
      setTimeout(() => setIsCityValid(true), 4 * 1000);
    }
  };

  useEffect(() => {
    changeWeatherData();
  }, [city]);

  console.log(weatherData);

  return (
    <main className="bg-blue-600 w-full h-full">
      <SearchBar changeCity={changeCity} isCityValid={isCityValid} />
    </main>
  );
};
