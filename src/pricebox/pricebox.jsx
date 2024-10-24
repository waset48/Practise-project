import React from "react";
import "./pricebox.css";

const PriceBox = (props) => {
  return (
    <div className="price-main">
      <div className="price-header">
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          {props.level}
        </h1>
      </div>

      <div className="price-elements">Research</div>
      <div className="price-elements">Graphics Design</div>
      <div className="price-elements">Digital Marketing</div>
      <div className="price-elements">
        <span style={{ fontSize: "30px", fontWeight: "bold" }}>{props.GB}</span>
        GB Storage
      </div>
      <div className="price-elements">Mail Support</div>
      <div
        className="price-elements-pricetag"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1>{props.price}</h1>
        <div style={{ color: "#008080", letterSpacing: "1px" }}>Per month</div>
      </div>
      <div className="sign-up">
        <button className="sign-up-button">Sign Up</button>
      </div>
    </div>
  );
};
export default PriceBox;
