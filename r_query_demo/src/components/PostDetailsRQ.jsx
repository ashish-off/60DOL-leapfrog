import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PostDetailsRQ = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  console.log("postId", postId);

  const fetchPost = async (postId) => {
    return await axios.get(`http://localhost:4000/posts/${postId}`);
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(postId),
  });

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const handleGoback = () => {
    navigate(-1);
  };
  const { title, body } = data.data;

  return (
    <div>
      <div className="post-details-container">
        <div className="post-details-title">{title}</div>
        <div className="post-details-body">{body}</div>
      </div>
      <button onClick={handleGoback}>go back</button>
    </div>
  );
};

export default PostDetailsRQ;
