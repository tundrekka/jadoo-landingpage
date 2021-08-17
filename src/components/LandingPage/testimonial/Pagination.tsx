import styled from "styled-components"
import { MUI_MQuery } from "theme/breakpoints"

const Container = styled.div`
   margin-top: 3rem;
   margin-bottom: 3rem;
   ${MUI_MQuery.md`
      margin-top: 6rem;
   `}

`

const Point = styled.div`
   width: 12px;
   height: 12px;
   background: #E5E5E5;
   border-radius: 50%;
   margin-right: 26px;
   display: inline-block;
   
   &.active {
      background: #39425D;
   }

`

interface PaginationProps {
   setPagination?: any
   paginationIdx: any
}

export const Pagination: React.FC<PaginationProps> = ({paginationIdx}) => {
   const ponts = [0,1,2]
   return (
      <Container>
         {
            ponts.map((item,idx) => (
               <Point key={idx} className={`${item === paginationIdx ? 'active' : ''}`}></Point>
            ))
         }
      </Container>
   )
}