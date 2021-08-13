import styled from "styled-components"

const RightSplashBox = styled.div`
   position: absolute;
   right: 0;
   top: 0;
`

const RightSplash: React.FC = () => {
   if (window.innerWidth < 960) return null
   return (
      <RightSplashBox>
         <img src="/static/services-imgs/services-rigth.png" alt="plus" />
      </RightSplashBox>
   )
}

export default RightSplash
