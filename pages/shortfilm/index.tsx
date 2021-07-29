import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import { Card } from "antd";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Feature from "../../component/Feature/Feature";

const indexCreativePage = () => {
  const data = [
    { linkURL: "baelvxWBj20" },
    { linkURL: "6NmO3try_m8" },
    { linkURL: "8CFreBPii1Y" },
  ];
  return (
    <>
      <Head>
        <title>Short Film</title>
        <meta name="description" content="Short Film" />
        <meta property="og:title" content="Short Film" />
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

export default indexCreativePage;
