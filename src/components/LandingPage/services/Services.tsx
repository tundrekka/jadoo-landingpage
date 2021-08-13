import { SectionTitle } from "components/common/SectionTitle"
import dynamic from "next/dynamic"
import styled from "styled-components"
import { ServicesContainer } from "./ServicesContainer"

const DynamicRightSplash = dynamic(
   (() => import('components/LandingPage/services/RightSplash') as any),
   {ssr: false}
)

const Container = styled.div`
   margin-top: 8.25rem;
   position: relative;
`

export const Services: React.FC = () => {
   return (
      <Container>
         <DynamicRightSplash />
         
         <SectionTitle title="We Offer Best Services" subtitle="Category" />
         <ServicesContainer />
      </Container>
   )
}