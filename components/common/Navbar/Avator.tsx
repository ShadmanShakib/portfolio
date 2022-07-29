import React from "react";
import Image from "next/image";
import Link from "next/link";
function Avator(props: any) {
  const { avatar_url, name } = props;
  return (
    <div className="flex items-center">
      <Image
        width={40}
        height={40}
        src={avatar_url}
        className="rounded-full"
        alt="avatar"
      />
      <Link href="/">
        <a className="ml-4">{name}</a>
      </Link>
    </div>
  );
}

export default Avator;
