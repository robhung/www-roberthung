import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

import { IconButton } from "../components/IconButton";

const IndexPage = () => {
  return (
    <main className="p-4 mx-auto sm:container h-screen flex flex-col items-center justify-center  bg-trueGray-100 ">
      <title>Robert Hung</title>

      <div className="py-4 flex flex-col items-center bg-white rounded">
        <div className="flex py-6 w-full items-center">
          <div className="mr-6 h-px w-1/6 bg-trueGray-300" />

          <StaticImage
            className=""
            imgClassName="sm:w-screen-1/2 rounded-full"
            loading="eager"
            src="https://www.gravatar.com/avatar/f8f1c5dd24107627c1d5e8c1052908fe.jpg?s=512"
            alt="Robert Hung"
          />

          <div className="ml-6 h-px w-1/6 bg-trueGray-300" />
        </div>

        <h1 className="text-2xl font-light tracking-wide-0.20">ROBERT HUNG</h1>

        <h2 className="py-4 text-sm font-extralight tracking-wide-0.15">
          SOFTWARE DEVELOPER
        </h2>

        <div className="py-4 flex">
          <div className="px-2">
            <IconButton
              icon={<FaGithub size={24} className="text-lightBlue-700" />}
            />
          </div>

          <div className="px-2">
            <IconButton
              icon={<FaLinkedinIn size={24} className="text-lightBlue-700" />}
            />
          </div>

          <div className="px-2">
            <IconButton
              icon={<FaTwitter size={24} className="text-lightBlue-700" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
