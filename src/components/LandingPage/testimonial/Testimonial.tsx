import { Grid } from '@material-ui/core'
import { SectionTitle } from 'components/common/SectionTitle'
import { useState } from 'react'
import { Pagination } from './Pagination'
// import styled from "styled-components"
import { TestimonialCard } from './TestimonialCard'

export interface IUserTestimonial {
   text: string
   author: string
   location: string
   imageUrl: string
}

const testUserTestimonials: IUserTestimonial[] = [
   {
      author: 'Myke taylor',
      location: 'Lahore, Pakistan',
      text: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
      imageUrl: '/static/testimonial/testimonial.png',
   },
   {
      author: 'Alex Rex',
      location: 'Texas, United States',
      text: '"Just a test text as a testimonial. pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
      imageUrl: '/static/testimonial/testimonial.png',
   },
   {
      author: 'Arianna clark',
      location: 'yeska, Pakistan',
      text: '“Othe one, just telling that this is awesome, I love this. Sure last upon he same as knew next. Of believed or diverted no.”',
      imageUrl: '/static/testimonial/testimonial.png',
   }
]

export const Testimonial: React.FC = () => {
   const [paginationIdx, setPaginationIdx] = useState(0)

   return (
      <div>
         <Grid container>
            <Grid item xs={12} md={5}>
               <SectionTitle
                  align="left"
                  title="What People Say About Us."
                  subtitle="Testimonials"
               />
               <Pagination paginationIdx={paginationIdx} />
            </Grid>
            <Grid item xs={12} md={7}>
               <TestimonialCard
                  userTestimonial={testUserTestimonials[paginationIdx]}
                  paginationIdx={paginationIdx}
                  setPaginationIdx={setPaginationIdx}
               />
            </Grid>
         </Grid>
      </div>
   )
}
