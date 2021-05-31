import React from "react";

import {
  GithubIcon,
  LinkedInIcon,
  // SunIcon,
  // MoonIcon,
  MailIcon,
} from "../components/icons";

const Home: React.FC = () => {
  // const [isDark, setIsDark] = useState(false);
  // useEffect(() => {
  //   console.log(isDark, "Theme");
  // }, [isDark]);

  return (
    <div className="m-5">
      <header className="flex dark:border-transparent w-full mb-8">
        {/* <button onClick={() => setIsDark(!isDark)}> */}
        <div className="flex flex-col bg-primary-900 rounded-full w-14 h-14 min-h-14 min-w-14 items-center justify-center mr-4">
          <div className="text-white font-semibold text-xl ">JM</div>
        </div>
        {/* </button> */}
        <div className="flex flex-col">
          <div className="font-semibold dark:text-white">Jose Mari Valino</div>
          <p className="text-primary-100 leading-5">IoT Solutions Architect.</p>
        </div>
      </header>

      <summary className="flex flex-col mb-10">
        <p className="mb-5">
          Curabitur felis nunc, vehicula sed interdum feugiat, porttitor nec
          tortor. Aenean vel justo quam. Nunc lobortis, urna at tincidunt
          malesuada, ipsum risus finibus tellus, a commodo nulla erat at nibh.
        </p>

        <div className="grid gap-2 mr-auto grid-flow-col">
          <a href="https://github.com/jmvalino">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/jmvalino" target="blank">
            <LinkedInIcon />
          </a>

          <MailIcon />
        </div>
      </summary>
      <main className="">
        <div className="rounded-sm bg-gray-100 h-40">GraphQL</div>
      </main>
    </div>
  );
};

export default Home;
