import React, { useState } from "react";

// Paste your JSON data here or import it
import leaderboardData from "./leaderboardData.json";

const Leaderboard = () => {
  const [category, setCategory] = useState("bullet");

  // Get top players of selected category
  const players = leaderboardData[category] || [];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>

      {/* Category Selector */}
      <div className="flex justify-center mb-6 space-x-4">
        {Object.keys(leaderboardData).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${
              category === cat
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 border"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-3xl mx-auto bg-white shadow rounded overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">Username</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Title</th>
            </tr>
          </thead>
          <tbody>
            {players
              .sort(
                (a, b) =>
                  b.perfs[category].rating - a.perfs[category].rating
              )
              .map((player, index) => (
                <tr
                  key={player.id}
                  className={index % 2 === 0 ? "bg-gray-50" : ""}
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{player.username}</td>
                  <td className="p-3">{player.perfs[category].rating}</td>
                  <td className="p-3">{player.perfs[category].progress}</td>
                  <td className="p-3">{player.title || "-"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
