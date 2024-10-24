import React from "react";

const Skills = (props) => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <h4
        style={{
          fontFamily: "Arial",
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "15px",
          color: "#808080",
        }}
      >
        {props.skill}
      </h4>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "100%",
            height: "30px",
            border: "0.5px dotted black",
            marginBottom: "10px",
            position: "absolute",
            zIndex: "9",
            backgroundColor: "#FFFFFF",
          }}
        ></div>
        <div
          style={{
            width: props.percentage,
            height: "30px",
            border: "0.5px dotted black",
            marginBottom: "10px",
            position: "absolute",
            zIndex: "10",
            backgroundColor: "#A9A9A9",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Skills;
