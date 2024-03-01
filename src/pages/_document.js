import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

import RootLayout from '@/pages/layout';
import { randomElements } from '@/common/thirdParty';

const GA_TRACKING_ID = 'GTM-KZTBT9RS';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            id="google-tag-manager"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GA_TRACKING_ID}');`,
            }} />

          <Script id="random-elements" strategy="worker">
            {randomElements()}
          </Script>
          
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
            }}
          />
          <RootLayout>
            <Main />
          </RootLayout>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;