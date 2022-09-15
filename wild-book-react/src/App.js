import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Wilder from "./components/Wilder";
import AddWilder from "./components/AddWilder";

function App() {
  const dataManipulation = (dataFromApi) => {
    const newData = dataFromApi.map((wilder) => {
      const cleanSkills = wilder.grades.map((grade) => {
        return { title: grade.skill.name, votes: grade.grade };
      });
      return { name: wilder.name, skills: cleanSkills };
    });
    return newData;
  };
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const wildersFromApi = await axios.get(
        "http://localhost:5000/api/wilders"
      );
      const formattedWilders = dataManipulation(wildersFromApi.data);
      setWilders(formattedWilders);
    };
    fetchData();
  }, []);
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <AddWilder />
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((el, index) => (
            <Wilder
              key={index}
              name={el.name}
              skills={el.skills}
              city={el.city}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
