import React from "react";
import {  useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersById } from "../api/users.api";

export const SingleUser: React.FC = () => {
  
  const  id  = useParams();
  const userId = id.userId;
  const validId = userId && !isNaN(Number(userId));

  const {
    data: user,
    isError: userError,
    error: userFetchError
  } = useQuery({
    queryKey:["fetching-user-info",userId],
    queryFn:() => fetchUsersById(Number(userId)),
    enabled: !!validId 
});

React.useEffect(()=>{
  if(user){
    console.log(user);
  }else{
    console.log("No user");
    
  }
})
  React.useEffect(() => {
    if (!userFetchError || !userError) return;
    throw new Error(userFetchError.message);
  }, [userFetchError, userError]);

  return (
    <section className="flex flex-col gap-10 h-[82vh] px-14 py-14 bg-pink-50 overflow-y-scroll overflow-x-hidden">
      <div className="size-8 rounded-full bg-blue-900 flex justify-center items-center mb-2">
        <p className="text-purple-200 text-lg font-bold">{user?.id}</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={user?.image} className="size-16" alt="" />
        <h2 className="font-bold capitalize text-xl text-blue-950">
          {user?.username}
        </h2>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-y-5">
          <div>
            <span className="text-lg font-bold text-cyan-950">FullName:</span>
            <div className="flex gap-x-3 pl-2">
              <span className="text-cyan-800 font-semibold capitalize">
                {user?.firstName}
              </span>
              <span className="text-cyan-800 font-semibold capitalize">
                {user?.lastName}
              </span>
            </div>
          </div>
          <div>
            <span className="text-lg font-bold text-cyan-950">MaidenName:</span>
            <p className="text-cyan-800 font-semibold capitalize pl-2">
              {user?.maidenName}
            </p>
          </div>
          <div>
            <span className="text-lg font-bold text-cyan-950">BirthDate:</span>
            <p className="text-cyan-800 font-semibold capitalize pl-2">
              {user?.birthDate}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-cyan-950">Age: </span>
            <p className="text-cyan-800 font-semibold">{user?.age}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div>
            <span className="text-lg font-bold text-cyan-950">Phone:</span>
            <p className="text-cyan-800 font-semibold capitalize pl-2">
              {user?.phone}
            </p>
          </div>
          <div>
            <span className="text-lg font-bold text-cyan-950">Gender:</span>
            <p className="text-cyan-800 font-semibold capitalize pl-2">
              {user?.gender}
            </p>
          </div>
          <div>
            <span className="text-lg font-bold text-cyan-950">Email:</span>
            <p className="text-cyan-800 font-semibold capitalize pl-2">
              {user?.email}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-cyan-950">BloodGroup:</span>
            <p className="text-cyan-800 font-semibold capitalize pl-2">
              {user?.bloodGroup}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
