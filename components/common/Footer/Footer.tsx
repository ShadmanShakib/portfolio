import React from "react";
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
function Footer() {
  return (
    <footer>
      <div>
        <h1 className="text-white">Shadman Shakib</h1>
        <p className="text-white">
          I build thing for web which your user will love and enjoy using
          everyday. I will work with you from start to finish so that you can
          reach your goal.
        </p>
        <div className="flex">
          <a href="https://twitter.com/shadmanshakib_">
            <IoLogoTwitter size={30} color="white" />
          </a>
          <a href="https://github.com/shadmanshakib">
            <IoLogoGithub size={30} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/shadmanshakib007/">
            <IoLogoLinkedin size={30} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
