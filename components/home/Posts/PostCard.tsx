import React from "react";
import { PostCardProps } from "./Posts.types";
import Image from "next/image";
function PostCard(props: PostCardProps) {
  const { post } = props;
  return (
    <article className="group">
      <Image
        className="transform rounded-sm duration-300 group-hover:scale-110"
        layout="responsive"
        height={"20px"}
        width={"30px"}
        src={post.coverImage}
        alt="cover"
      />
      <h1 className="mt-5 text-white">{post.title}</h1>
    </article>
  );
}

export default PostCard;
