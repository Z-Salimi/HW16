import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { fetchPostsComments } from "../api/posts.api";
import { SinglePost } from "../pages/singlePost";

export const Comments: React.FC = () => {
    const id = useParams();
  const postId = id.postId;
  const validId = postId && !isNaN(Number(postId));

  const {
    data: post,
    isError: postError,
    error: postFetchError,
  } = useQuery({
    queryKey: ["fetching-comment", postId],
    queryFn: () => fetchPostsComments(Number(postId)),
    enabled: !!validId,
  });

  React.useEffect(() => {
    if (post) {
      console.log(post);
    } else {
      console.log("No Comment");
    }
  });
  React.useEffect(() => {
    if (!postFetchError || !postError) return;
    throw new Error(postFetchError.message);
  }, [postFetchError, postError]);

  return (
    <section className="flex flex-col gap-5  px-5 py-14 bg-green-50 ">
      <SinglePost/>
        {post?.map((item)=>(
            <div key={item.id}>
            <h2 className="font-semibold capitalize text-xl text-purple-900">Comments</h2>
      
      <div className="flex flex-col">
        <h2 className="font-semibold capitalize text-xl text-cyan-800">Body:</h2>
        <h2 className="font-semibold capitalize text-xl text-cyan-800 pl-2">{item?.body}</h2>
      </div>

      <div>
        <p className="text-cyan-800 font-semibold capitalize mt-5">{item.user.username}</p>
      </div>

      <div className="flex items-center gap-4 pl-2">
        <p className="flex justify-center items-center gap-2  px-5 py-1  rounded-xl text-purple-950 font-semibold text-sm ">
          <AiOutlineLike /> {item.likes}
        </p>
      </div>
      </div>
        ))}
         
    </section>
  );
};
