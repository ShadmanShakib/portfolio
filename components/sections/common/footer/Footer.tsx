import React from "react";
import { BsTwitter } from "react-icons/bs";
import s from "./Footer.module.css";
function Footer() {
  return (
    <div className={s.main}>
      <BsTwitter className={s.icon} size={30} />
    </div>
  );
}

export default Footer;
