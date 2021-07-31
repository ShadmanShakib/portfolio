import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  images: [{ url: string }];
  id?: number;
}

function Post(props: Props): JSX.Element {
  const { title, images, id } = props;
  return (
    <div className=" shadow-lg">
      {images && (
        <div className="">
          <img className="w-80  h-48" src={images[0].url} alt="" />
        </div>
      )}
      <div className="bg-white font-bold h-20 flex items-center">
        <h1 className="text-xl  px-3">
          <Link href={`/blog/${id}?title=${title}`}>{title}</Link>
        </h1>
      </div>
    </div>
  );
}

export default Post;
