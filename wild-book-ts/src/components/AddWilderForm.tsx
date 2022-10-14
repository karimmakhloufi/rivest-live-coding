import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_ALL_WILDERS } from "../App";

const CREATE_WILDER = gql`
  mutation CreateWilder($name: String!) {
    createWilder(name: $name) {
      name
    }
  }
`;

const AddWilderForm = () => {
  const [wilderName, setWilderName] = useState("");
  const [createWilder] = useMutation(CREATE_WILDER, {
    refetchQueries: [GET_ALL_WILDERS],
  });
  return (
    <div>
      <input
        value={wilderName}
        onChange={(e) => {
          setWilderName(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          createWilder({ variables: { name: wilderName } });
          setWilderName("");
        }}
      >
        Save Wilder
      </button>
    </div>
  );
};

export default AddWilderForm;
