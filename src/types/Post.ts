export type Post = {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
  score: number;
  num_comments: number;
  created: number;
  url: string;
};

export type NetworkPost = {
  kind: string;
  data: Post;
};
