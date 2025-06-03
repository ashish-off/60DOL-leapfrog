import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createPost,
  deletePost,
  fetchPost,
  updatePost,
} from "../features/postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [editingPost, setEditingPost] = useState(null);
  const [title, setTitle] = useState("");
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  const handleEdit = (post) => {
    setEditingPost(post);
    setTitle(post.title);
  };

  const haldleUpdate = () => {
    const updatedData = { ...editingPost, title };
    dispatch(updatePost({ id: editingPost.id, updatedData }));
    setEditingPost(null);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const handleCreatePost = () => {
    if (newPost.trim()) {
      dispatch(createPost({ title: newPost }));
      setNewPost("");
    }
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) {
    return <p>{typeof error === "string" ? error : JSON.stringify(error)}</p>; // error maybe an object which is not allowed in JSX
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold">Posts :</h1>
      <div>
        <label>Add Post : </label>
        <input
          type="text"
          value={newPost}
          placeholder="Enter post title"
          onChange={(e) => setNewPost(e.target.value)}
          className="border-2 border-gray-400 rounded-lg p-1"
        />
        <button
          className="bg-white rounded-lg p-1 hover:bg-gray-300 active:bg-white"
          onClick={handleCreatePost}
        >
          Add
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 ">
        {posts.slice(0, 15).map((post) => (
          <div
            className="bg-gray-200 border-2 border-gray-300 shadow-lg"
            key={post.id}
          >
            {editingPost?.id == post.id ? (
              <div className="flex flex-col justify-center gap-2 p-2">
                <input
                  type="text"
                  value={title}
                  placeholder="edit the title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-2 border-gray-400 rounded-lg p-1"
                />
                <button
                  className="bg-white rounded-lg p-1 hover:bg-gray-300 active:bg-white"
                  onClick={() => haldleUpdate()}
                >
                  Save edit
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center gap-2 p-2">
                <h2>{post.title}</h2>
                {post.id <= 100 && (
                  <button
                    className="bg-white rounded-lg p-1 hover:bg-gray-300 active:bg-white"
                    onClick={() => handleEdit(post)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="bg-white rounded-lg p-1 hover:bg-gray-300 active:bg-white"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;