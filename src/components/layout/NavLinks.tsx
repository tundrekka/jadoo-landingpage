import NextLink from 'next/link'
import styled from 'styled-components'

const ButtonNavLink = styled.span`
   /* a next link */
   & > a {
      padding: 8px 18px;
      border: 1px solid black;
      border-radius: 4px;
   }
`
export const NavLinks: React.FC = () => {
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
         <li><a>Login</a></li>
         <li>
            <ButtonNavLink>
               <NextLink href="/register">Sign up</NextLink>
            </ButtonNavLink>
         </li>
         <li><a>EN</a></li>
      </ul>
   )
}
