import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Nav } from "react-bootstrap";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    // <Menu pointing secondary size="massive" color="teal">
    //   <Menu.Item
    //     name="home"
    //     active={activeItem === 'home'}
    //     onClick={handleItemClick}
    //     as={Link}
    //     to="/"
    //   />

    //   <Menu.Menu position="right">
    //     <Menu.Item
    //       name="login"
    //       active={activeItem === 'login'}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/login"
    //     />
    //     <Menu.Item
    //       name="register"
    //       active={activeItem === 'register'}
    //       onClick={handleItemClick}
    //       as={Link}
    //       to="/register"
    //     />
    //   </Menu.Menu>
    // </Menu>
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            smooth
            to="/"
            activeClassName="selected"
            style={{ color: "black", marginRight: "10px" }}
          >
            Home
          </NavLink>
          {/* <Link to="/virtual">testing</Link> */}
          <NavLink
            smooth
            to="/login"
            activeClassName="selected"
            style={{ color: "black", marginRight: "10px" }}
          >
            login
          </NavLink>
          <NavLink
            smooth
            to="/register"
            activeClassName="selected"
            style={{ color: "black", marginRight: "10px" }}
          >
            register
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
