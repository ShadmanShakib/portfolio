import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
function Footer() {
  return (
    <footer>
      <div>
        <h1>Shadman Shakib</h1>
        <p>
          I build thing for web which your user will love and enjoy using
          everyday. I will work with you from start to finish so that you can
          reach your goal.
        </p>
      </div>
      <a href="https://twitter.com/shadmanshakib_">
        <IoLogoTwitter size={40} color="gray" />
      </a>
    </footer>
  );
}

export default Footer;
