import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { Button } from "components/ui";
import DropDown from "./DropDown";
import { useUI } from "utils/hooks";
import { getProfile } from "services/github";
import Image from "next/image";
import Avator from "./Avator";
function Navbar() {
  const { setIsMenuOpen } = useUI();
  const [data, setData] = useState<any>(null);
  const getData = async () => {
    const data = await getProfile("shadmanshakib");
    setData(data);
    console.log(data);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <nav className="relative ">
      <div className="flex h-16 items-center justify-around text-white">
        <button className="lg:hidden" onClick={setIsMenuOpen}>
          <HiMenu size={30} color="white" />
        </button>

        {data && <Avator {...data} />}
        <a target="_black" href="https://shadmanshakib.hashnode.dev/">
          Blog
        </a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Projects</a>
        <Button variant="primary">
          <Link href="/contact">
            <a>Hire me</a>
          </Link>
        </Button>
      </div>

      <DropDown />
    </nav>
  );
}

export default Navbar;
