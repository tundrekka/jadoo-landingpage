import styled from "styled-components"
import { TopNav } from "./TopNav"

const Container = styled.div`
   max-width: 1300px;
   width: 92vw;
   margin: 0 auto;
   background: #fff;
   min-height: 200vh;
   @media screen and (min-width: 900px) {
      width: 85vw;

   }
`

export const Layout: React.FC = ({children}) => {
   return (
      <Container>
         <TopNav />
         {children}
      </Container>
   )
}


