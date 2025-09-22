import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Chess App</h1>
      <p className="mb-4">Navigate to your Profile or Leaderboard:</p>
      <div className="flex gap-4">
        <Link className="px-4 py-2 bg-green-500 text-white rounded" to="/profile">
          Profile
        </Link>
        <Link className="px-4 py-2 bg-yellow-500 text-white rounded" to="/leaderboard">
          Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
