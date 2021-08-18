import { Logo } from 'components/ui/Logo'
import { useMediaQuery } from 'hooks/useMediaQuery'
import { useMounted } from 'hooks/useMounted'
import styled from 'styled-components'
import { MobileNav } from './MobileNav'
import { NavLinks } from './NavLinks'

const Container = styled.div`
   display: flex;
   margin-top: 47px;
   align-items: center;
   z-index: 5;
`
const Navigation = styled.div`
   font-family: 'Open Sans', Roboto, sans-serif, Oxygen, 'Open Sans',
      'Helvetica Neue', sans-serif;
   background: transparent;
   margin-left: auto;
   flex: 1 1 75%;
   z-index: 5;
   ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      li {
         color: ${({ theme }) => theme.palette.navlink};
         font-size: 1.06rem;
         & > a {
            padding: 0.25rem 0.75rem;
         }
      }
   }
`

export const TopNav: React.FC = () => {
   const isLargerThan600 = useMediaQuery('(min-width: 900px)')
   const { hasMounted } = useMounted()
   if (!hasMounted)
      return (
         <Container>
            <Logo />
         </Container>
      )
   return (
      <Container>
         <Logo />
         {isLargerThan600 ? (
            <Navigation>
               <NavLinks />
            </Navigation>
         ) : (
            <MobileNav />
         )}
      </Container>
   )
}
