import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { fetchUsersList } from "../api/users.api";
import { UserCard } from "../components/userCard";
import { Link } from "react-router-dom";
import { IUser } from "../types/users.type";

export const UsersPage: React.FC = () => {
  const { data, isError, error } = useQuery({
    queryKey: ["fetching-users"],
    queryFn: fetchUsersList,
  });

  const [visibleUsers, setVisibleUsers] = useState<IUser[] >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  
  console.log(data?.limit);
  const loadMoreUsers = () => {
    if (data?.users) {
      const nextPage = currentPage + 1;
      const newVisibleUsers = data?.users.slice(0, nextPage * usersPerPage);
      setVisibleUsers(newVisibleUsers);
      setCurrentPage(nextPage);
      
    }
  };
  React.useEffect(() => {
    if (data && data.users) {
      setVisibleUsers(data.users.slice(0, usersPerPage));
    }
  }, [data?.users]);

  React.useEffect(() => {
    if (!error || !isError) return;
    throw new Error(error.message);
  }, [error, isError]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 px-8 py-4 overflow-y-scroll h-[80vh]">
      {data?.users.map((item, index) => (
        <Link key={item.id} to={`/users/${item.id}`}>
          <UserCard
            firstName={item.firstName}
            lastName={item.lastName}
            id={item.id}
            maidenName={item.maidenName}
            age={item.age}
            gender={item.gender}
            email={item.email}
            phone={item.phone}
            username={item.username}
            birthDate={item.birthDate}
            image={item.image}
            bloodGroup={item.bloodGroup}
          />
        </Link>
      ))}
      <button
        onClick={loadMoreUsers}
        disabled={visibleUsers.length === data?.users.length}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        {visibleUsers.length === data?.users.length ? "No More Users" : "Load More"}
      </button>
    </section>
  );
};
