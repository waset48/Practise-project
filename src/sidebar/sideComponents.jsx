import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./sideComponents.css";

const sideComponents = (props) => {
  return (
    <Navbar className="nav-design">
      <Nav navbar>
        <NavItem
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink
            href="#"
            style={{
              color: "#E0FFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginLeft: "38px",
              marginTop: "35px",
              cursor: "pointer",
              transition: "color 0.3 ease",
            }}
          >
            <i
              className={props.icon}
              style={{ fontSize: "25px", marginBottom: "5px" }}
            ></i>
            <span>{props.text}</span>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default sideComponents;
