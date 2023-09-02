import type { Comments } from "@/types/comments";

type props = {
  comment: Comments;
};

function CommentItem({ comment }: props) {
  return (
    <>
      <div className="item-comment">
        <div className="item-comment-left">{comment.name.slice(0, 2).toUpperCase()}</div>
        <div className="item-comment-right">
          <div className="item-comment-top">
            <div className="item-comment-author">{comment.name}</div>
            <div className="item-comment-email">{comment.email}</div>
          </div>
          <div className="item-comment-bottom">{comment.body}</div>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
