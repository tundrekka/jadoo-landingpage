import { BookATrip } from 'components/LandingPage/book-a-trip/BookATrip'
import { Destinations } from 'components/LandingPage/destinations/Destinations'
import { Hero } from 'components/LandingPage/hero/Hero'
import { Logos } from 'components/LandingPage/logos/Logos'
import { Services } from 'components/LandingPage/services/Services'
import { Suscribe } from 'components/LandingPage/suscribe/Suscribe'
import { Testimonial } from 'components/LandingPage/testimonial/Testimonial'
import { Layout } from 'components/layout/Layout'
import { Footer } from 'components/ui/Footer'
import Toast from 'components/ui/Toast'
import { ToastContext } from 'context/ToastContext'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

   const [state, setState] = useState(false);

   return (
      <ToastContext.Provider value={{
         state,
         setState
      }}>
         <Head>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap" rel="stylesheet" /> */}
         </Head>
         <Layout>
            <Hero />
            <Services />
            <Destinations />
            <BookATrip />
            <Testimonial />
            <Logos />
            <Suscribe />
            <Footer />
            <Toast />
            <div style={{ marginTop: '7rem' }} className="margin">
               margintop
            </div>
         </Layout>
      </ToastContext.Provider>
   )
}
