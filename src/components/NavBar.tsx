import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar className="fixed-top" bg="light" expand="md">
            <Container>
                <Link to="/" className="no-underline">
                    <Navbar.Brand className="d-flex align-items-center fs-4">
                        <img
                            alt=""
                            src="../../public/logo.png"
                            width="50"
                            height="70"
                            className="d-inline-block align-top"
                        />
                        &nbsp;Blood<span className="text-danger">4</span>you
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="align-items-center">
                        <Link className="nav-link" to="/">HOME</Link>
                        <NavDropdown title="BLOOD BANK" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to="/find-blood-bank">Find Blood Bank</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/register-blood-bank">Register</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/login-blood-bank">Login</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Link className="nav-link" to="/be-a-donor">BE A DONOR</Link>
                        <Link className="nav-link" to="/find-donor">FIND DONOR</Link>
                        <Link className="nav-link" to="/about-us">ABOUT US</Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="danger" className="mr-5 btn-center">DONATE US</Button>
            </Container>
        </Navbar>
    );
}

export default NavBar;
