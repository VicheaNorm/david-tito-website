import Head from "next/head";

import ContactImage from "../component/Contact-Image";
import Work from "../component/Work";
import ContactUs from "../component/Contact-us";

import { Fragment } from "react";

import Footer from "../component/footer";
import ContentSection from "../component/ContentSection";
import Feature from "../component/Feature/Feature";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>David Tito</title>
        <meta name="David Tito" content="Film Marker" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="David Tito"/>
        <meta property="og:image" content="/1.png"/>
      </Head>

      <main className="">
        <div className="">
          <div className="" id="top">
            <ContactImage />
            {/* <ContentSection /> */}
          </div>
          <div className="" id="work">
            <Work />
            <Feature />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
