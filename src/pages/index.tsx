import { Destinations } from 'components/LandingPage/destinations/Destinations'
import { Hero } from 'components/LandingPage/hero/Hero'
import { Services } from 'components/LandingPage/services/Services'
import { Layout } from 'components/layout/Layout'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Volkhov:wght@700&display=swap" rel="stylesheet" /> */}
      </Head>
      <Layout>
        <Hero />
        <Services />
        <Destinations />
      </Layout>
    </div>
  )
}
