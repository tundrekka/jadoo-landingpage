import { Grid } from "@material-ui/core"
import { SectionTitle } from "components/common/SectionTitle"
import NextImg from 'next/image'
import styled from "styled-components"
import { Values } from "./Values"


const GridContainer = styled(Grid)`
   margin-top: 7rem;
   margin-bottom: 7rem;
   position: relative;
   .trip-img {
      object-fit: contain;
      position: absolute;
      top: -50px !important;
      bottom: unset !important;
      right: -95px !important;

   }
`

export const BookATrip: React.FC = () => {
   return (
      <div>
         <GridContainer container alignItems="center">
            <Grid item xs={12} md={6}>
               <SectionTitle align="left" title="Book your next trip in 3 easy steps" subtitle="Easy and Fast" />
               <Values />
            </Grid>
            <Grid item xs={true} md={6}>
               {/* 485w 460 */}
               <NextImg className="trip-img" width={530} height={505} src="/static/bookatrip/triptogreece_c.png" alt="" />
            </Grid>
         </GridContainer>
      </div>
   )
}