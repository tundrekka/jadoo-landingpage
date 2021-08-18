import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const CustomGrid = styled(Grid)`
   flex-basis: 100%;
   width: 100%;
   li {
      font-family: Poppins;
      font-weight: 500;
      font-size: 18px;
      line-height: 124.5%;

      color: ${({theme}) => theme.palette.text_clr};
   }
`

const List = styled.ul`
   margin-top: 31px;
   li {
      font-family: Poppins;
      font-weight: 500;
      font-size: 18px;
      line-height: 124.5%;
      color: ${({theme}) => theme.palette.text_clr};
      margin-bottom: 12px;
      a {
         width: 100%;
         display: inline-block;
      }
   }
`

const Title = styled.h4`
   font-family: Poppins;
   font-weight: bold;
   font-size: 21px;
   line-height: 124.5%;

   color: ${({theme}) => theme.palette.black};
`

export const NavColumns: React.FC = () => {
   return (
      <CustomGrid container>
         <Grid item xs={6} sm={4}>
            <Title>Company</Title>
            <List>
               <li><a>About</a></li>
               <li><a>Careers</a></li>
               <li><a>Mobile</a></li>
            </List>
         </Grid>
         <Grid item xs={6} sm={4}>
            <Title>Contact</Title>
            <List>
               <li><a>Help/FAQ</a></li>
               <li><a>Press</a></li>
               <li><a>Affilates</a></li>
            </List>
         </Grid>
         <Grid item xs={6} sm={4}>
            <Title>More</Title>
            <List>
               <li><a>Airlinefees</a></li>
               <li><a>Airline</a></li>
               <li><a>Low fare tips</a></li>
            </List>
         </Grid>
      </CustomGrid>
   )
}
