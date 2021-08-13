// styled.d.ts
import "styled-components";

interface IPalette  {
   text_clr: string,
   text_2: string, 
   main_heading: string, 
   heading: string, 
   text_heading: string, 
   primary: string, 
   navlink: string, 
   black: string, 
}

declare module "styled-components" {
   export interface DefaultTheme {
      palette: IPalette;
   }
}
