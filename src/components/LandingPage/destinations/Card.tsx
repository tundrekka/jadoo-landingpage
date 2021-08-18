import styled from 'styled-components'
import NextImg from 'next/image'

const CardStyles = styled.div`
   border-radius: 10px;
   margin: 0 auto;
   position: relative;
   background: #ccc;
   line-height: 0;
   z-index: 5;

   box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.12);
   max-width: 300px;
   /* Nawebona este maldito filtro me revento la pc mamawebo */
   /* filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)); */
   border-radius: 24px;

   .next-img {
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;

      /* Nawebona este maldito filtro me revento la pc mamawebo */
      /* filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)) drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852)) drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481)) drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01)) drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185)) drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)); */
      object-fit: cover;
      object-position: top center;
   }

`

const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, 1fr);
   padding: 1rem;
   position: relative;
   background: #ffffff;

   z-index: 5;
   span, p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 124.5%;
      color: ${({theme}) => theme.palette.text_clr};

   }
   & > span {
      margin-top: .8em;
      margin-bottom: .6em;
   }
   p {
      
      grid-column: 1 / 3;
      display: flex;
      align-items: center;
      span {
         font-size: 16px;
      }
   }
   .price {
      justify-self: end;
   }
`

const Decoration = styled.img`
   position: absolute;
   bottom: 2.8rem;
   z-index: -1;
   right: -65px;
`

interface CardProps {
   imgsrc: string
   destiny: string
   price: string
   tripDuration: string
   decore?: boolean
}


const Vector = () => {
   return <img style={{marginRight: '1em'}} src="/static/destinations/Vector.svg" alt="" />
}

export const CountryCard: React.FC<CardProps> = ({
   imgsrc,
   destiny,
   price,
   tripDuration,
   decore
}) => {
   return (
      <CardStyles>
         <NextImg className="next-img"
            width={300}
            height={310}
            src={imgsrc}
            alt="country image"
         />
         <Content>
            <span>{destiny}</span>
            <span className="price">{price}</span>
            <p><Vector /><span>{tripDuration}</span></p>
         </Content>
         {
            decore && <Decoration src="/static/destinations/Decore.png" alt="" />
         }
      </CardStyles>
   )
}
