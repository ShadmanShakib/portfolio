import Link from "next/link";
import React from "react";

function Footer(): JSX.Element {
  return (
    <div className="bg-gray-50 text-gray-900  px-4 py-10 max-w-screen-xl mx-auto  xl:px-16 grid xl:grid-cols-4 ">
      <div className="flex flex-col mb-4">
        <h1 className="text-lg">Useful Links</h1>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="flex  mb-4 flex-col">
        <h1 className="text-lg">Address</h1>
        <p className="text-gray-300">Dhaka,Bangladesh</p>
      </div>
      <div className="flex">
        <h1>Social Media</h1>
      </div>
    </div>
  );
}

export default Footer;
