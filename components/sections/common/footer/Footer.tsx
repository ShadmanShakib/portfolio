import React from "react";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import s from "./Footer.module.css";
function Footer() {
  return (
    <div className={s.main}>
      <p className="text-white">© Shadman Shakib 2022.</p>
      <div className="flex justify-around w-full mt-3">
        <a href="https://twitter.com/shadmanshakib_" className="text-white">
          <BsTwitter className={s.icon} size={30} />
        </a>
        <a href="https://github.com/shadmanshakib">
          <BsGithub className={s.icon} size={30} />
        </a>
        <a href="https://www.linkedin.com/in/shadmanshakib007/">
          <BsLinkedin className={s.icon} size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
