import { IconButton } from '@material-ui/core'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import styled from 'styled-components'
import { MUI_MQuery } from 'theme/breakpoints'
import { IUserTestimonial } from './Testimonial'
import NextImg from 'next/image'
const CardContainer = styled.div`
   /* border: 1px solid black; */
   margin-bottom: 5rem;
   display: flex;
   justify-content: space-between;

   .img-container {
      /* border: 1px solid blue; */
      border-radius: 50%;
      width: 68px;
      height: 68px;
      img {
         border-radius: 50%;
      }
   }

   font-family: Poppins;
   color: ${({ theme }) => theme.palette.text_clr};
   .content {
      padding: 1.875rem;
      padding-top: 0;
      
      padding-bottom: 1.875rem;
      max-width: 420px;
      ${MUI_MQuery.sm`
         padding: 4.5rem;
      `}
      .opinion {
         margin-bottom: 30px;
         margin-top: 0;
         font-weight: 500;
         font-size: 1rem;
         line-height: 200%;
      }
   }
   .author {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      margin-bottom: 7px;
   }
   .country {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
   }
`

const MainCard = styled.div`
   position: relative;

   .principalCard {
      position: relative;
      background: #ffffff;
      z-index: 10;
      border-radius: 10px;
      box-shadow: 0 9px 11.25px rgba(0, 0, 0, 0.075);
   }
`

const PreviewNextTestimonial = styled.div`
   position: absolute;

   bottom: -80px;
   right: -31px;
   border: 1.5px solid #e7e7e7d7;
   padding: 34px;
   padding-bottom: 21px;
   border-radius: 10px;
   z-index: 1;
   /* width: 430px; */
   width: 78%;
`

const Pagination = styled.div`
   display: flex;
   align-items: center;
`

const PaginationButtons = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 52px;
`

interface TestimonialCardProps {
   userTestimonial: IUserTestimonial
   paginationIdx: number
   setPaginationIdx: any
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({userTestimonial, paginationIdx, setPaginationIdx}) => {
   
   return (
      <CardContainer>
         <MainCard>
            <div className="principalCard">
               <div className="img-container">
                  <NextImg
                     width={68}
                     height={68}
                     src="/static/testimonial/testimonial.png"
                     alt="user image"
                  />
               </div>
               <div className="content">
                  <p className="opinion">
                     {userTestimonial.text}
                  </p>
                  <p className="author">{userTestimonial.author}</p>
                  <p className="country">{userTestimonial.location}</p>
               </div>
            </div>
            <PreviewNextTestimonial>
               <p className="author">Chris Thomas</p>
               <p className="country">CEO of Red Button</p>
            </PreviewNextTestimonial>
         </MainCard>

         <Pagination>
            <PaginationButtons>
               <IconButton onClick={() => {
                  if(paginationIdx < 2 && paginationIdx !== 0 ) {
                     setPaginationIdx( paginationIdx - 1)
                  } else {
                     setPaginationIdx( 0 )
                  }
               }}>
                  <KeyboardArrowUp fontSize="large" />
               </IconButton>
               <IconButton onClick={() => {
                  if(paginationIdx < 2 ) {
                     setPaginationIdx( paginationIdx + 1)
                  } else {

                     setPaginationIdx( 0 )
                  }
               }}>
                  <KeyboardArrowDown fontSize="large" />
               </IconButton>
            </PaginationButtons>
         </Pagination>
      </CardContainer>
   )
}
