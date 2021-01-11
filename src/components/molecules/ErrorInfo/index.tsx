import React from "react";
import { useSelector } from "react-redux";
import { selectErrorCity } from "../../../slices/WeatherSlice";

const ErrorInfo: React.FC = () => {
  const ErrorCity = useSelector(selectErrorCity);
  return (
    <>
      {ErrorCity === "" ? (
        <p>Error - something went wrong</p>
      ) : (
        <p>
          Error - something went wrong - Propably there is no city like{" "}
          {ErrorCity}
        </p>
      )}
    </>
  );
};

export default ErrorInfo;
