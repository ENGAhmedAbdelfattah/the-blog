import Image from "next/image";
import postItemImage from "@/../public/images/pageDetails/postItem.jpg";
import { getPost } from "@/api/postsApi";
import { getUser } from "@/api/userApi";

type props = {
  id: number;
};

async function PostInfo({ id }: props) {

  let post;
  try {
    post = await getPost(id);
  } catch (err) {
    console.log(err);
  }

  let user;
  try {
    user = await getUser(post?.userId);
  } catch (err) {
    console.log(err);
  }

  return (
    <section className="post-info">
      <p className="date">Sunday , 1 Jan 2023</p>
      <h1 className="title">{post?.title}</h1>
      <div className="image-Hand">
        <Image src={postItemImage} alt="template" />
      </div>
      <p className="author">{user?.name}</p>
      <p className="content">{post?.body}</p>
    </section>
  );
}

export default PostInfo;
