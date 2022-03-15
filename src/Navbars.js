import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import tradLogo from './Images/trad.png'
import { Link } from 'react-router-dom'

const Navbars = () => {
  return (
    <div>
      <Navbar bg='success' expand='sm'>
        <Container>
          <Link to='/'>
            <img src={tradLogo} alt='' />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto text-center'>
              <Nav.Link className='text-white '>
                <Link to='/instant' className='text-white text-decoration-none'>
                  InstantBuy/Sell 
                </Link>=
              </Nav.Link>
              <Nav.Link className='text-white'>
                <Link className='text-white text-decoration-none'>
                  Learn
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className='btn btn-primary px-5'>
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='' className='btn btn-outline-light px-4'>
                  Get Started
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbars