"use client";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { FullblogPosts } from "@/app/constant";
import PostCard from "@/app/components/ui/postCard";

export function BlogSection({
  title = "Latest News Posts",
  description = "Stay Updated with Our Latest Fitness Tips, Workouts, and Health News!",
  showViewAll = true,
  className = "",
}) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
        <div className="inline-flex items-center bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Blogs
        </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 px-30">
          {FullblogPosts.map((post, key) => (
            <PostCard posts={post} key={key} />
          ))}
        </div>

        {/* {showViewAll && (
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-amber-700 text-white px-8 py-3">
              <Link href="/blogs">View All Blog Posts</Link>
            </Button>
          </div>
        )} */}
      </div>
    </section>
  );
}
