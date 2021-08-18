import Head from 'next/head'
import GlobalStyle from 'theme/GlobalStyle'
import theme from 'theme/theme'
import { Layout } from 'components/layout/Layout'
import { ToastContext } from 'context/ToastContext'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Toast from 'components/ui/Toast'

function MyApp({ Component, pageProps }: any) {
   const [state, setState] = useState(false)
   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&family=Poppins:wght@500&family=Volkhov:wght@700&display=swap"
               rel="stylesheet"
            />
            <meta name="theme-color" content="#DF6951" />
            <title>Jadoo</title>
         </Head>
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <ToastContext.Provider
               value={{
                  state,
                  setState,
               }}
            >
               <Layout>
                  <Component {...pageProps} />
                  <Toast />
               </Layout>
            </ToastContext.Provider>
         </ThemeProvider>
      </>
   )
}

export default MyApp
