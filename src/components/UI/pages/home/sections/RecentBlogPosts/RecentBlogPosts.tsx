import BlogPostsItem from "./units/BlogPostsItem";
import { getRecentPosts } from "@/api/postsApi";

async function RecentBlogPosts() {
  let posts;
  try {
    posts = await getRecentPosts();
  } catch (err) {
    console.log(err);
  }
  return (
    <section className="recent-blog-posts">
      <div className="container">
        <h2>Recent blog posts</h2>
        <div className="items-box">
          {Array.isArray(posts) &&
            posts.map((el) => (
              <BlogPostsItem key={el.id} post={el} classItem={"recent"} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default RecentBlogPosts;
