import { Grid } from "@material-ui/core"
import { SectionTitle } from "components/common/SectionTitle"
import NextImg from 'next/image'
import styled from "styled-components"
import { Values } from "./Values"
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';

const GridContainer = styled(Grid)`
   margin-top: 10.5rem;
   margin-bottom: 9rem;
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
      <section>
         <GridContainer container alignItems="center">
            <Grid item xs={12} md={6}>
               <Zoom>
                  <SectionTitle capitalize align="left" title="Book your next trip in 3 easy steps" subtitle="Easy and Fast" />
                  <Values />
               </Zoom>
            </Grid>
            <Grid item xs={true} md={6}>
               {/* 485w 460 */}
               <Roll right>
                  <NextImg className="trip-img" width={530} height={505} src="/static/bookatrip/triptogreece_c.png" alt="trip to greece" />
               </Roll>
            </Grid>
         </GridContainer>
      </section>
   )
}