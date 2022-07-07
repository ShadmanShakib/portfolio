import React from "react";
import s from "./Navbar.module.css";
import { MdMenu } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
}
export default function Navbar(props: Props) {
  const { src } = props;
  return (
    <div className="flex items-center xl:justify-between">
      <div className="flex items-center">
        <Image src={src} alt="logo" className={s.logo} width={50} height={50} />
        <h1 className="text-white ml-5 text-xl">Shadman Shakib</h1>
      </div>
      <div className="text-white">
        <a>
          <Link href="/about">About</Link>
        </a>
        <a href="">Projects</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Hire me today </a>
      </div>
    </div>
  );
}
