import { Hero, Post } from "@components/blog";

import React from "react";

function Blog({ data }: any): JSX.Element {
  const { items = [] } = data;
  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <div className="grid grid-col xl:grid-row xl:grid-cols-3 gap-5">
        {items.map((item) => {
          const {
            id,
            title,
            images,
          }: { id: number; title: string; images: any } = item;

          return <Post key={id} id={id} images={images} title={title} />;
        })}
      </div>
    </div>
  );
}

export default Blog;
export async function getServerSideProps(context) {
  const url =
    "https://www.googleapis.com/blogger/v3/blogs/7075608721797931886/posts/?fetchImages=true&fetchBodies=false&key=";
  const res = await fetch(`${url}${process.env.GOOGLE_API_KEY}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
