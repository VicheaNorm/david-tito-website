import { Card } from "antd";
import Head from "next/head";
import React from "react";

const index = () => {
  const data = [
    { linkURL: "https://www.youtube.com/embed/ZltTF9zNI6w" },
    { linkURL: "https://www.youtube.com/embed/ZltTF9zNI6w" },
    { linkURL: "https://www.youtube.com/embed/ZltTF9zNI6w" },
    { linkURL: "https://www.youtube.com/embed/ZltTF9zNI6w" },
    { linkURL: "https://www.youtube.com/embed/ZltTF9zNI6w" },
    { linkURL: "https://www.youtube.com/embed/ZltTF9zNI6w" },
  ];
  return (
    <>
      <Head>
        <title>TV SHOW</title>
        <meta name="description" content="Creative" />
        <meta property="og:title" content="Creative" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto">
        <h1 className="text-gray-400 p-6 text-3xl">TV SHOW Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto ">
          {data.map((datas) => (
            <Card className=" p-4">
              <iframe
                className="bg-gray-200 rounded-lg p-2 shadow-sm"
                width="100%"
                height="400"
                src={datas.linkURL}
                title="YouTube video player"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
