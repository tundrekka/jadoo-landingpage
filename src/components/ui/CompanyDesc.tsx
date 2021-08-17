import styled from "styled-components"

const Title = styled.h4`
   font-family: Poppins;
   font-weight: 500;
   font-size: 44px;
   line-height: 66px;
   color : ${({theme}) => theme.palette.main_heading};
   margin-bottom: 19px;
`
const Desc = styled.p`
   font-family: Poppins;
   font-weight: 500;
   font-size: 13px;
   line-height: 124.5%;
   color : ${({theme}) => theme.palette.text_clr};
`

export const CompanyDesc: React.FC = () => {
   return (
      <>
         <Title>
            Jadoo.
         </Title>
         <Desc>
            Book your trip in minute, get full Control for much longer.
         </Desc>
      </>
   )
}