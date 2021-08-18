import { Grid } from "@material-ui/core"
import styled from "styled-components"
import { MUI_MQuery } from "theme/breakpoints"
import { CompanyDesc } from "./CompanyDesc"
import { NavColumns } from "./NavColumns"
import { OutBound } from "./OutBound"

const FooterStyles = styled.footer`
   /* margin-top: 11.2rem; */
   margin-bottom: 5rem;
   .Grid-container > div {
      margin-bottom: 3.5rem !important;
      text-align: center;
      ${MUI_MQuery.md`
         text-align: unset;
      `}
   }
   .company-desc, .outBound {
      position: relative;
   }
   .company-desc {
      ${MUI_MQuery.md`
         top: -22px;
         & > * {
            max-width: 83%;
         }
      `}
   }
   .outBound {
      ${MUI_MQuery.md`
         top: -15px
      `}
   }
   .nav-columns {
      order: 1;
      ${MUI_MQuery.md`
         order: unset;
      `}
   }
`

const CopyRight = styled.p`
   margin-top: 4.8rem;
   text-align: center;
   font-family: Poppins;
   font-weight: 500;
   font-size: 14px;
   line-height: 124.5%;
   color: ${({theme}) => theme.palette.text_clr};

`

export const Footer: React.FC = () => {
   return (
      <FooterStyles >
         <Grid className="Grid-container" container>
            <Grid className="company-desc" item xs={12} sm={6} md={3}>
               <CompanyDesc />
            </Grid>
            <Grid className="nav-columns" item xs={12} sm={12} md={6}>
               <NavColumns />
            </Grid>
            <Grid className="outBound" item xs={12} sm={6} md={3}>
               <OutBound />
            </Grid>
         </Grid>
         <CopyRight>All rights reserved@jadoo.co</CopyRight>
      </FooterStyles>
   )
}