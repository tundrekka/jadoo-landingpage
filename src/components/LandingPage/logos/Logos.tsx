import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import NextImg from 'next/image'

const CustomGrid = styled(Grid)`
   align-items: center;
   justify-content: space-between;
   img {
      object-fit: contain;
      object-position: center center;
   }
   img:not(.colored-img) {
      mix-blend-mode: luminosity;
   }
`

export const Logos: React.FC = () => {
   return (
      <CustomGrid container>
         <Grid item>
            <NextImg width={130} height={130} src="/static/logos/axon.png" alt="" />
         </Grid>
         <Grid item>
            <NextImg width={172} height={110} src="/static/logos/jetstar.png" alt="" />
         </Grid>
         <Grid item>
            <NextImg className="colored-img" width={162} height={162} src="/static/logos/expediaa.png" alt="" />
         </Grid>
         <Grid item>
            <NextImg width={162} height={162} src="/static/logos/qantas.png" alt="" />
         </Grid>
         <Grid item>
            <NextImg width={94} height={162} src="/static/logos/alitalia.png" alt="" />
         </Grid>
      </CustomGrid>
   )
}
