import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./global/layout";
import Home from "./pages/home";
import SinglePost from "./pages/single_post";
import Contact from "./pages/contact";
import Blog from './pages/blog'
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/single-post" exact element={<SinglePost />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
