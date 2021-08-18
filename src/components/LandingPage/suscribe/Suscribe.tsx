import { useToast } from 'hooks/useToast'
import { FormEvent } from 'react'
import styled from 'styled-components'
import { MUI_MQuery } from 'theme/breakpoints'

const SectionContainer = styled.section`
   position: relative;
   margin-bottom: 11.2rem;

   .main {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 129px 20px 20px 20px;
      width: 100%;
      height: 407px;
      position: relative;
      background: rgba(223, 215, 249, 0.3);

      .sendicon {
         position: absolute;
         top: -26px;
         right: -40px;
         z-index: 10;
         ${MUI_MQuery.sm`
            top: -13px;
            right: -20px;
         `}
      }

      .right-circles,
      .left-circles {
         position: absolute;
         img {
            line-height: 0;
         }
      }

      .right-circles {
         top: 0;
         right: 0;
      }

      .left-circles {
         bottom: -0.688rem;
         left: -5.625rem;
      }
   }

   .plus {
      position: absolute;
      bottom: -4.375rem;
      right: -6.188rem;
   }
`

const Content = styled.div`
   height: inherit;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;

   padding: 0 40px;
   ${MUI_MQuery.md`
      padding: 0 120px;
   `}
   .title {
      font-family: Poppins;
      font-weight: 600;
      font-size: 2.063rem;
      line-height: 164%;
      text-align: center;
      color: ${({ theme }) => theme.palette.text_clr};
   }
`

const Form = styled.form`
   text-align: center;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   button {
      background: linear-gradient(180deg, #ff946d 0%, #ff7d68 100%);
      border-radius: 10px;
      padding: 21px 50px;
      font-family: 'Open Sans';
      color: #ffffff;
      font-weight: 600;
      font-size: 1.063rem;
      line-height: 1.438rem;
      text-align: center;
      border: none;
      cursor: pointer;
      z-index: 25;
      position: relative;
      margin-top: 0.625rem;
      margin-inline: 1.25rem;
   }
`

const EmailField = styled.div`
   display: inline-block;
   position: relative;
   margin-top: 0.625rem;
   #email {
      padding: 24px;
      padding-left: 50px;
      font-size: 1.1rem;
      background: #ffffff;
      border-radius: 10px;
      border: none;
      position: relative;
      z-index: 10;
   }
   img {
      position: absolute;
      width: 18px;
      height: 21px;
      top: 24px;
      left: 20px;
      z-index: 20;
   }
`

export const Suscribe: React.FC = () => {
   const { setState } = useToast()

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setState(true)
   }

   return (
      <SectionContainer>
         <div className="main">
            <div className="sendicon">
               <img src="/static/suscribe/sendicon.svg" alt="" />
            </div>
            <div className="right-circles">
               <img src="/static/suscribe/rightcircles.svg" alt="" />
            </div>
            <div className="left-circles">
               <img src="/static/suscribe/leftcircles.svg" alt="" />
            </div>

            <Content>
               <h4 className="title">
                  Subscribe to get information, latest news and other
                  interesting offers about Cobham
               </h4>

               <Form onSubmit={handleSubmit}>
                  <EmailField className="emailcont">
                     <input
                        placeholder="Your email"
                        autoComplete="off"
                        type="text"
                        name="email"
                        id="email"
                     />
                     <img src="/static/suscribe/downvector.svg" alt="" />
                  </EmailField>
                  <button type="submit">Suscribe</button>
               </Form>
            </Content>
         </div>

         <div className="plus">
            <img src="/static/suscribe/plus.png" alt="" />
         </div>
      </SectionContainer>
   )
}
