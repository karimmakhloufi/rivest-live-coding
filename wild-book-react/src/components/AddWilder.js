import React, { useState } from "react";
import axios from "axios";

const AddWilder = () => {
  const [wilderName, setWilderName] = useState("");
  const [skills, setSkills] = useState([{ id: 0, name: "JS", votes: 5 }]);
  return (
    <div>
      <label>WilderName: </label>
      <input
        value={wilderName}
        onChange={(e) => {
          setWilderName(e.target.value);
        }}
      />
      <br />
      {skills.map((skill) => (
        <React.Fragment key={skill.id}>
          <label>Skill name: </label>
          <input
            value={skill.name}
            onChange={(e) => {
              skills[skill.id].name = e.target.value;
              setSkills([...skills]);
            }}
          />
          <label>Votes: </label>
          <input
            value={skill.votes}
            onChange={(e) => {
              skills[skill.id].votes = e.target.value;
              setSkills([...skills]);
            }}
          />
          <br />
        </React.Fragment>
      ))}
      <button
        onClick={() => {
          setSkills([
            ...skills,
            { id: skills[skills.length - 1].id + 1, name: "", votes: 0 },
          ]);
        }}
      >
        Add Skill
      </button>
      <br />
      <button
        onClick={() => {
          axios.post("http://localhost:5000/api/wilders", {
            name: wilderName,
            skills: skills,
          });
        }}
      >
        Add Wilder
      </button>
    </div>
  );
};

export default AddWilder;
