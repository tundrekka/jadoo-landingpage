import { FlattenSimpleInterpolation } from "styled-components"

export const breakpoints = {
   mobile: '400px',
   tablet_landscape: '768px',
   laptop: '978px',
   desktop: '1200px',

   // Material-UI breakpoints
   sm: '600px',
   md: '960px',
   lg: '1280px',
   xl: '1920px',
}
const {mobile,tablet_landscape, laptop, desktop} = breakpoints
const {sm, md, lg, xl} = breakpoints

export const DEVICE = {
   mobile: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (max-width: ${mobile}) {
            ${styles}
         }
      `
   },
   sm: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${sm}) {
            ${styles}
         }
      `
   },
   tablet: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${tablet_landscape}) {
            ${styles}
         }
      `
   },
   laptop: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${laptop}) {
            ${styles}
         }
      `
   },
   desktop: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${desktop}) {
            ${styles}
         }
      `
   }
}

export const MUI_MQuery = {
   sm: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${sm}) {
            ${styles}
         }
      `
   },
   md: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${md}) {
            ${styles}
         }
      `
   },
   lg: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${lg}) {
            ${styles}
         }
      `
   },
   xl: (styles: FlattenSimpleInterpolation) => {
      return `
         @media screen and (min-width: ${xl}) {
            ${styles}
         }
      `
   },
}

