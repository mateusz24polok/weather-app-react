export const getCelsiusTemperature = (kelvinDegree: number | null) => {
  if (typeof kelvinDegree === "number") {
    const celsiusDegree = kelvinDegree - 273.15;
    return celsiusDegree.toFixed(2);
  }
};

export const getFahrenheitTemperature = (kelvinDegree: number | null) => {
  if (typeof kelvinDegree === "number") {
    const fahrenheitDegree = (kelvinDegree * 9) / 5 - 459.67;
    return fahrenheitDegree.toFixed(2);
  }
};
