import React from "react";
import TeamItem from "./TeamItem";

const TeamList = ({ users }) => {
  return (
    <ul className="divide-y w-1/2 mx-auto">
      {users.map((person) => (
        <TeamItem key={person.id} {...person} />
      ))}
    </ul>
  );
};

export default TeamList;
