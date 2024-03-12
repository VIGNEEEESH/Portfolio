import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import "../Assets/fonts.css";

const Navbar = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        style={{
          fontFamily: "Pixelify Sans",
          justifyContent: "end",
          fontSize: "20px",
          paddingRight: "150px",
        }}
      >
        <Menu.Item key="home" style={{ float: "left" }}>
          <NavLink to="/" activeClassName="active-link" exact>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="about" style={{ float: "left" }}>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item key="contact" style={{ float: "left" }}>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
