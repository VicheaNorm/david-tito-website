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
        <h1>TV SHOW Page</h1>
        <div className="grid grid-cols-3 mx-auto">
          {data.map((datas) => (
            <div className="">
              <iframe
                width="500"
                height="333"
                src={datas.linkURL}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
