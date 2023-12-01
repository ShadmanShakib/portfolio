import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-primary-background text-white flex h-16 items-center justify-between border-b border-[#2e2e36] py-3 xl:px-6">
      <h1 className="text-primary-foreground ">Sadman Shakib</h1>
      <div className="flex items-center space-x-4">
        <div className="">Projects</div>
        <div className="w-36 rounded-3xl bg-[#1c1c1e] py-2 text-center">
          <p>Book a call</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
