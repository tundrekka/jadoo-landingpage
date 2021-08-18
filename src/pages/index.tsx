import { Hero } from 'components/LandingPage/hero/Hero'
import { Services } from 'components/LandingPage/services/Services'
import { Destinations } from 'components/LandingPage/destinations/Destinations'
import { BookATrip } from 'components/LandingPage/book-a-trip/BookATrip'
import { Testimonial } from 'components/LandingPage/testimonial/Testimonial'
import { Logos } from 'components/LandingPage/logos/Logos'
import { Suscribe } from 'components/LandingPage/suscribe/Suscribe'
import { Footer } from 'components/ui/Footer'
import config from 'react-reveal/globals';
import { LazyLoad } from 'components/LazyLoad'

config({ ssrFadeout: true });

export default function Home() {

   return (
      <>
         <Hero />
         <Services />
         <Destinations />
         <BookATrip />
         <Testimonial />
         <Logos />
         <Suscribe />
         <LazyLoad>
            <Footer />
         </LazyLoad>
      </>
   )
}
