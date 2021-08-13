import { useState } from "react"
import styled from "styled-components"
import { NavLinks } from "./NavLinks"

const Navigation = styled.div`
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;
   transform: translateY(100%);
   position: fixed;
   background-color: aliceblue;
   z-index: 100;
   font-family: OpenSans, Roboto, sans-serif, Oxygen, 'Open Sans';
   display: flex;
   justify-content: center;
   align-items: center;
   transition: transform .5s ease-in-out;
   &.show {
      transition: transform .35s ease-in-out;

      transform: translateY(0%);

   }
   ul {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      flex-direction: column;
      li {
         font-size: 1.06rem;
         & > a {
            padding: .5rem .1rem;
         }
      }
   }
`

const CloseButton = styled.button`
   position: absolute; 
   top: 60px;
   right: 75px;
`

export const MobileNav: React.FC = () => {
   const [showMenu, setShowMenu] = useState(false)
   return (
      <div style={{zIndex: 1000}}>
         <button style={{zIndex: 200}} onClick={() => setShowMenu(!showMenu)}>XXXXX</button>

         <Navigation className={`navigation ${showMenu ? 'show' : ''}`}>
            <CloseButton onClick={() => setShowMenu(!showMenu)}>XX</CloseButton>
            <NavLinks />
         </Navigation>

      </div>
   )
}