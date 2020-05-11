import React, { useState } from "react";
import { Child } from "../components/Child";
import { ChildTwo } from "../components/ChildTwo";

export const MainPage = () => {
  const [counter, setCounter] = useState(0);
  const [titleFromChild, setTitleFromChild] = useState("");
  const [numberFromChild, setNumberFromChild] = useState(0);
  const [variableFromChild, setVariableFromChild] = useState("");

  const handleFormSubmit = title => {
    setTitleFromChild(title);
  };

  const showTitle = titleFromChild === "" ? "vide" : titleFromChild;

  const handleNumber = number => {
    setNumberFromChild(number);
  };

  const functionGereLePropsRecu = variable => {
    setVariableFromChild(variable);
  };

  return (
    <div>
      <h1>MainPage Parent</h1>
      <ChildTwo nomDeProps={number => handleNumber(number)} />
      <h2>Mon code</h2>
      <p>number from childTwo : {numberFromChild}</p>
      <button
        title={"counter"}
        style={{
          height: 20,
          backgroundColor: "blue",
          color: "red",
          width: 80
        }}
        onClick={() => setCounter(counter + 1)}
      >
        button +
      </button>

      <button
        style={{
          height: 20,
          backgroundColor: "orange",
          color: "blue",
          width: 80
        }}
        onClick={() => setCounter(counter - 1)}
      >
        button -
      </button>
      <h1
        style={{
          borderBottom: "dotted red",
          width: 330,
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        {counter}
      </h1>

      <p>console log {titleFromChild}</p>
      <button
        style={{
          height: 20,
          backgroundColor: "yellow",
          color: "black",
          width: "100%"
        }}
        onClick={() => setTitleFromChild("j'arrive")}
      >
        setTitleFromChild
      </button>
      <h3
        style={{
          borderBottom: "double blue",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        title from child : {showTitle}
      </h3>

      <Child
        propsAPasser={counter}
        onFormSubmitFromChild={title => handleFormSubmit(title)}
        propsARecevoir={variable => functionGereLePropsRecu(variable)}
      />
      <p>{variableFromChild}</p>
    </div>
  );
};
