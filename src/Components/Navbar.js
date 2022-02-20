import "./Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/Twidda_HomePage_Icon.png";
import Tilty from "react-tilty";

const NavBar = () => {
  return (
    <div className="container">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand as={Link} to="/home">
          <Tilty className="tilty shadow-2" scale={1.05}>
            <img className="home_icon" src={logo} alt="Twidda Icon" />
          </Tilty>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link as={NavLink} to="/home" exact="true">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/searchtweets">
                  Search Tweets
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={NavLink} to="/randomtweets">
                  Random Tweet Generator
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
