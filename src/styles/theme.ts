import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      contours: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    contours: "white",
  },
};
