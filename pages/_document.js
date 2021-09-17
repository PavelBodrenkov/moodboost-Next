import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />  
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap" rel="stylesheet" />
            <script data-ad-client="ca-pub-5014908839207672" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main>
          </Main>
          <NextScript />
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W6FWXBB"
              height="0" width="0" style={{display:'none', visibility:'hidden'}}>
            </iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;