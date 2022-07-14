import React from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { Button } from "components/ui";
import DropDown from "./DropDown";
import { useUI } from "hooks";
function Navbar() {
  const { setIsMenuOpen } = useUI();
  return (
    <nav className="relative h-16 ">
      <div className="flex items-center justify-around text-white">
        <button onClick={setIsMenuOpen}>
          <HiMenu size={30} color="white" />
        </button>
        <Link href="/">
          <a>Shadman Shakib</a>
        </Link>
        <Button variant="primary">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </Button>
      </div>

      <DropDown />
    </nav>
  );
}

export default Navbar;
