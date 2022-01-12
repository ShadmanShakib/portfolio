import React from "react";
import Image from "next/image";
import s from "./Hero.module.css";
function Hero() {
  return (
    <div>
      <Image
        className={s.profile_image}
        alt="Shadman Shakib"
        src="https://avatars.githubusercontent.com/u/72305492?v=4"
        width={400}
        height={400}
      />
    </div>
  );
}

export default Hero;
