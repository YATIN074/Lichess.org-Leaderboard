import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [data, setData] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch("https://lichess.org/api/player/top/200/blitz"); 
        const json = await res.json();
        setData(json);
        setSelectedDivision("blitz"); 
        console.log(json);
      } catch (err) {
        console.error(err);
      }
    };

    fetchLeaderboard();
  }, []);

  const divisions = ["bullet", "blitz", "rapid", "classical"];

  const handleDivisionChange = async (division) => {
    try {
      const res = await fetch(`https://lichess.org/api/player/top/200/${division}`);
      const json = await res.json();
      setData(json);
      setSelectedDivision(division);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>

      <select
        className="border p-2 mb-6"
        value={selectedDivision}
        onChange={(e) => handleDivisionChange(e.target.value)}
      >
        <option value="" disabled>
          Select Division
        </option>
        {divisions.map((div) => (
          <option key={div} value={div}>
            {div.charAt(0).toUpperCase() + div.slice(1)}
          </option>
        ))}
      </select>

      <div>
        {data?.users ? (
          <ul>
            {data.users.map((player, index) => (
              <li key={player.id} className="mb-2">
                <strong>#{index + 1}</strong> {player.username}{" "}
                {player.title ? `(${player.title})` : ""} - Rating:{" "}
                {player.perfs[selectedDivision]?.rating}
              </li>
            ))}
          </ul>
        ) : (
          <p>Select a division to view leaderboard</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
