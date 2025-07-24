import React, { useState } from "react";
import Heroimg1 from "../assets/bg-desktop-light.jpg";
import Heroimg2 from "../assets/bg-desktop-dark.jpg";
import Heroimg3 from "../assets/bg-mobile-light.jpg";
import Heroimg4 from "../assets/bg-mobile-dark.jpg";
import { BsMoonFill, BsSunFill } from "react-icons/bs";


function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);

    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div>
        <div className="relative w-full ssm:hidden md:block lg:block">
          {isDarkMode ? (
            <img src={Heroimg2} alt="" className="w-full" />
          ) : (
            <img src={Heroimg1} alt="" className="w-full" />
          )}
          <div className="flex flex-col justify-around w-full absolute top-2 h">
            <div className="flex justify-center items-center w-full p-5 pt-15">
              <div className="flex justify-center items-center text-5xl pr-100  text-gray-50 font-bold">
                TODO
              </div>
              <div className="flex justify-center items-center">
                <button
                  id="theme-mode"
                  onClick={toggleTheme}
                  className="cursor-pointer hover:text-gray-800"
                >
                  {isDarkMode ? (
                    <BsMoonFill size={30} />
                  ) : (
                    <BsSunFill size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full ssm:block md:hidden lg:hidden">
          {isDarkMode ? (
            <img src={Heroimg4} alt="" className="w-full" />
          ) : (
            <img src={Heroimg3} alt="" className="w-full" />
          )}
          <div className="flex justify-around w-full absolute top-10">
            <div className="flex justify-center items-center text-3xl text-gray-50 font-bold">
              TODO
            </div>
            <div className="flex justify-center items-center">
              <button
                id="theme-mode"
                onClick={toggleTheme}
                className="cursor-pointer hover:text-gray-800"
              >
                {isDarkMode ? (
                  <BsMoonFill size={20} />
                ) : (
                  <BsSunFill size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
