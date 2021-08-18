import styled from "styled-components"

const RightSplashBox = styled.div`
   position: absolute;
   right: -34px;
   top: -6px;
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
