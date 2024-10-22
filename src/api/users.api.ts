import { IGlobalType } from "../types/global.type";
import { IUser } from "../types/users.type";
import { generateClient } from "./client";
import { Urls } from "./urls";

interface fetchUserGlobal extends IGlobalType {
  users: IUser[];
}

type fetchUsersListType = () => Promise<fetchUserGlobal>;

export const fetchUsersList: fetchUsersListType = async () => {
  const client = generateClient();
  const response = await client.get(Urls.users.list);
  return response.data;
};
export const fetchUsersById = async (id:number) => {
  const client = generateClient();
  const response = await client.get<IUser>(Urls.users.ById(id));
  console.log(response);
  
  return response.data;
};
