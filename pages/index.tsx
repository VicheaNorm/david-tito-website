import Head from "next/head";
// import styles from "../styles/Home.module.css";
import ContactImage from "../component/Contact-Image";
import Work from "../component/Work";
import ContactUs from "../component/Contact-us";
import { BackTop } from "antd";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>David Tito</title>
        <meta name="David Tito" content="Film Marker" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className="">
        <div className="">
          <div className="max-h-full w-auto " id="bio">
            <ContactImage />
          </div>
          <div className="" id="work">
            <Work />
          </div>

          <div className="" id="contact">
            <ContactUs />
          </div>
        </div>
      </main>
    </Fragment>
  );
}
