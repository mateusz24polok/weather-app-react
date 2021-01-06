import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      contours: string;
      detailsText: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    contours: "white",
    detailsText: "#E1DCDB",
  },
};
