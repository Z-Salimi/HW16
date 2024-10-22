import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { fetchPostsById } from "../api/posts.api";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { Comments } from "../components/Comments";

export const SinglePost: React.FC = () => {
  const [isOpen, setIsOpen]= useState(false);

  const id = useParams();
  const postId = id.postId;
  const validId = postId && !isNaN(Number(postId));

  const {
    data: post,
    isError: postError,
    error: postFetchError,
  } = useQuery({
    queryKey: ["fetching-user-info", postId],
    queryFn: () => fetchPostsById(Number(postId)),
    enabled: !!validId,
  });



  React.useEffect(() => {
    if (post) {
      console.log(post);
    } else {
      console.log("No post");
    }
  });
  React.useEffect(() => {
    if (!postFetchError || !postError) return;
    throw new Error(postFetchError.message);
  }, [postFetchError, postError]);

  return (
    <section className="flex flex-col gap-10 h-[82vh] px-14 py-14 bg-green-50 overflow-y-scroll overflow-x-hidden">
      <div className="size-8 rounded-full bg-pink-900 flex justify-center items-center mb-2">
        <p className="text-purple-200 text-lg font-bold">{post?.id}</p>
      </div>
      <section className="grid grid-cols-1 gap-x-20 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-y-10">
          <div className="flex flex-col gap-y-3">
            <span className="text-lg font-bold text-cyan-950">Title:</span>
            <h2 className="font-semibold capitalize text-xl text-cyan-800">
              {post?.title}
            </h2>
          </div>

          <div>
            <span className="text-lg font-bold text-cyan-950">Body:</span>

            <p className="text-cyan-800 font-semibold capitalize mt-5">
              {post?.body}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-10">
          <div className="flex flex-col gap-y-5">
            <span className="text-lg font-bold text-cyan-950">Tags:</span>
            <div className="flex  gap-4 pl-2">
              {post?.tags.map((item, index) => (
                <p
                  key={index}
                  className="flex justify-center items-center gap-1 bg-pink-200 px-5 py-1 rounded-xl text-purple-950 font-semibold text-sm "
                >
                  <FaHashtag />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-lg font-bold text-cyan-950">Reactions:</span>
            <div className="flex items-center gap-4 pl-2">
              <p className="flex justify-center items-center gap-2  px-5 py-1  rounded-xl text-purple-950 font-semibold text-sm ">
                <AiOutlineLike /> {post?.reactions.likes}
              </p>
              <p className="flex justify-center items-center gap-2  px-5 py-1  rounded-xl text-purple-950 font-semibold text-sm ">
                <AiOutlineDislike /> {post?.reactions.dislikes}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-cyan-950">View:</span>
            <p className="flex justify-center items-center gap-2  w-[8vw] rounded-xl text-purple-950 font-semibold text-sm ">
              <IoMdEye /> {post?.views}
            </p>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center items-center pt-3">
      <Link to={`/posts/${post?.id}/comments`}>
      <button
          // onClick={() => setIsOpen(!isOpen)}
          className="px-8 py-2 bg-purple-800 text-white font-semibold w-[30vw] rounded-lg"
        >
          {/* {isOpen ? "Hide Comments" : "Show Comments"} */}
          Show Comments 
        </button>
        </Link>
      </div>
      
    </section>
  );
};
