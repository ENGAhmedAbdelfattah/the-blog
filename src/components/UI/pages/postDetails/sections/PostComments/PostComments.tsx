import { getComments } from "@/api/commentsApi";
import CommentItem from "./units/CommentItem";

type props = {
  id: number;
};
async function PostComments({ id }: props) {
  let comments;
  try {
    comments = await getComments(id);
  } catch (err) {
    console.log(err);
  }
  return (
    <section className="post-comments">
      <h2 className="comments-counts">{comments?.length} Comments</h2>
      <div className="comments">
        {Array.isArray(comments) && comments.map((el) => (
          <CommentItem key={el.id} comment={el} />
        ))}
      </div>
    </section>
  );
}

export default PostComments;
