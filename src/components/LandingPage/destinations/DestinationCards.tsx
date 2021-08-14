import { Grid } from '@material-ui/core'
import { CountryCard } from './Card'


export const DestinationCards: React.FC = () => {
   return (
      <Grid container justifyContent="center">
         <Grid style={{marginTop: '1rem'}} item sm={6} md={4}>
            <CountryCard
                  imgsrc="/static/destinations/romesi.png"
                  destiny="Rome, Italy"
                  price="$5,2k"
                  tripDuration="10 days trip"
               />
         </Grid>

         <Grid style={{marginTop: '1rem'}}  item sm={6} md={4}>
            <CountryCard
               imgsrc="/static/destinations/london.jpg"
               destiny="London, UK"
               price="$5,2k"
               tripDuration="10 days trip"
            />
         </Grid>

         <Grid style={{marginTop: '1rem'}}  item sm={6} md={4}>
            <CountryCard
               imgsrc="/static/destinations/fulleurope.png"
               destiny="Full, Europe"
               price="$15k"
               tripDuration="10 days trip"
               decore={true}
            />
         </Grid>
      </Grid>
   )
}
