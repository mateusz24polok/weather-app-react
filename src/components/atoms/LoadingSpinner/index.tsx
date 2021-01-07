import React from "react";
import { BaseWheel, RotatingQuarter } from "./styled";

const LoadingSpinner: React.FC = () => {
  return (
      <BaseWheel>
        <RotatingQuarter />
      </BaseWheel>
  );
};

export default LoadingSpinner;
