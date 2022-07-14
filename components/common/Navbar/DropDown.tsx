import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiX } from "react-icons/hi";
function DropDown(props: any) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const varients = {
    open: { opacity: 1, y: 0, x: 0 },
    closed: { opacity: 0, y: "-100% ", x: "-100%" },
  };
  return (
    <motion.nav
      className="absolute top-0 flex w-full flex-col bg-white text-black"
      animate={props.isMenuOpen ? "open" : "closed"}
      variants={varients}
    >
      <div>
        <HiX size={30} />
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </motion.nav>
  );
}

export default DropDown;
