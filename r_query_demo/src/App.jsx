import "./App.css";
import Home from "./components/Home";
import PaginatedQueries from "./components/PaginatedQueries";
import PostDetailsRQ from "./components/PostDetailsRQ";
import PostsTraditional from "./components/PostTraditional";
import PostsRQ from "./components/PostsRQ";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Traditional Posts</Link>
          </li>
          <li>
            <Link to="/rq-posts">RQ Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsTraditional />} />
        <Route path="/rq-posts" element={<PostsRQ />} />
        <Route path="/rq-posts/:postId" element={<PostDetailsRQ />} />
        <Route path="/paginated-fruits" element={<PaginatedQueries />} />
      </Routes>
    </div>
  );
}

export default App;
