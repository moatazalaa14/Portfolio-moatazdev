import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-500 dark:bg-gradient-to-r dark:from-dark-300 dark:to-dark-400 dark:text-white">
          <Main />
          <NextScript />
          <script src="//code.tidio.co/ghivfaiopwoeg0w2pejl5clzbiushtc6.js" async></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument