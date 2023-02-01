import { getWeatherIcon } from "../helpers/functions";
import { Day } from "../types/Day";
import { Icon, Main } from "../types/FullWeatherApiResponse";

interface Props {
  hour?: string | null;
  day?: Day | null;
  icon: Icon;
  weather: Main;
  temperature: number;
}

export const Weather = ({ hour, day, icon, weather, temperature }: Props) => {
  return (
    <div className="grid grid-cols-4 sm:flex sm:flex-col justify-items-center items-center text-center max-sm:mx-4">
      {day ? <p>{day}</p> : <p>{hour}</p>}
      <img src={getWeatherIcon(icon)} alt="Weather Icon" />
      <p>{weather}</p>
      <p>{Math.round(temperature)}°</p>
    </div>
  );
};
