import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { useUI } from "hooks";
function DropDown(props: any) {
  const { isMenuOpen, setIsMenuOpen } = useUI();
  const varients = {
    open: { opacity: 1, y: 0, x: 0 },
    closed: { opacity: 0, y: "-100% ", x: "-100%" },
  };
  return (
    <motion.nav
      className="absolute top-0 flex h-screen w-full flex-col bg-white text-black"
      animate={isMenuOpen ? "open" : "closed"}
      variants={varients}
    >
      <div>
        <button onClick={setIsMenuOpen}>
          <HiX size={30} />
        </button>
        <ul className="flex flex-col items-center">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
}

export default DropDown;
