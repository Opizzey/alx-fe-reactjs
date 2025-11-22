import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <>
    <Search />
    <div style={{ padding: "0", fontFamily: "sans-serif"}}>
      <h1>Github User Search</h1>
      <p>Search for Github users by their user name.</p>
    </div>
    </>
  );
}

export default App;