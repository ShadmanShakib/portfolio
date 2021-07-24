import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { Menu, Light, Dark } from "@components/icons";
import { Portal } from "@reach/portal";
import PhoneMenu from "../PhoneMenu";

function Header(): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={styles.container}>
        <div className="flex items-center justify-between max-w-screen-xl mx-auto  w-full ">
          <div className="flex items-center w-full justify-between xl:w-auto">
            <div onClick={handleClick} className="xl:hidden p-2 bg-gray-200">
              <Menu className={styles.menuIcon} />
            </div>
            <h1 className=" block font-bold text-xl text-green-500">
              <Link href="/">Shadman Shakib</Link>
            </h1>
            <div className="">
              <Dark />
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
