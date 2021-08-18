import NextLink from 'next/link'
import styled from 'styled-components'
import { useToast } from 'hooks/useToast'

const ButtonNavLink = styled.span`
   /* a next link */
   & > a {
      font-size: 1rem;
      padding: 0.5em 1.125em;
      border: 1px solid black;
      border-radius: 4px;
   }
`
const Language = styled.li`
   position: relative;
   display: flex;
   align-items: center;
   img {
      @media screen and (min-width: 900px) {
         margin-left: -5px;
      }
   }
`

export const NavLinks: React.FC = () => {
   const { setState } = useToast()

   return (
      <ul>
         <li>
            <NextLink href="/destinations">Destinations</NextLink>
         </li>
         <li>
            <NextLink href="/hotels">Hotels</NextLink>
         </li>
         <li>
            <NextLink href="/flights">Flights</NextLink>
         </li>
         <li>
            <NextLink href="/booking">Booking</NextLink>
         </li>
         <li>
            <a
               onClick={() => {
                  setState(true)
               }}
            >
               Login
            </a>
         </li>
         <li>
            <ButtonNavLink>
               <a
                  onClick={() => {
                     setState(true)
                  }}
               >
                  Sign up
               </a>
            </ButtonNavLink>
         </li>
         <Language onClick={() => {
            setState(true)
         }}>
            <a>EN</a>
            <img src="/static/vectordown.svg" alt="" />
         </Language>
      </ul>
   )
}
