import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Head from 'next/head'
export default class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />),
            })

         const initialProps = await Document.getInitialProps(ctx)
         return {
            ...initialProps,
            styles: (
               <>
                  <Head>
                     <link rel="preconnect" href="https://fonts.googleapis.com" />
                     <link rel="preconnect" href="https://fonts.gstatic.com" />
                  </Head>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         }
      } finally {
         sheet.seal()
      }
   }
}
