import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Card } from "antd";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Feature from "../../component/Feature/Feature";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const index = () => {
  const data = [
    { linkURL: "ZltTF9zNI6w" },
    { linkURL: "0jMkt96IzBI" },
    { linkURL: "uHeqfhLww4A" },
    { linkURL: "qgWVlC-K89o" },
    { linkURL: "uSQiGf12Gm4" },
    { linkURL: "2eE3DFrlvsY" },
  ];
  return (
    <>
      <Head>
        <title>Musics | Videos</title>
        <meta name="description" content="Musics and Videos" />
        <meta property="og:title" content="Musics and Videos" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="" id="top" />
      <div className="container mx-auto px-4">
        <Link href="/">
          <a className="w-20 inline-flex cursor-pointer items-center bg-gray-100 border-0 py-1 px-2 text-center focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <ArrowLeftIcon />
            Back
          </a>
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto ">
          {data.map((datas, id) => (
            <Card className=" p-4" key={id}>
              <iframe
                className="bg-gray-200 rounded-lg p-2 shadow-sm"
                width="100%"
                height="400"
                src={"https://www.youtube.com/embed/" + datas.linkURL}
                title="YouTube video player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Card>
          ))}
        </div>
      </div>
      <Feature />
    </>
  );
};

export default index;
