"use client";
import BlogPostsItem from "@/components/UI/pages/home/sections/RecentBlogPosts/units/BlogPostsItem";
import { getAllNoRecentPosts } from "@/api/postsApi";
import Pagination from "./blocks/Pagination";
import { useQuery, useQueryClient } from "react-query";
import { Post } from "@/types/post";
import { ApiError } from "next/dist/server/api-utils";
import { useAppSelector } from "@/redux/app/hooks";
import BlogPostsItemClient from "../RecentBlogPosts/units/BlogPostsItemClient";
function AllBlogPosts() {
  const activePageNumber = useAppSelector(
    (store) => store.activePageNumber.activePageNumber
  );

  const queryKey = ["getAllNoRecentPosts", activePageNumber];
  const {
    isLoading,
    isError,
    error,
    data: posts,
  } = useQuery<Post[], ApiError>(
    queryKey,
    () => getAllNoRecentPosts(activePageNumber),
    {
      select: (data: any): any => data.sort((a: any, b: any) => b.id - a.id),
    }
  );

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error?.message}</p>;
  } else {
    content = posts;
  }

  return (
    <section className="All-blog-posts">
      <div className="container">
        <h2>All blog posts</h2>
        <div className="items-box">
          {Array.isArray(content)
            ? content.map((el) => (
                <BlogPostsItemClient
                  key={el.id}
                  post={el}
                  classItem={"all-no-recent"}
                />
              ))
            : content}
        </div>
        <Pagination />
      </div>
    </section>
  );
}

export default AllBlogPosts;
