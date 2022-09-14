import blank_profile from "../assets/blank_profile.png";
import Skill from "./Skill";

const Wilder = () => (
  <article className="card">
    <img src={blank_profile} alt="Jane Doe Profile" />
    <h3>Jane Doe</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      <Skill />
      <Skill />
      <Skill />
      <Skill />
    </ul>
  </article>
);

export default Wilder;
