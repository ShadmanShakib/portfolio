import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="">
      <Link href="/">
        <a>Shadman Shakib</a>
      </Link>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
