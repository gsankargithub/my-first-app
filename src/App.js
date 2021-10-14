import React from "react";

import { Helmet } from "react-helmet";

import { Nav, Navbar, Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>My app | Sankar</title>
        </Helmet>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Nav.Link href="#register">Register</Nav.Link>

              <Nav.Link href="#features">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <h2>Home Page</h2>
      </div>
    );
  }
}

export default App;
