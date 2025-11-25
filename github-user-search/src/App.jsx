import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-center font-bold text-2xl mt-6">Github User Search.</h1>
      <p className="text-center text-gray-700">Search for Github users by their user name.</p>
      <Search />
    </div>
  );
}

export default App;