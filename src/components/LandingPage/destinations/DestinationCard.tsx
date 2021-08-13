import { Grid } from "@material-ui/core"

export const DestinationCard: React.FC = () => {
   return (
      <Grid container>
         <Grid item sm={4} >
            <p>Rome, Italy <span>$5,42k</span></p>
            <p>icon, 10 days trip</p>
         </Grid>
         <Grid item sm={4} >
            <p>London, UK <span>$5,2k</span></p>
            <p>icon, 10 days trip</p>
         </Grid>
         <Grid item sm={4} >
            <p>Full, Europe <span>$15k</span></p>
            <p>icon, 10 days trip</p>
         </Grid>
      </Grid>
   )
}