import { getWeatherData } from "./services/api";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Display } from "./components/Display";
import { FullWeatherApiResponse } from "./types/FullWeatherApiResponse";
import { useQuery } from "./hooks/useQuery";

export const App = () => {
  const [city, setCity] = useState("Aveiro");
  const [unit, setUnit] = useState<"imperial" | "metric">("metric");

  const changeCity = (city: string) => setCity(city);
  const changeUnit = (unit: "imperial" | "metric") => setUnit(unit);

  const {
    data: weather,
    error: isCityInvalid,
    isLoading,
  } = useQuery<FullWeatherApiResponse>(
    () => getWeatherData(city, unit),
    city,
    unit
  );

  return (
    <>
      <SearchBar changeCity={changeCity} isCityValid={!isCityInvalid} />
      <Display unit={unit} changeUnit={changeUnit} weather={weather} />
    </>
  );
};
