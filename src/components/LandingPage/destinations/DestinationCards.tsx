import { Grid } from '@material-ui/core'
import { CountryCard } from './Card'

export const DestinationCards: React.FC = () => {
   return (
      <Grid container justifyContent="center">
         <Grid item sm={6} md={4}>
            <CountryCard
                  imgsrc="/static/destinations/romesi.png"
                  destiny="Rome, Italy"
                  price="$5,2k"
                  tripDuration="icon, 10 days trip"
               />
         </Grid>

         <Grid item sm={6} md={4}>
            <CountryCard
               imgsrc="/static/destinations/london.jpg"
               destiny="London, UK"
               price="$5,2k"
               tripDuration="icon, 10 days trip"
            />
         </Grid>

         <Grid item sm={6} md={4}>
            <CountryCard
               imgsrc="/static/destinations/fulleurope.png"
               destiny="Full, Europe"
               price="$15k"
               tripDuration="icon, 10 days trip"
            />
         </Grid>
      </Grid>
   )
}
