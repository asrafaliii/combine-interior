import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="px-12">
      <h1 className="text-4xl text-center mt-5">Our Team</h1>
      <div className="row">
        {teams.map((team) => (
          <TeamCard key={team._id} team={team}></TeamCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
