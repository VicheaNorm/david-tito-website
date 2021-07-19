import { Button } from "@material-ui/core";
import { LeftCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Head from "next/head";
import React from "react";
import Link from "next/link";
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
        <div className="px-6 py-3 flex">
          <Button>
            <Link href="/">
              <a className="text-gray-300 text-2xl">
                <LeftCircleOutlined />
              </a>
            </Link>
          </Button>
          <h1 className="text-gray-400 text-3xl py-2">Creative </h1>
        </div>

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

export default indexCreativePage;
