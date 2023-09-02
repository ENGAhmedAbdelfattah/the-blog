export type Post = {
  id?: number;
  userId: number;
  title: string;
  body: string;
};


export type CreatePost = {
  id?: number;
  postTitle: string;
  postAuthor: string;
  postContent: string;
};
