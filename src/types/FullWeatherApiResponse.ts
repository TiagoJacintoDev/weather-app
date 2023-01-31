export interface FullWeatherApiResponse {
  city: string;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Hourly;
  daily: Daily[];
  alerts?: Alert[];
  minutely?: Minutely[];
}

export type Hourly = Current[];

export interface Alert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}

export interface Current {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: Weather[];
  pop?: number;
  snow?: Rain;
  rain?: Rain;
}

export interface Rain {
  "1h": number;
}

export interface Weather {
  id: number;
  main: Main;
  description: Description;
  icon: Icon;
}

export type Description =
  | "overcast clouds"
  | "clear sky"
  | "light snow"
  | "scattered clouds"
  | "broken clouds"
  | "few clouds"
  | "light rain"
  | "very heavy rain"
  | "moderate rain"
  | "heavy intensity rain"
  | "snow"
  | "rain and snow"
  | "freezing rain"
  | "thunderstorm with light rain"
  | "thunderstorm with rain"
  | "thunderstorm with heavy rain"
  | "light thunderstorm"
  | "thunderstorm"
  | "heavy thunderstorm"
  | "ragged thunderstorm"
  | "thunderstorm with light drizzle"
  | "thunderstorm with drizzle"
  | "thunderstorm with heavy drizzle"
  | "light intensity drizzle"
  | "drizzle"
  | "heavy intensity drizzle"
  | "light intensity drizzle rain"
  | "drizzle rain"
  | "heavy intensity drizzle rain"
  | "shower rain and drizzle"
  | "heavy shower rain and drizzle"
  | "shower drizzle"
  | "light rain"
  | "moderate rain"
  | "heavy intensity rain"
  | "very heavy rain"
  | "extreme rain"
  | "freezing rain"
  | "light intensity shower rain"
  | "shower rain"
  | "heavy intensity shower rain"
  | "ragged shower rain"
  | "light snow"
  | "heavy snow"
  | "sleet"
  | "shower sleet"
  | "light rain and snow"
  | "rain and snow"
  | "light shower snow"
  | "shower snow"
  | "heavy shower snow"
  | "mist"
  | "smoke"
  | "haze"
  | "sand, dust whirls"
  | "fog"
  | "sand"
  | "dust"
  | "volcanic ash"
  | "squalls"
  | "tornado"
  | "clear sky"
  | "few clouds"
  | "scattered clouds"
  | "broken clouds"
  | "overcast clouds"
  | "tornado"
  | "tropical storm"
  | "hurricane"
  | "cold"
  | "hot"
  | "windy"
  | "hail"
  | "calm"
  | "light breeze"
  | "gentle breeze"
  | "moderate breeze"
  | "fresh breeze"
  | "strong breeze"
  | "high wind, near gale"
  | "gale"
  | "severe gale"
  | "storm"
  | "violent storm"
  | "hurricane";

export type Icon =
  | "01n"
  | "01d"
  | "02n"
  | "02d"
  | "03n"
  | "03d"
  | "04n"
  | "04d"
  | "09n"
  | "09d"
  | "10n"
  | "10d"
  | "11n"
  | "11d"
  | "13n"
  | "13d"
  | "50n"
  | "50d";

export type Main =
  | "Clouds"
  | "Clear"
  | "Snow"
  | "Rain"
  | "Drizzle"
  | "Thunderstorm"
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Ash"
  | "Squall"
  | "Tornado"
  | "Dust"
  | "Sand"
  | "Ash"
  | "Squall"
  | "Tornado"
  | "Tropical Storm"
  | "Hurricane"
  | "Cold"
  | "Hot"
  | "Windy"
  | "Hail"
  | "Calm"
  | "Light breeze"
  | "Gentle breeze"
  | "Moderate breeze"
  | "Fresh breeze"
  | "Strong breeze"
  | "High wind, near gale"
  | "Gale"
  | "Severe gale"
  | "Storm"
  | "Violent storm"
  | "Hurricane";

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: Temp;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  snow?: number;
  uvi: number;
  rain?: number;
}

export interface FeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Minutely {
  dt: number;
  precipitation: number;
}
