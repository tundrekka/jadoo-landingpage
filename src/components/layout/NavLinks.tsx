import Toast from 'components/ui/Toast'
import NextLink from 'next/link'
import styled from 'styled-components'
import { useToast } from 'hooks/useToast'

const ButtonNavLink = styled.span`
   /* a next link */
   & > a {
      padding: 8px 18px;
      border: 1px solid black;
      border-radius: 4px;
   }
`
export const NavLinks: React.FC = () => {
   const { setState } = useToast()

   return (
      <ul>
         <li>
            <a>Destinations</a>
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
         <li>
            <a>EN</a>
         </li>
         <Toast />
      </ul>
   )
}
