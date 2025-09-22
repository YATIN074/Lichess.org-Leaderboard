import React, { useEffect, useState } from "react";

const divisions = ["Division A", "Division B", "Division C"];

const Leaderboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Replace this with your API call if available
        const res = await fetch(`https://lichess.org/api/player`);
        const json = await res.json();

        // Random mock data for 3 divisions
        divisions.forEach((div) => {
          json[div] = Array.from({ length: 5 }, (_, i) => ({
            id: i,
            name: `Player ${i + 1}`,
            rating: Math.floor(Math.random() * 3000),
          }));
        });

        setData(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      {divisions.map((division) => (
        <div key={division} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{division}</h2>
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 px-4 py-2">Rank</th>
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Rating</th>
              </tr>
            </thead>
            <tbody>
              {data[division]?.sort((a, b) => b.rating - a.rating).map((player, index) => (
                <tr key={player.id}>
                  <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-400 px-4 py-2">{player.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{player.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
