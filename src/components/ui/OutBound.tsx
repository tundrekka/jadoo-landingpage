import styled from "styled-components"

const Social = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`

const DiscoverApp = styled.div`
text-align: center;
   p {

      color: ${({theme}) => theme.palette.text_clr};;
      margin-bottom: 1rem;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 124.5%;
   }
   .googleplay-button {
      margin-right: 8px;
   }
`

export const OutBound: React.FC = () => {
   return (
      <>
         <Social>
            <a className="social-icon">
               <img src="/static/footer/fb.svg" alt="facebook icon" />
            </a>
            <a className="social-icon">
               <img src="/static/footer/ig.png" alt="instagram icon" />
            </a>
            <a className="social-icon">
               <img src="/static/footer/twitter.svg" alt="twitter icon" />
            </a>
         </Social>
         <DiscoverApp>
            <p>Discover Our App</p>
            <a className="googleplay-button">
               <img src="/static/footer/googleplay.svg" alt="google-play button" />
            </a>
            <a className="button">
               <img src="/static/footer/applebutton.svg" alt="applestore button" />
            </a>
         </DiscoverApp>

      </>
   )
}
