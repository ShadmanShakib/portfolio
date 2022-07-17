import React from "react";
import { PostCardProps } from "./Posts.types";
import Image from "next/image";
function PostCard(props: PostCardProps) {
  const { post } = props;
  return (
    <div>
      <Image
        layout="responsive"
        height={"20px"}
        width={"30px"}
        src={post.coverImage}
        alt="cover"
      />
      <h1 className="text-white">{post.title}</h1>
    </div>
  );
}

export default PostCard;
