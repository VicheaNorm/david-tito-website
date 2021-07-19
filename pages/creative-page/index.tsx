import { Paper } from "@material-ui/core";
import Head from "next/head";
import React from "react";

const indexCreativePage = () => {
  const data = [
    { linkURL: "https://www.youtube.com/embed/baelvxWBj20" },
    { linkURL: "https://www.youtube.com/embed/0jMkt96IzBI" },
    { linkURL: "https://www.youtube.com/embed/baelvxWBj20" },
    { linkURL: "https://www.youtube.com/embed/baelvxWBj20" },
    { linkURL: "https://www.youtube.com/embed/baelvxWBj20" },
    { linkURL: "https://www.youtube.com/embed/baelvxWBj20" },
  ];
  return (
    <>
      <Head>
        <title>Creative</title>
        <meta name="description" content="Creative" />
        <meta property="og:title" content="Creative" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto">
        <h1 className="text-gray-400 p-6 text-3xl">Creative Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
          {data.map((datas) => (
            <div className="p-4">
              <iframe
                className=""
                width="100%"
                height="100%"
                src={datas.linkURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default indexCreativePage;
