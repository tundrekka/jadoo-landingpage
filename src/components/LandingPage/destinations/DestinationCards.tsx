import { Grid } from '@material-ui/core'
import styled, { css } from 'styled-components'
import { MUI_MQuery } from 'theme/breakpoints'
import { CountryCard } from './Card'

const CustomGrid = styled(Grid)`
   justify-content: center;
   ${MUI_MQuery.md(css`
      justify-content: space-between;
   `)}
`
export const DestinationCards: React.FC = () => {
   return (
      <CustomGrid container >
         <Grid style={{marginTop: '1rem', minWidth: '300px'}} item xs={12} sm={6} md={4}>
            <CountryCard
                  imgsrc="/static/destinations/romesi.png"
                  destiny="Rome, Italy"
                  price="$5,42k"
                  tripDuration="10 days trip"
               />
         </Grid>

         <Grid style={{marginTop: '1rem', minWidth: '300px'}}  item xs={12} sm={6} md={4}>
            <CountryCard
               imgsrc="/static/destinations/london.jpg"
               destiny="London, UK"
               price="$4,2k"
               tripDuration="12 days trip"
            />
         </Grid>

         <Grid style={{marginTop: '1rem', minWidth: '300px'}}  item xs={12} sm={6} md={4}>
            <CountryCard
               imgsrc="/static/destinations/fulleurope.png"
               destiny="Full Europe"
               price="$15k"
               tripDuration="28 days trip"
               decore={true}
            />
         </Grid>
      </CustomGrid>
   )
}
