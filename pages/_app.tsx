import type { AppProps } from "next/app";
import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

import "@fontsource/jost/400.css"
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css"
import "@fontsource/jost/700.css"
import "@fontsource/sen/400.css"
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title="Candra | Web Developer"
        titleTemplate="Candra | Web Developer"
        defaultTitle="Candra | Web Developer"
        description="Hey! I'm Candra, A Web Developer, Blogger and a Student!"
        openGraph={{
          url: "https://candrakirana.netlify.app/",
          title: "Candra Kirana | CK",
          description:
            "Hey! I'm Candra, A Web Developer, Blogger and a Student!",
          images: [
            {
              url: "https://arunava.tech/static/images/socialbg.png",
              alt: "Candra | Web Developer",
            },
          ],
        }}
        twitter={{
          handle: "@chandafa",
          site: "@chandafa",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Frontend Developer, Candra, Candra Tech, chanit, Web Developer, web development, web developer, blogger, tech enthusiast, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
