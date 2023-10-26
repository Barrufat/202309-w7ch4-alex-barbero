import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: {
      main: string;
      secondary: string;
      text: string;
      accent: string;
      background: string;
    };
    typography: {
      family: string;
      size: string;
    };
  }
}
