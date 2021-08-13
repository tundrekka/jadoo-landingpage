import { Grid } from '@material-ui/core'
import styled from 'styled-components'
import NextImg from 'next/image'
import { MUI_MQuery } from 'theme/breakpoints'

const Box = styled.div``
const ActiveItem = styled.div`
   max-width: 220px;
   position: relative;
   background: #fff;
   top: -3px;
   text-align: center;
   box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
      0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
      0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
      0px 20px 13px rgba(0, 0, 0, 0.01),
      0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
      0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
   border-radius: 36px;
   padding: 2.2rem;
   padding-top: 0px;
   z-index: 2;
   margin-inline: auto;

   ${Box} {
      width: 120px;
      height: 85px;
      margin: 0 auto;
      background-image: url(/static/services-imgs/planeCategory.png);
      background-position: center center;
      margin-bottom: 34px;
   }
`

const OrangeS = styled.div`
   display: none;
   width: 6.25rem;
   height: 6.25rem;
   position: absolute;
   bottom: -2.188rem;
   left: -2.188rem;
   background: #df6951;
   border-radius: 30px 0px 10px;
   z-index: 1;
   ${MUI_MQuery.md`
      display: block;
   `}
`

const Title = styled.h4`
   font-family: OpenSans;
   font-weight: 600;
   font-size: 1.25rem;
   line-height: 1.688rem;
   margin-bottom: 15px;
   text-align: center;

   /* text heading color */
   color: ${({ theme }) => theme.palette.text_heading};
`
const Desc = styled.p`
   font-family: Poppins;
   font-style: normal;
   font-weight: 500;
   font-size: 1rem;
   line-height: 162%;
   text-align: center;
   color: ${({ theme }) => theme.palette.text_clr};
`

const Card = styled.div`
   text-align: center;
   max-width: 220px;
   margin: 0px auto 50px auto;
   ${Box} {
      margin-bottom: 34px;
   }
`

export const ServicesContainer: React.FC = () => {
   return (
      <Grid style={{marginTop: '4rem'}} container justifyContent="space-between">
         <Grid item xs={12} sm={6} md={3}>
            <Card>
               <Box className="icon">
                  <NextImg src="/static/services-imgs/satellite.png" width={92} height={78} />
               </Box>
               <Title>Calculated Weather</Title>
               <Desc>
                  Built Wicket longer admire do barton vanity itself do in it.
               </Desc>
            </Card>
         </Grid>
         <Grid style={{position: 'relative', marginBottom: '40px'}} item xs={12} sm={6} md={3}>
            <ActiveItem>
               <Box className="icon">
               </Box>
               <Title>Best Flights</Title>
               <Desc>
                  Engrossed listening. Park gate sell they west hard for the.
               </Desc>
            </ActiveItem>
            <OrangeS></OrangeS>
         </Grid>
         <Grid item xs={12} sm={6} md={3}>
            <Card>
               <Box className="icon">
                  <NextImg src="/static/services-imgs/microphone.png" width={67} height={75} />
               </Box>
               <Title>Local Events</Title>
               <Desc>
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
               </Desc>
            </Card>
         </Grid>
         <Grid item xs={12} sm={6} md={3}>
            <Card style={{ justifySelf: 'center' }}>
               <Box className="icon">
                  <NextImg src="/static/services-imgs/customization.png" width={77} height={66} />
               </Box>
               <Title>Customization</Title>
               <Desc>
                  We deliver outsourced aviation services for military customers
               </Desc>
            </Card>
         </Grid>
      </Grid>
   )
}

/* <div style={{position: 'relative', alignSelf: 'stretch'}}>
            <ActiveItem>
               <Box className="icon">
                   <Icon src="/static/services-imgs/planeCategory.png" />
               </Box>
               <Title>Best Flights</Title>
               <Desc>
                  Engrossed listening. Park gate sell they west hard for the.
               </Desc>
            </ActiveItem>
            <OrangeS></OrangeS>
         </div>
         <div>
            <Card>
               <Box className="icon">
                  <Icon src="/static/services-imgs/microphone.png" />
               </Box>
               <Title>Local Events</Title>
               <Desc>
                  Barton vanity itself do in it. Preferd to men it engrossed
                  listening.
               </Desc>
            </Card>
         </div>
         <div>
            <Card style={{justifySelf: 'center'}}>
               <Box className="icon">
                  <Icon src="/static/services-imgs/customization.png" />
               </Box>
               <Title>Customization</Title>
               <Desc>
                  We deliver outsourced aviation services for military customers
               </Desc>
            </Card>
         </div> */
