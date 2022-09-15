import { useState } from "react";
import axios from "axios";

const AddWilder = () => {
  const [wilderName, setWilderName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/wilders", { name: wilderName });
      }}
    >
      <input
        value={wilderName}
        onChange={(e) => {
          setWilderName(e.target.value);
        }}
      />
      <button>Add Wilder</button>
    </form>
  );
};

export default AddWilder;
