import React from "react";
import SideComponents from "./sideComponents";
const SideBar = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "150px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
      }}
    >
      <SideComponents icon="fa fa-home" text="Home" />
      <SideComponents icon="fa-regular fa-user" text="About" />
      <SideComponents icon="fa-regular fa-image" text="Photos" />
      <SideComponents icon="fa-regular fa-envelope" text="Contact" />
    </div>
  );
};
export default SideBar;
