import React from "react";
import Link from "next/link";
import { Menu, Light, Dark } from "@components/icons";
import { Portal } from "@reach/portal";
import PhoneMenu from "../PhoneMenu";
import { useDarkMode } from "libs/hooks";

function Header(): JSX.Element {
  const { mode, currentMode, setCurrentMode } = useDarkMode();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-14 z-40 shadow-sm  flex items-center fixed w-full  px-6 dark:bg-gray-800   bg-indigo-100">
        <div className="flex items-center  justify-between max-w-screen-xl mx-auto  w-full ">
          <div className="flex items-center w-full justify-between xl:w-auto">
            <div onClick={handleClick} className="xl:hidden p-2 bg-gray-200">
              <Menu className="xl:hidden" />
            </div>
            <h1 className=" block font-bold text-xl dark:text-white text-black">
              <Link href="/">Shadman Shakib</Link>
            </h1>
            <div
              onClick={() => setCurrentMode(mode)}
              className="xl:hidden flex justify-center items-center"
            >
              {currentMode === "dark" ? (
                <Light className="fill-current text-gray-900" />
              ) : (
                <Dark className="fill-current text-white" />
              )}
            </div>
          </div>

          {/* Large Screen Menu */}
          <ul className="hidden uppercase  xl:flex items-center justify-around w-96">
            <Link href="/aboutme">
              <span className="dark:text-white">About me</span>
            </Link>
            <Link href="/blog">
              <span className="dark:text-white">Blog</span>
            </Link>
            <Link href="/projects">
              <span className="dark:text-white">Projects</span>
            </Link>
            <div
              onClick={() => setCurrentMode(mode)}
              className="hidden xl:block"
            >
              {currentMode === "dark" ? (
                <Light className="fill-current text-gray-900" />
              ) : (
                <Dark className="fill-current text-white" />
              )}
            </div>
            <button
              onClick={() =>
                window.open(
                  "https://www.upwork.com/freelancers/~0169d0ad10a0d8d490?viewMode=1&s=1110580755057594368"
                )
              }
              className="bg-primary uppercase text-white py-2 font-semibold hover:bg-indigo-700 px-5 rounded-3xl"
            >
              Hire me
            </button>
          </ul>

          {isOpen && (
            <Portal>
              <PhoneMenu handleClick={handleClick} />
            </Portal>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
