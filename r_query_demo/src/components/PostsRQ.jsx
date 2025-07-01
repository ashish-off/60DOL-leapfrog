import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const PostsRQ = () => {
  const { isLoading, isFetched, isError, error, data, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
    // staleTime: 1000 * 10, // 10 seconds
    // refetchInterval: 1000,
    // refetchIntervalInBackground : true,

    enabled: false, // This will disable the query from running automatically
  });

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  console.log({ isLoading, isFetched });

  return (
    <div className="post-list">
      <button onClick={() => refetch()}>fetch on click</button>
      {data?.data.map((post) => (
        <Link to={`/rq-posts/${post.id}`} key={post.id}>
          <div className="post-item" key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostsRQ;
//  end point of api is /posts so queryKey = ['posts']
// if /posts/:id then queryKey = ['posts', id]
// if /posts/:id/comment then queryKey = ['posts', id, 'comments']
// queryFn is a function that returns a promise
// staleTime is the time for which the data is considered fresh (no refetching)
// refetchInterval is the time interval for refetching the data (stops when the component unmounts)
// refetchIntervalInBackground is used to refetch the data in the background even when the component is not visible
// enabled is used to disable the query from running automatically (true by default)
// refetch is a function that can be called to refetch the data manually
