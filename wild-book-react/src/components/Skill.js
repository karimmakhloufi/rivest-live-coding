const Skill = ({ title, votes }) => (
  <li>
    {title}
    <span className="votes">{votes}</span>
  </li>
);

export default Skill;
