import React from "react";
import Image from "next/image";
import s from "./Hero.module.css";
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
      <Image
        className={s.profile_image}
        alt="Shadman Shakib"
        src={props.src}
        width={300}
        height={300}
      />
      <h1 className="text-white text-3xl">
        Hi, Im <span>Shadman Shakib </span>
        <br />
        <span className={s.shine}>{skills[state]} </span>
        developer
      </h1>
    </section>
  );
}

export default Hero;
