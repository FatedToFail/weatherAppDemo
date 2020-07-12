export default interface Forecast {
  temp: { day: number };
  weather: { description: string, icon: string }[];
  dt: string;
}
