import React from "react";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { Button } from "components/ui";
function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between px-6 text-white">
      <div>
        <BsList size={30} color="white" />
      </div>
      <Link href="/">
        <a>Shadman Shakib</a>
      </Link>

      <div className="hidden">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
      <Button variant="primary">
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Button>
    </nav>
  );
}

export default Navbar;
