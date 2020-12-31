import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
  MailIcon,
} from "../components/icons";

const Home: React.FC = () => {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    console.log(theme, "Theme");
  }, [theme]);

  return (
    <div className={`${theme} flex h-screen flex-col md:flex-row`}>
      <nav className="flex flex-col p-5 border-r md:w-80 dark:bg-gray-900 dark:border-transparent">
        <button onClick={() => setTheme("dark")}>
          <div className="flex flex-col bg-primary-900 rounded-full w-14 h-14 items-center justify-center">
            <div className="text-white font-semibold text-xl ">JM</div>
          </div>
        </button>

        <div className="text-2xl  font-semibold my-4 dark:text-white">
          Jose Mari Valino
        </div>
        <p className="text-primary-100 leading-5 mb-14">
          IoT Solutions Architect , loves prototyping and play latest tech in
          web.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="py-1 px-3 text-white bg-primary-900">#IoT</span>
          <span className="py-1 px-3 text-white bg-pink-500">#GraphQL</span>
          <span className="py-1 px-3 text-white bg-gradient-to-b from-red-500 to-purple-500">
            #AWS
          </span>
        </div>

        <button className="mt-8 w-28 h-10 text-primary-900 border-primary-900 border rounded-sm p-1 my-4">
          Say Hello !
        </button>

        <div className="flex gap-3">
          <a href="https://github.com/jmvalino">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/jmvalino" target="blank">
            <LinkedInIcon />
          </a>

          <MailIcon />
        </div>

        {/* <div className="mt-auto w-20 flex flex-col items-center gap-1">
          <SunIcon />
          <span className="h-12 rounded-full w-1 bg-gray-400" />
          <MoonIcon />
        </div> */}
      </nav>
      <main className="flex-grow p-3 dark:bg-black">
        <button>
          <h2></h2>
        </button>
      </main>
    </div>
  );
};

export default Home;
