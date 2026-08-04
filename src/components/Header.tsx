import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import whiteLogo from '../assets/images/brand/white-logo.png'

export default function Header() {
  return (
    <header>
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center gap-2">
          {/*
            LOGO: coloca tu archivo de logo en /src/assets/images/logo.png
            y descomenta la línea de abajo (borra el div placeholder).
          */}
          {/* <img src="/src/assets/images/logo.png" alt={siteConfig.nombreComunidad} height={40} /> */}
          <a href="/" className='logo'>
            <img src={whiteLogo} alt="Liga Nexus's logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-md-2">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              Quiénes somos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}
