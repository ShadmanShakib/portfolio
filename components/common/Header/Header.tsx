import React from "react";
import Link from "next/link";
import { Menu, Light, Dark } from "@components/icons";
import { Portal } from "@reach/portal";
import PhoneMenu from "../PhoneMenu";
import { useDarkMode } from "libs/hooks";
const MenuData = [
  { id: "fhdofaod", title: "Home", href: "/" },
  { id: "hgodhbodf", title: "Blog", href: "/blog" },
  { id: "cliehbboidc", title: "Projects", href: "/projects" },
  // { id: "laociehg", title: "", href: "/projects" },
  // { id: "daldfkdfkdkfv", title: "", href: "" },
  // { id: "hfhoichyrghskx", title: "", href: "" },
  // { id: "klcieioighozhve", title: "", href: "" },
];
function Header(): JSX.Element {
  const { mode, currentMode, setCurrentMode } = useDarkMode();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-14 z-40 shadow-lg flex items-center fixed w-full  px-6    bg-white ">
        <div className="flex items-center  justify-between max-w-screen-xl mx-auto  w-full ">
          <div className="flex items-center w-full justify-between xl:w-auto">
            <div onClick={handleClick} className="xl:hidden p-2 bg-gray-200">
              <Menu className="xl:hidden" />
            </div>
            <div className=" flex items-center font-bold  text-xl dark:text-white text-black">
              <img
                className="h-8 w-8 mr-2 rounded-full"
                src="/images/logo.jpg"
              />
              <Link href="/">Shadman Shakib</Link>
            </div>
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
          <ul className="hidden uppercase  xl:flex items-center justify-around ">
            {MenuData.map((item) => {
              return (
                <Link key={item.id} href={item.href}>
                  {item.title}
                </Link>
              );
            })}
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
