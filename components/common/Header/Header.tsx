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
      <div className="h-14 z-40 shadow-sm flex items-center fixed w-full  px-6 dark:bg-gray-800   bg-white">
        <div className="flex items-center  justify-between max-w-screen-xl mx-auto  w-full ">
          <div className="flex items-center w-full justify-between xl:w-auto">
            <div onClick={handleClick} className="xl:hidden p-2 bg-gray-200">
              <Menu className="xl:hidden" />
            </div>
            <h1 className=" block font-bold text-xl  text-black">
              <Link href="/">Shadman Shakib</Link>
            </h1>
            <div onClick={() => setCurrentMode(mode)} className="xl:hidden">
              {currentMode === "dark" ? (
                <Light className="fill-current text-gray-900" />
              ) : (
                <Dark className="fill-current text-white" />
              )}
            </div>
          </div>

          {/* Large Screen Menu */}
          <ul className="hidden uppercase  xl:flex items-center justify-around w-96">
            <Link href="/aboutme">About me</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/projects">Projects</Link>
            <button
              onClick={() =>
                window.open(
                  "https://www.upwork.com/freelancers/~0169d0ad10a0d8d490?viewMode=1&s=1110580755057594368"
                )
              }
              className="bg-black text-white py-1 px-5 rounded-3xl"
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
