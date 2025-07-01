import "./App.css";
import Home from "./components/Home";
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<PostsTraditional />} />
        <Route exact path="/rq-posts" element={<PostsRQ />} />
      </Routes>
    </div>
  );
}

export default App;
