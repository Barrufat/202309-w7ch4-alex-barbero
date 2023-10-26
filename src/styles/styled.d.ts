import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colours: {
      main: string;
      background: string;
    };
    typography: {
      family: string;
      size: string;
    };
  }
}
