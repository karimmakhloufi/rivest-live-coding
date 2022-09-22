import React, { useState } from "react";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([{ id: 0, title: "JS" }]);
  return (
    <div className="App">
      {skills.map((el) => (
        <>
          <input
            value={el.title}
            onChange={(e) => {
              const newSkills = [...skills];
              newSkills[skills.findIndex((skill) => skill.id === el.id)].title =
                e.target.value;
              setSkills(newSkills);
            }}
          />
          <br />
        </>
      ))}
      <br />
      <button
        onClick={() =>
          setSkills([
            ...skills,
            { id: skills[skills.length - 1].id + 1, title: "PHP" },
          ])
        }
      >
        Add Skill
      </button>
    </div>
  );
}

export default App;
