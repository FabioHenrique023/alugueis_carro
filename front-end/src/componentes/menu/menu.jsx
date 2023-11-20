import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/button';

import logo from '../../Assets/logo.png'
import './menu.css'

import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
       <div className='logoDiv'>
          <img src={logo} alt='logo' className="logo"/>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-0">
            <Nav.Link as={Link} to="/" className="me-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/produtos" className="me-5">Produtos</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <Button className="login">Login</Button>
            </Nav.Link>
            <Nav.Link href="#memes">
            <Button className="registre">Registre-se</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;