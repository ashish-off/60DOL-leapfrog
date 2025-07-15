import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

//GET method
const fetchPosts = () => {
  return axios.get("http://localhost:4000/posts");
};

// POST method

const addPost = (post) => {
  return axios.post(`http://localhost:4000/posts`, post);
};

const Mutations = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const queryClient = useQueryClient()

  const { isLoading, isFetched, isError, error, data, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // enabled: false,
  });

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (newdata) => {
        // queryClient.invalidateQueries("posts"); // this will refetch the posts after mutation is successful

        queryClient.setQueryData(["posts"], (oldData) => {
            return {...oldData, data: [...oldData.data , newdata.data]};
        })
    }
  });

  // in case of multiple mutations
  //     const {mutate : addMutate} = useMutation({
  //     mutationFn: addPost
  //   })
  //     const {mutate : updateMutate} = useMutation({
  //     mutationFn: addPost
  //   })
  // while calling mutate we should call the addMutate or updateMutate function for different mutations

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };
    mutate(post);
    setTitle("");
    setBody("");
  };

  if (isLoading) {
    return <div>Page is loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="post-list">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title"
          value={title}
        />
        <input
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post body"
          value={body}
        />
        <button type="submit">Post</button>
      </form>

      {data?.data.map((post) => (
        <Link to={`/rq-posts/${post.id}`} key={post.id}>
          <div className="post-item" key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        </Link>
      ))}
      <button onClick={() => refetch()}>fetch on click</button>
    </div>
  );
};

export default Mutations;
