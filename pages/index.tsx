import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <nav className="flex flex-col p-5 md:w-80">
        <div className="flex flex-col bg-primary-900 rounded-full w-14 h-14 items-center justify-center">
          <div className="text-white font-semibold text-xl">JM</div>
        </div>
        <div className="text-2xl  font-semibold my-4">Jose Mari Valino</div>
        <p className="text-primary-100 leading-5 mb-14">
          Curabitur felis nunc, vehicula sed interdum feugiat, porttitor nec
          tortor. Aenean vel justo quam. Nunc lobortis, urna at tincidunt
          malesuada, ipsum risus finibus tellus, a commodo nulla erat at nibh.
        </p>

        <button className="w-28 h-10 text-primary-900 border-primary-900 border rounded-sm p-1 my-4">
          Say Hello !
        </button>

        <div className="flex gap-3">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 27.5V22.6625C20.0469 22.0665 19.9664 21.4673 19.7638 20.9048C19.5612 20.3422 19.2412 19.8293 18.825 19.4C22.75 18.9625 26.875 17.475 26.875 10.65C26.8747 8.9048 26.2034 7.22651 25 5.96251C25.5698 4.43565 25.5295 2.74795 24.8875 1.25001C24.8875 1.25001 23.4125 0.812514 20 3.10001C17.135 2.32354 14.115 2.32354 11.25 3.10001C7.8375 0.812514 6.3625 1.25001 6.3625 1.25001C5.72047 2.74795 5.68018 4.43565 6.25 5.96251C5.03766 7.23589 4.36565 8.92934 4.375 10.6875C4.375 17.4625 8.5 18.95 12.425 19.4375C12.0137 19.8625 11.6966 20.3693 11.4941 20.9249C11.2917 21.4806 11.2085 22.0726 11.25 22.6625V27.5M11.25 23.75C5 25.625 5 20.625 2.5 20L11.25 23.75Z"
              stroke="#719BAC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 10C21.9891 10 23.8968 10.7902 25.3033 12.1967C26.7098 13.6032 27.5 15.5109 27.5 17.5V26.25H22.5V17.5C22.5 16.837 22.2366 16.2011 21.7678 15.7322C21.2989 15.2634 20.663 15 20 15C19.337 15 18.7011 15.2634 18.2322 15.7322C17.7634 16.2011 17.5 16.837 17.5 17.5V26.25H12.5V17.5C12.5 15.5109 13.2902 13.6032 14.6967 12.1967C16.1032 10.7902 18.0109 10 20 10V10Z"
              stroke="#719BAC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 11.25H2.5V26.25H7.5V11.25Z"
              stroke="#719BAC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5Z"
              stroke="#719BAC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>
      <main className="bg-blue-100 flex-grow">Main</main>
    </div>
  );
};

export default Home;
