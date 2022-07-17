export interface PostInterface {
  title: string;
  _id: string;
  coverImage: string;
  slug: string;
  brief: string;
}

export interface PostCardProps {
  post: PostInterface;
}
