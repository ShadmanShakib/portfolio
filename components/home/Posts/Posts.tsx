import React from "react";
import { getPosts } from "services/hashnode";
function Blog() {
  const getData = async () => {
    getPosts().then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <h1 className="text-3xl text-white">Posts</h1>
      <button className="bg-white p-3" onClick={getData}>
        Get
      </button>
    </div>
  );
}

export default Blog;
