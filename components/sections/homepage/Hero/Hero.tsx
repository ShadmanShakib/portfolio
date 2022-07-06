import React from "react";
import Image from "next/image";
import s from "./Hero.module.css";
import { Button } from "@ui/index";
interface Props {
  src: string;
}
function Hero(props: Props) {
  const skills = ["React", "Next JS", "React Native", "Shopify", "TypeScript"];
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => (state === skills.length - 1 ? 0 : state + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);
  return (
    <section className={s.main}>
      <div className="flex items-center text-xl text-white font-bold">
        <h1>Imagine.</h1>
        <h1>Develop.</h1>
        <h1>Shift.</h1>
      </div>
      <div className="">
        <h1 className="text-3xl text-white">
          I create beautiful websites your users will love
        </h1>
      </div>
      <button className="bg-gray-900 text-white">Make it happen</button>
    </section>
  );
}

export default Hero;
