import React from "react";
import Image from "next/image";
import s from "./Hero.module.css";
interface Props {
  src: string;
}
function Hero(props: Props) {
  const skills = ["React", "Next JS", "App"];
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setState((state) => (state === skills.length - 1 ? 0 : state + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);
  return (
    <section>
      <Image
        className={s.profile_image}
        alt="Shadman Shakib"
        src={props.src}
        width={400}
        height={400}
      />
      <h1 className="text-white text-3xl">
        Hi, Im <span>Shadman Shakib </span>
        <span>{skills[state]} </span>
        developer
      </h1>
    </section>
  );
}

export default Hero;
