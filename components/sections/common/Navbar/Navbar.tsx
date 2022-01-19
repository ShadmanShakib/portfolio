import React from "react";
import s from "./Navbar.module.css";
import { MdMenu } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

interface Props {
  src: string;
}
export default function Navbar(props: Props) {
  const { src } = props;
  return (
    <div className={s.main}>
      <div className={s.menu}>
        <MdMenu size={30} />
      </div>
      <Image src={src} alt="logo" className={s.logo} width={50} height={50} />
      <div className="">
        <FaLinkedin size={30} />
      </div>
    </div>
  );
}
