import { IComment } from "../types/comment.type";
import { IGlobalType } from "../types/global.type";
import { IPost } from "../types/posts.type";
import { generateClient } from "./client";
import { Urls } from "./urls";

interface fetchPostGlobal extends IGlobalType {
  posts: IPost[];
}

type fetchPostsListType = () => Promise<fetchPostGlobal>;

export const fetchPostsList: fetchPostsListType = async () => {
  const client = generateClient();
  const response = await client.get(Urls.posts.list);
  return response.data;
};

export const fetchPostsById = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IPost>(Urls.posts.ById.ID(id));
  console.log(response);

  return response.data;
};
export const fetchPostsComments = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IComment[]>(Urls.posts.ById.comments(id));
  console.log(response);

  return response.data;
};