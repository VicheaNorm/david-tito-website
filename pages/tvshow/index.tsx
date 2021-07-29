import { Card } from "antd";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Feature from "../../component/Feature/Feature";
import { motion } from "framer-motion";
const index = () => {
  const data = [
    { linkURL: "mmmSDsBGDBg" },
    { linkURL: "mmmSDsBGDBg" },
    { linkURL: "mmmSDsBGDBg" },
  ];

  const dataImage = [
    {
      imageURL: "nhwv3k9db",
    },
    {
      imageURL: "whgw7dkuq",
    },
    {
      imageURL: "55a56sdu7",
    },
    {
      imageURL: "277wy9wyf",
    },
    {
      imageURL: "p6fwf9eey",
    },
    {
      imageURL: "nktqtvbfm",
    },
    {
      imageURL: "3xnwfuasj",
    },
    {
      imageURL: "43zwe9adx",
    },
    {
      imageURL: "tuqp4r36w",
    },
    {
      imageURL: "dkbry9rsj",
    },
    {
      imageURL: "2xc5rxra8",
    },
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
          {data.map((datas) => (
            <Card className=" p-4">
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
        <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2">
          {dataImage.map((datas, keys) => (
            <Card className="p-4" key={keys}>
              <div className="h-full flex flex-col items-center text-center">
                <motion.img
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.2 },
                  }}
                  alt={"Images-Id-" + keys}
                  className="flex-shrink-0 rounded-lg w-full h-60 object-cover object-center mb-4"
                  src={"https://files.fm/thumb_show.php?i=" + datas.imageURL}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Feature />
    </>
  );
};

export default index;
