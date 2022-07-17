import React from "react";
import { getPosts } from "services/hashnode";
import _ from "underscore";
import PostCard from "./PostCard";
function Blog() {
  const [posts, setPosts] = React.useState<any>([]);
  const getData = async () => {
    getPosts().then((res) => {
      const posts = res.data.user.publication.posts;
      setPosts(posts);
      console.log(posts);
    });
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-white">Posts</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {posts &&
          _.map(posts, (post) => {
            return (
              <div key={post._id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blog;