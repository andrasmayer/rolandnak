import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

export const Navbar_bs = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  sticky="top" >
      <Container>
        <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.routes.map((route, index) =>  
              route.path != "/home" && (
                <Nav.Link as={Link} key={index} to={route.path}>{route.name}</Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

