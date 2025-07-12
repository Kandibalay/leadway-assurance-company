import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const BlogCard = ({ post }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full px-4 sm:px-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
          {post.title}
        </h2>

        <div className="flex items-center text-sm text-gray-500 mt-2 mb-2 justify-between">
          <div>
            By <span className="font-semibold">{post.user}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt || post.excerpts}
        </p>

        <div className="mt-auto">
          <a
            href={post.link}
            className="inline-block text-orange-600 font-medium cursor-pointer hover:underline"
          >
            Read More →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
