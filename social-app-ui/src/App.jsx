import { Routes,Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import SinglePost from "./pages/SinglePost"
function App() {
return (
<>
<nav>
  <Link to="/">Home</Link>
  {"|"}
  <Link to="/create">Craete post</Link>
</nav>

  <Routes>

    <Route
      path="/"
      element={
      <Home/>
    }
    />
    <Route
      path="/create"
      element={<CreatePost />}
    />

    <Route
      path="/post/:id"
      element={<SinglePost />}
    />

  </Routes>
</>



  );
}

export default App;