import React from "react";
import image from "../images/WhatsApp Image 2024-10-23 at 22.53.29_e78842fc.jpg";
const Reputation = () => {
  return (
    <div style={{ marginTop: "50px", display: " flex" }}>
      <img
        className="img"
        style={{ height: "100px", width: "100px", borderRadius: "100%" }}
        src={image}
      />
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <p style={{ fontFamily: "tinos" }}>
          <spans
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Md Amjad Hossan{" "}
          </spans>{" "}
          CEO at PornHub BD -- The king of porn in Bangladesh--
        </p>
        <p style={{ fontSize: "20px" }}>
          "--Tohidul is the best Marketer I have ever seen. Requite him to get
          blust in the Sells--"
        </p>
      </div>
    </div>
  );
};
export default Reputation;
