import styled from "styled-components"

const Box = styled.div<{align?: 'center' | 'left'}>`
   /* text-align: center; */
   text-align: ${(props) => props.align ? props.align : 'center'};
   margin-bottom: 20px;
`

const SubTitle = styled.h4`
   /* text-align: center; */
   color: ${({theme}) => theme.palette.text_clr};
   font-family: Poppins;
   font-weight: 600;
   font-size: 1.125rem;
   text-transform: uppercase;
   margin-bottom: 10px;

`
const MainTitle = styled.h3`
   font-family: Volkhov;
   font-weight: bold;
   font-size: 3.125rem;
   line-height: 4rem;
   /* identical to box height */

   text-transform: capitalize;
   color: ${({theme}) => theme.palette.heading};
`

interface SectionTitleProps {
   subtitle: string
   title: string
   align?: 'center' | 'left'
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title, subtitle, align}) => {
   return (
      <Box align={align}>
         <SubTitle>{subtitle}</SubTitle>
         <MainTitle>{title}</MainTitle>
      </Box>
   )
}