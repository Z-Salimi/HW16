import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchPostsList } from "../api/posts.api";
import { Link } from "react-router-dom";
import { PostCard } from "../components/postCard";

export const PostsPage:React.FC = ()=>{
    const { data, isError, error } = useQuery({
        queryKey: ["fetching-posts"],
        queryFn: fetchPostsList,
      });
      React.useEffect(() => {
        if (!error || !isError) return;
        throw new Error(error.message);
      }, [error, isError]);
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 px-8 py-4 overflow-y-scroll h-[80vh]">
            {data?.posts.map((item)=>(
                <Link key={item.id} to={`/posts/${item.id}`}>
                    <PostCard title={item.title} body={item.body} tags={item.tags} views={item.views} reactions={item.reactions} id={0} userId={0} />
                </Link>
            ))}
        </section>
    )
}