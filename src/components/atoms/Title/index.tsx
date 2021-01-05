import React from "react";
import { StyledTitle } from "./styled";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
