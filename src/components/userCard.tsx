import React from "react";
import { IUser } from "../types/users.type";

export const UserCard: React.FC<IUser> = ({
  image,
  username,
  email,
  id,
}) => {
  return (
    <section className="flex flex-col justify-center gap-y-3 rounded-xl p-5 bg-blue-100">
      <div className="size-8 rounded-full bg-cyan-900 flex justify-center items-center mb-2">
        <p className="text-purple-200 text-lg font-bold">{id}</p>
      </div>

      <div className="flex items-center gap-4">
        <img src={image} className="size-14" alt="" />
        <h2 className="font-bold capitalize text-xl text-purple-950">
          {username}
        </h2>
      </div>
      <div>
        <p className="text-gray-600 font-semibold ml-2">{email}</p>
      </div>
    </section>
  );
};
