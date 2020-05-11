import React, { useState } from "react";

export const ChildTwo = props => {
  const [number, setNumber] = useState(0);

  const handleChange = e => {
    setNumber(e);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.nomDeProps(number);
  };

  return (
    <>
      <h1>ChildTwo</h1>
      <form
        onSubmit={number => {
          handleSubmit(number);
        }}
      >
        <label>
          <input
            type="text"
            name="name"
            value={number}
            onChange={num => handleChange(num.target.value)}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      <p>visible in ChildTwo : {number}</p>
    </>
  );
};
