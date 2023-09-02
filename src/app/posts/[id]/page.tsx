import PostASide from "@/components/UI/pages/postDetails/sections/PostASide/PostASide";
import PostComments from "@/components/UI/pages/postDetails/sections/PostComments/PostComments";
import PostInfo from "@/components/UI/pages/postDetails/sections/PostInfo/PostInfo";
import PostStories from "@/components/UI/pages/postDetails/sections/PostStories/PostStories";

type params = {
    id: number;
};

type props = {
  params: params;
};

function PostDetails({ params }: props) {
  const {id} = params
  return (
    <main>
      <div className="container">
        <div className="post-details-top">
          <PostASide />
          <PostInfo id={id}/>
        </div>
        <div className="post-details-bottom">
          <PostComments id={id} />
          {/* <PostStories /> */}
        </div>
      </div>
    </main>
  )
}

export default PostDetails;