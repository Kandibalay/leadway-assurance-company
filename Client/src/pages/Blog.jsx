import React from "react";
import { Calendar } from "lucide-react";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import { blogPosts, mostViewed, newsRelease } from "../Db";
import Download from "../components/home/Download";
import Companies from "../components/home/Companies";

const Blog = () => {
  return (
    <>
      <Hero title="Blog" img="hero-blog.jpg" text="Home > " page="Blog" />

      <div className="mx-auto max-w-7xl lg:px-8 mt-10">
        {/* Recent Articles  */}
        <h1 className="text-3xl font-bold text-center mb-8  text-gray-800">
          Recent Articles
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* most viewed posts  */}
        <h1 className="text-3xl font-bold text-center  py-10 text-gray-800">
          Most Viewed Article
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {mostViewed.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        {/* News & Press Releases */}
        <h1 className="text-3xl font-bold text-center  py-10 text-gray-800">
          News & Press Releases
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {newsRelease.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Download />
      <Companies />
    </>
  );
};

export default Blog;
