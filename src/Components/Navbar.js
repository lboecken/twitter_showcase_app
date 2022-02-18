import React, { useState } from "react";
import "../App.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const [active, setActive] = useState("default");

  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand href="#home">Twidda</Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              activeKey={active}
              onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="default" className="linkText">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="search">Search Tweets</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="random">Random Tweet Generator</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
