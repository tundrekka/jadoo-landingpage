import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
// import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react'
import { IconButton } from '@material-ui/core'
import { NavLinks } from './NavLinks'
import { useRouter } from 'next/dist/client/router'
import { useRef } from 'react'
import { useEffect } from 'react'
const Navigation = styled.div`
   width: 100vw;
   height: 100vh;
   top: 0;
   left: 0;
   transform: translateY(100%);
   position: fixed;
   background-color: aliceblue;
   z-index: 100;
   font-family: 'Open Sans', Roboto, sans-serif, Oxygen, 'Open Sans';
   display: flex;
   justify-content: center;
   align-items: center;
   transition: transform 0.5s ease-in-out;
   &.show {
      transition: transform 0.35s ease-in-out;

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
            padding: 0.5rem 0.1rem;
         }
      }
   }
`

// const CloseButton = styled(IconButton)`
//    position: absolute !important;
//    top: 60px;
//    right: 75px;
// `

export const MobileNav: React.FC = () => {
   const [showMenu, setShowMenu] = useState(false)
   const router = useRouter()
   const lastPath = useRef(router.pathname)

   useEffect(() => {
      if(lastPath.current !== router.pathname) {
         lastPath.current = router.pathname
         setShowMenu(false)
      }
   }, [router.pathname])
   return (
      <div style={{ zIndex: 1000 }}>
         <IconButton
            onClick={() => setShowMenu(!showMenu)}
            style={{ zIndex: 200 }}
         >
            <MenuIcon />
         </IconButton>

         <Navigation className={`navigation ${showMenu ? 'show' : ''}`}>
            {/* <CloseButton
               onClick={() => setShowMenu(!showMenu)}
               style={{ zIndex: 200 }}
            >
               <CloseIcon />
            </CloseButton> */}
            <NavLinks />
         </Navigation>
      </div>
   )
}
