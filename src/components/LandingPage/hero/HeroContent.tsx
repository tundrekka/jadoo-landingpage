import { memo } from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { breakpoints, DEVICE } from 'theme/breakpoints'
// import { TravellerImg } from 'components/LandingPage/hero/TravellerImg'

const DinamycImg = dynamic(
   (() => import('components/LandingPage/hero/TravellerImg') as any),
   {ssr: false}
)

const Container = styled.div`
   display: flex;
`

const LeftSide = styled.div`
   flex: 1 1 100%;
   margin-top: 100px;
   max-width: 520px;
   max-width: 600px;
`
const RightSide = styled.div`
   display: none;

   margin-top: 25px;
   flex: 1 1 47%;
   z-index: 10;
   @media screen and (min-width: 900px) {
      display: block;
      margin-top: 7%;
   }
   @media screen and (min-width: 1100px) {
      margin-top: 25px;

   }
   div {
      width: 100%;
      position: relative;
      img {
         display: block;
         position: absolute;
         width: 170%;
         right: -100px;
         ${DEVICE.desktop`
            width: 690px;
            right: -20px;
         `}
         @media screen and (min-width: 1400px) {
            width: 750px;
         }
      }
   }
`

const Tagline = styled.p`
   font-family: Poppins;
   font-style: normal;
   font-weight: bold;
   font-size: 1.25rem;
   text-transform: uppercase;

   color: ${({ theme }) => theme.palette.primary};


`

const TitleContainer = styled.div`
   position: relative;
`

const EnjoySpan = styled.span`
   position: relative;
   z-index: 100;
   &::before {
      content: url(/static/title-decore.svg);
      display: block;
      width: 100%;
      position: absolute;
      top: 1.25rem;
      right: 0.313rem;
      z-index: -2;
      @media screen and (max-width: 500px) {
         display: none;
      }
   }
`

const BigTitle = styled.h1`
   font-size: 5rem;
   font-family: Volkhov, 'Segoe UI', Oxygen, Ubuntu, 'Open Sans',
      'Helvetica Neue', sans-serif;
   font-weight: 700;
   font-style: normal;
   position: relative;
   line-height: 100%;
   letter-spacing: -0.04em;
   color: ${({ theme }) => theme.palette.main_heading};
   z-index: 100;
`

const Desc = styled.p`
   font-family: Poppins;
   font-style: normal;
   font-weight: 500;
   font-size: 1rem;
   margin-top: 1.875em;
   color: ${({ theme }) => theme.palette.text_clr};
   max-width: 455px;
   line-height: 1.75rem;
`
// Call To Action Container
const CTAContainer = styled.div`
   margin-top: 30px;

   display: flex;
   flex-wrap: wrap;
`

const FindMoreButton = styled.a`
   padding: 1.0625rem 1.5625rem;
   display: inline-block;
   background: #f1a501;
   box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
   color: #ffffff;
   border-radius: 10px;
   cursor: pointer;
   font-family: OpenSans, 'Open Sans', -apple-system, Roboto, Oxygen, Ubuntu,
      'Open Sans', 'Helvetica Neue', sans-serif;
   font-style: normal;
   font-size: 1.125rem;
   text-align: center;
   margin-bottom: .5rem;
`

const PlayButton = styled.div`
   font-family: Poppins, Oxygen, Roboto, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
   margin-left: 2.75rem;
   @media screen and (max-width: ${breakpoints.sm}) {
      margin-left: 1rem;
   }
   display: flex;
   align-items: center;
   cursor: pointer;
   color: #686d77;
   &:hover {
      background: #e6e6e6;
   }
   .icon-cont {
      position: relative;
      width: 52px;
      height: 52px;
      margin-right: 10px;
      border-radius: 50%;
      overflow: hidden;
   }
`

const ImgAbsolute = styled.img`
   position: absolute;
   left: -30px;
   top: -15px;
`

export const HeroContent: React.FC = memo(() => {

   return (
      <Container>
         <LeftSide>
            <Tagline>Best destinations around the world</Tagline>

            <TitleContainer>
               <BigTitle>
                  Travel<EnjoySpan>, enjoy</EnjoySpan> and live a new and full
                  life
               </BigTitle>
            </TitleContainer>
            <Desc>
               Built Wicket longer admire do barton vanity itself do in it.
               Preferred to sportsmen it engrossed listening. Park gate sell
               they west hard for the.
            </Desc>

            <CTAContainer>
               <FindMoreButton>Find out more</FindMoreButton>
               <PlayButton>
                  <div className="icon-cont">
                     <ImgAbsolute src="/static/play-icon.png" alt="" />
                  </div>
                  <span>Play demo</span>
               </PlayButton>
            </CTAContainer>
         </LeftSide>

         <RightSide>
            <DinamycImg />
         </RightSide>
      </Container>
   )
})
