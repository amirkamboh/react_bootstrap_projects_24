import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./global/layout";
import Home from "./pages/home";
import SinglePost from "./pages/single_post";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <SinglePost />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
