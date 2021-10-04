import React from "react";
import Fade from 'react-reveal/Fade';
import LinkTo from "next/link";
import { motion } from "framer-motion";
import { Card } from "antd";
const Work = () => {
  const data = [
    {
      link: "/shortfilm",
      title: "Short Film",
      imageURL: "z6qdg9d49",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    {
      link: "/music-videos",
      title: "Music Video",
      imageURL: "et369md4r",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    {
      link: "/commercial",
      title: "Commercial      ",
      imageURL: "bahfcdv3x",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    {
      link: "/runwithsai-series",
      title: "RUN WITH SAI Series",
      imageURL: "ksh3u38aq",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    {
      link: "/tvshow",
      title: "TV Show",
      imageURL: "4h33qg29g",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
    
    {
      link: "/redpot",
      title: "Red Pot short film for Festival",
      imageURL: "rkmv9b42r",
      text: "Fingerstache flexitarian street art 8-bit waistcoat.Distillery hexagon disrupt edison bulbche.",
    },
  ];
  return (
    <section className="container mx-auto justify-center text-gray-600 body-font sm:pt-20">
      <Fade bottom>
      <div className="px-2 py-4 ">
        <div className="flex flex-wrap w-full mb-0">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-400">
              Creative
            </h1>
            <div className="h-1 w-20 bg-indigo-300 rounded"></div>
          </div>
          {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Creative ( there will be in some of my work in there as the work I
            have been working with 019 MV as well as Sai …)
          </p> */}
        </div>
        <div className="grid md:grid-cols-3 md:py-6">
          {data.map((datas) => (
            <Card className="p-2">
              <LinkTo href={datas.link}>
                <a className="hover:text-gray-200">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5 },
                    }}
                    className="bg-gradient-to-r from-gray-800 to-gray-500 px-2 py-2 rounded-lg"
                  >
                    <img
                      className="h-60 rounded w-full object-cover object-center mb-4"
                      src={
                        "https://files.fm/thumb_show.php?i=" + datas.imageURL
                      }
                      alt="content"
                    />
                    <h2 className="text-lg text-gray-400 font-medium title-font mb-2 uppercase  ">
                      {datas.title}
                    </h2>
                    {/* <p className="leading-relaxed text-base">{datas.text}</p> */}
                  </motion.div>
                </a>
              </LinkTo>
            </Card>
          ))}
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Work;
