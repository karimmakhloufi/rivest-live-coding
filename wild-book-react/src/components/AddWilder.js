import { useState } from "react";
import axios from "axios";

const AddWilder = () => {
  const [wilderName, setWilderName] = useState("");
  return (
    <div>
      <input
        value={wilderName}
        onChange={(e) => {
          setWilderName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          axios.post("http://localhost:5000/api/wilders", { name: wilderName });
        }}
      >
        Add Wilder
      </button>
    </div>
  );
};

export default AddWilder;
