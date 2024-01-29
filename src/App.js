import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "./global/layout";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
