import Head from "next/head";
import React from "react";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Link from "next/link";
import { Card } from "antd";
import Feature from "../../component/Feature/Feature";
const index = () => {
  const data = [
    { linkURL: "sdPdYL8tSBc" },
    { linkURL: "D34zvj3Qo_o" },
    { linkURL: "Bd798oZ1_5Y" },
    { linkURL: "Zl7yGpYDYX0" },
    { linkURL: "HPPiFWNXgVs" },
    { linkURL: "GY-_7Km8_QQ" },
    { linkURL: "DD55lW5LGfY" },
    { linkURL: "IhBZZt2QmEw" },
    { linkURL: "4dxl7XU7kEk" },
    { linkURL: "N1Hp8bFwEh0" },
    { linkURL: "RDet4Veo5-g" },
    { linkURL: "6QcQkYGUVpc" },
    { linkURL: "9Q6d6wjb8Xw" },
    { linkURL: "Dd8FMlvI_70" },
    { linkURL: "g3lWW6lrB3A" },
    { linkURL: "0PD9HFKfKKE" },
    { linkURL: "2RQX29XjXPc" },
  ];
  return (
    <>
      <Head>
        <title>RWS Series</title>
        <meta name="description" content="RWS" />
        <meta property="og:title" content="RWS" />
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container mx-auto">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="inline-flex items-center bg-gray-100 border-0 py-1 px-4 text-center focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <ArrowLeftIcon />
              Back
            </a>
          </Link>

          <nav className="md:mr-auto text-gray-200 md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/shortfilm">
              <a className="mr-5 hover:text-gray-200 cursor-pointer">
                Short Film
              </a>
            </Link>
            <Link href="/music-videos">
              <a className="mr-5 hover:text-gray-200 cursor-pointer">
                Music Video
              </a>
            </Link>
            <Link href="/commercial">
              <a className="mr-5 hover:text-gray-200 cursor-pointer">
                Commercial
              </a>
            </Link>
            <Link href="/runwithsai-series">
              <a className="mr-5 hover:text-gray-200 cursor-pointer font-semibold text-red-400 ">
                RUN WITH SAI Series
              </a>
            </Link>
            <Link href="/tvshow">
              <a className="mr-5 hover:text-gray-200 cursor-pointer">TV Show</a>
            </Link>
          </nav>
        </div>
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
      </div>
      <Feature />
    </>
  );
};

export default index;
