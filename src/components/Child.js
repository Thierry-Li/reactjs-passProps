import React, { useState } from "react";

export const Child = props => {
  const [title, setTitle] = useState("");

  let onFormSubmit = e => {
    e.preventDefault();
    props.onFormSubmitFromChild(title);
  };

  const functionA = variable => {
    variable = "prout";
    props.propsARecevoir(variable);
  };

  return (
    <>
      <h1>Child</h1>
      <p style={{ color: "red" }}>{props.propsAPasser}</p>

      <form
        onSubmit={title => {
          onFormSubmit(title);
        }}
      >
        <label>
          Input à envoyer au Parent MainPage.js :
          <input
            type="text"
            name="name"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>

      <p>visible in Child : {title}</p>

      <p>input in Child onClick</p>
      <input
        type="submit"
        value="Envoyer"
        onClick={variable => functionA(variable)}
      />
    </>
  );
};
