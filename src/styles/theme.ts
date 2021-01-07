import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      contours: string;
      detailsText: string;
      loadingSpinnerInterior: string;
      loadingSpinnerBorder: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    contours: "white",
    detailsText: "#E1DCDB",
    loadingSpinnerInterior: "#7D7D7D",
    loadingSpinnerBorder: "#F1EEEE",
  },
};
