import { Card } from "antd";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import Feature from "../component/Feature/Feature";

const Creative = () => {
  const data = [
    {
      imageURL: "nhwv3k9db",
    },
    {
      imageURL: "bahfcdv3x",
    },
    {
      imageURL: "e37tfpu83",
    },
    {
      imageURL: "b2nb5mnye",
    },
    {
      imageURL: "nm9cere75",
    },
    {
      imageURL: "bykxf3kfz",
    },
    {
      imageURL: "rbkjs6dab",
    },
    {
      imageURL: "wcf26sgpt",
    },
    {
      imageURL: "bsja53skc",
    },
    {
      imageURL: "u4p9yxx92",
    },
    {
      imageURL: "r6ezjfkfd",
    },
    {
      imageURL: "g5k4d8hxq",
    },
    {
      imageURL: "zukngnhnn",
    },
    {
      imageURL: "zqyvebfdr",
    },
    {
      imageURL: "emyfdyp26",
    },
    {
      imageURL: "55e5ypnb8",
    },
    {
      imageURL: "e92k9f79f",
    },
    {
      imageURL: "az4e9eqna",
    },
    {
      imageURL: "bahfcdv3x",
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
    {
      imageURL: "e37tfpu83",
    },
    {
      imageURL: "z6qdg9d49",
    },
    {
      imageURL: "jxrk85gup",
    },
    {
      imageURL: "72pee8g6m",
    },
    {
      imageURL: "5bqj4q5cq",
    },
    {
      imageURL: "cr6c45tt4",
    },
    {
      imageURL: "mxtnht6rk",
    },
    {
      imageURL: "z5x6dugwk",
    },
    {
      imageURL: "c4mwbrgmm",
    },
    {
      imageURL: "et369md4r",
    },
    {
      imageURL: "eh55r6p5s",
    },
    { imageURL: "7rgjun2sm" },
    { imageURL: "v572ja55c" },
    { imageURL: "w4tsn6bwn" },
    { imageURL: "8d54y434c" },
    { imageURL: "4h33qg29g" },
    { imageURL: "ts4rqj8th" },
    { imageURL: "errv4fvtf" },
    { imageURL: "fyywqvw47" },
    { imageURL: "5twj3n6k2" },
  ];
  return (
    <>
      <Head>
        <title>My Creative</title>
        <meta name="description" content="Creative" />
        <meta property="og:title" content="Creative" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4 text-gray-400">
              My Creative
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              All my works and projects behind the scenes.
              <br />
              This is a bonus, I also did a few TV shows as a Director
            </p>
          </div>
          <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2">
            {data.map((datas, keys) => (
              <Card className="p-4" key={keys}>
                <div className="h-full flex flex-col items-center text-center">
                  <motion.img
                    whileHover={{
                      scale: 1.15,
                      transition: { duration: 0.2 },
                    }}
                    alt={"Images-Id-" + keys}
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={"https://files.fm/thumb_show.php?i=" + datas.imageURL}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
        <Feature />
      </section>
    </>
  );
};

export default Creative;
