import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { Button } from "components/ui";
import DropDown from "./DropDown";
import { useUI } from "utils/hooks";
import { getProfile } from "services/github";
import Image from "next/image";
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
    <nav className="relative h-16 ">
      <div className="flex items-center justify-around text-white">
        <button className="lg:hidden" onClick={setIsMenuOpen}>
          <HiMenu size={30} color="white" />
        </button>

        {data && (
          <div className="flex items-center">
            <Image
              width={40}
              height={40}
              src={data.avatar_url}
              className="rounded-full"
              alt="avatar"
            />
            <Link href="/">
              <a className="ml-4">{data.name}</a>
            </Link>
          </div>
        )}

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
