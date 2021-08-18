import styled from "styled-components"

const Box = styled.div<{align?: 'center' | 'left'}>`
   /* text-align: center; */
   text-align: ${(props) => props.align ? props.align : 'center'};
   margin-bottom: 20px;
`

const SubTitle = styled.h4<{capitalize?: boolean}>`
   /* text-align: center; */
   color: ${({theme}) => theme.palette.text_clr};
   font-family: Poppins;
   font-weight: 600;
   font-size: 1.125rem;
   text-transform: uppercase;
   text-transform: ${(props) => props.capitalize ? 'capitalize': 'uppercase'};
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
   capitalize?: boolean
   align?: 'center' | 'left'
}

export const SectionTitle: React.FC<SectionTitleProps> = ({title, subtitle, capitalize, align}) => {
   return (
      <Box align={align}>
         <SubTitle capitalize={capitalize}>{subtitle}</SubTitle>
         <MainTitle>{title}</MainTitle>
      </Box>
   )
}