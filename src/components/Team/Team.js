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
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="row">
        {teams.map((team) => (
          <TeamCard key={team._id} team={team}></TeamCard>
        ))}
      </div>
    </div>
  );
};

export default Team;
