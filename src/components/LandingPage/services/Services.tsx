import { SectionTitle } from "components/common/SectionTitle"
import dynamic from "next/dynamic"
import styled from "styled-components"
import { ServicesContainer } from "./ServicesContainer"
import Fade from 'react-reveal/Fade';
const DynamicRightSplash = dynamic(
   (() => import('components/LandingPage/services/RightSplash') as any),
   {ssr: false}
)

const Container = styled.section`
   margin-top: 11rem;
   position: relative;
`

export const Services: React.FC = () => {
   return (
      <Container>
            <DynamicRightSplash />
         <Fade bottom>
            
            <SectionTitle title="We Offer Best Services" subtitle="Category" />
         </Fade>
            <ServicesContainer />
      </Container>
   )
}