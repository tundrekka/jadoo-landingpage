import styled from 'styled-components'

const Img = styled.img`
   width: 46vw;
   position: absolute;
   right: 0;
   display: block;
   margin: 0;
   top: 0;
`
export const Decore: React.FC = () => {
   return <Img src="/static/Decore-right.png" alt="decore splash" />
}
