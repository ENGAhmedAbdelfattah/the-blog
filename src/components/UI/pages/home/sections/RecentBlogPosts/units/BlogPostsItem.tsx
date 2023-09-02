import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import type { Post } from "@/types/post";
import ImagePost from "@/../public/images/home/ImagePost.jpg";
import Link from "next/link";
import { getUser } from "@/api/userApi";
type props = { post: Post; classItem: string };

async function BlogPostsItem({ post, classItem }: props) {
  let user;
  try {
    user = await getUser(post.userId);
  } catch (err) {
    console.log(err);
  }
  return (
    <div className={`home-post-item post${post.id} ${classItem}`}>
      <Link href={`/posts/${post.id}`}>
        <div className="image-hand">
          <Image src={ImagePost} alt="office" />
        </div>
        <div className="content">
          <div className="author-date">{user?.name} • 1 Jan 2023</div>
          <div className="item-title">
            <h3>{post.title}</h3>
            <div className="icon">
              <FiExternalLink />
            </div>
          </div>
          <div className="category">{user?.name}</div>
          <div className="description">{post.body}</div>
          <div className="keywords">
            <p className="keywords-one">Design</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPostsItem;
