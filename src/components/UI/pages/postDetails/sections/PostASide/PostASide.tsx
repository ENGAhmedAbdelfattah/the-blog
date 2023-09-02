import { getRecentPosts } from "@/api/postsApi";
import BlogPostsItem from "@/components/UI/pages/home/sections/RecentBlogPosts/units/BlogPostsItem";

async function PostASide() {
  let content;
  try {
    content = await getRecentPosts();
  } catch (err) {
    console.log(err);
  }
  return (
    <section className="post-aside">
        <div className="items-box-details-page">
          {Array.isArray(content) &&
            content.slice(2).map((el) => (
              <BlogPostsItem
                key={el.id}
                post={el}
                classItem={"posts-details-page"}
              />
            ))}
        </div>
    </section>
  );
}

export default PostASide;
