import styled from "styled-components"
import { MUI_MQuery } from "theme/breakpoints"
import NextImg from 'next/image'
interface ValueProps {
   iconPath: string
   title: string
   description: string
}

const Container = styled.div`
   display: flex;
   margin-bottom: 2.25rem;
   &:first-of-type {
      margin-top: 2rem;
   }
   /* .icon {
      margin-right: 1rem !important;
   } */
`

const Texts = styled.div`
   margin-left: 1rem;
   font-family: Poppins;
   font-weight: bold;
   font-size: 1rem;
   line-height: 124.5%;
   color: ${({theme}) => theme.palette.text_clr};
   ${MUI_MQuery.md`
      max-width: 360px;
   `}
   .title {
      margin-bottom: 5px;
   }
   .description {
      font-weight: 100;
   }
`

export const Value: React.FC<ValueProps> = ({iconPath, title, description}) => {
   return (
      <Container>
         <NextImg width={47} height={48} className="icon" src={iconPath} alt="icon" />
         <Texts>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
         </Texts>
      </Container>
   )
}