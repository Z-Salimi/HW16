import { IoMdEye } from "react-icons/io";
import { IPost } from "../types/posts.type";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";

export const PostCard: React.FC<IPost> = ({
  title,
  body,
  tags,
  views,
  reactions,
}) => {
  return (
    <section className="flex flex-col justify-center gap-y-3 rounded-xl px-10 py-8 bg-green-100">
      <div className="flex items-center gap-4">
        <h2 className="font-bold capitalize text-xl text-purple-950">
          {title}
        </h2>
      </div>
      <div>
        <p className="text-gray-600 font-semibold text-ellipsis line-clamp-1">
          {body}
        </p>
      </div>
      <div className="flex items-center gap-4">
        {tags.map((item, index) => (
          <p
            key={index}
            className="flex justify-center items-center gap-1 bg-pink-200 px-5 py-1 rounded-xl text-purple-950 font-semibold text-sm "
          >
            <FaHashtag />
            {item}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-4">
        
        <p className="flex justify-center items-center gap-2 bg-yellow-300 px-5 py-1  rounded-xl text-purple-950 font-semibold text-sm ">
          <AiOutlineLike /> {reactions.likes}
        </p>
        <p className="flex justify-center items-center gap-2 bg-yellow-300 px-5 py-1  rounded-xl text-purple-950 font-semibold text-sm ">
          <AiOutlineDislike /> {reactions.dislikes}
        </p>
      </div>
      <p className="flex justify-center items-center gap-2 bg-cyan-300 w-[8vw] px-5 py-1 rounded-xl text-purple-950 font-semibold text-sm ">
          <IoMdEye />
          {views}
        </p>
    </section>
  );
};
