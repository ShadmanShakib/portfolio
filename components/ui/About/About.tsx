import React from "react";
import styles from "./About.module.css";

function Aboutme(): JSX.Element {
  return (
    <div className="flex ">
      <img className="" src="/images/aboutmeimg.svg" alt="about me" />

      <div className=" flex items-center dark:bg-gray-700  flex-col justify-center px-4">
        <h1 className={styles.title}>About me</h1>
        <p className="xl:text-xl dark:text-white text-gray-700">
          Hi, Im Shadman Shakib, React/React Native Developer. Here you help
          your dream website or app and grow your business.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
