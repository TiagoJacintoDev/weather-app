import { getWeatherData } from "./services/api";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Display } from "./components/Display";
import { FullWeatherApiResponse } from "./types/FullWeatherApiResponse";

export const App = () => {
  const [weather, setWeather] = useState<FullWeatherApiResponse>();
  const [city, setCity] = useState("Aveiro");
  const [unit, setUnit] = useState<"imperial" | "metric">("metric");
  const [isCityValid, setIsCityValid] = useState(true);

  const changeCity = (city: string) => setCity(city);
  const changeUnit = (unit: "imperial" | "metric") => setUnit(unit);

  const changeWeatherData = async () => {
    try {
      setWeather(await getWeatherData(city, unit));
      setIsCityValid(true);
    } catch {
      setIsCityValid(false);
      setTimeout(() => setIsCityValid(true), 4 * 1000);
    }
  };

  useEffect(() => {
    changeWeatherData();
  }, [city, unit]);

  return (
    <>
      <SearchBar changeCity={changeCity} isCityValid={isCityValid} />
      <Display unit={unit} changeUnit={changeUnit} weather={weather} />
    </>
  );
};
