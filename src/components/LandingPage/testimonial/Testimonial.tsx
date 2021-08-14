import { Grid } from "@material-ui/core"
import { SectionTitle } from "components/common/SectionTitle"
import styled from "styled-components"

const CustomGrid = styled(Grid)`
   
`

export const Testimonial: React.FC = () => {
   return (
      <div>
          <Grid container>
        
            <Grid item xs={12} md={5}>
               <SectionTitle align="left" title="What People Say About Us." subtitle="Testimonials" />
            </Grid>
            <Grid item xs={12} md={7}>
               testimonial
            </Grid>
         </Grid>
      </div>
   )
}