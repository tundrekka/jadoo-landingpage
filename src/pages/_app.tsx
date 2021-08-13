import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import theme from 'theme/theme'


function MyApp({ Component, pageProps }: any) {
   return (
      <>
         <Head>
            <title>Jadoo</title>
         </Head>
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <Component {...pageProps} />
         </ThemeProvider>
      </>
   )
}

export default MyApp
