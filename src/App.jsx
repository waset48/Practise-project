import React from "react";
import "./appStyle.css";
import SideBar from "./sidebar";
import MainBar from "./mainbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
const App = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div>
        <SideBar />
      </div>

      <div>
        <MainBar />
      </div>
    </div>
  );
};
export default App;
