import styled from 'styled-components'
import NextImg from 'next/image'

const CardStyles = styled.div`
   border-radius: 10px;
   margin: 0 auto;

   box-shadow: 1px 1px 5px black;
   overflow: hidden;
   max-width: 300px;
   filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481));
   border-radius: 24px;

   img {
      object-fit: cover;
      object-position: top center;
   }

`

const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, 1fr);
   padding: 10px;
   span, p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 124.5%;
      color: ${({theme}) => theme.palette.text_clr};
   }
   p {
      font-size: 15px;
      grid-column: 1 / 3;
   }
   .price {
      justify-self: end;
   }
`
interface CardProps {
   imgsrc: string
   destiny: string
   price: string
   tripDuration: string
}

const Vector = () => {
   return <img src="/static/destinations/Vector.svg" alt="" />
}

export const CountryCard: React.FC<CardProps> = ({
   imgsrc,
   destiny,
   price,
   tripDuration,
}) => {
   return (
      <CardStyles>
         <NextImg
            width={300}
            height={310}
            src={imgsrc}
            alt=""
         />
         <Content>
            <span>{destiny}</span>
            <span className="price">{price}</span>
            <p><span><Vector /></span>{tripDuration}</p>
         </Content>
      </CardStyles>
   )
}
