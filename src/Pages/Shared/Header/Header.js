import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvide';
import Logo from '../../../assets/logo.png';
import './Header.css';

const Header = () => {


  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then( () => {
      toast.success('Logout Succesfull');
    })
    .catch(error => console.error(error))
  }



    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to='/'  className='text-danger'>ONLINE COURSE</Link>
            <Image
            style={{height: '40px'}}
              src={Logo}
            >              
            </Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav className='me-4'><Link className='text-dark' to='/courses'>Courses</Link></Nav>
              <Nav className='me-4'><Link  className='text-dark' to='/faq'>FAQ</Link></Nav>
              <Nav className='me-4'><Link className='text-dark' to='/blog'>Blog</Link></Nav>
              <Nav>
              <div className="toggle-button-cover">
      <div className="button-cover">
        <div className="button r" id="button-1">
          <input type="checkbox" className="checkbox" />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </div>
              </Nav>
              
            <Nav>
              <Nav>
                {
                  user?.uid ?
                  <>                  
                    <span>{user?.displayName}</span>
                    <button onClick={handleLogOut} className='btn btn-primary ms-3 me-3'>Log Out</button>
                  </>
                  :
                  <>
                  
                    <Link  className='me-2 text-dark' to='/login'>Login</Link>
                
                  </>
                }
                </Nav>
              <Nav>
                {
                  user?.photoURL ?
                  <Image title={user?.displayName}
                  style={{height: '30px'}}
                  
                    roundedCircle
                    src={user?.photoURL}
                  >
                  </Image>
                  :
                  <FaUser></FaUser>
                }
              </Nav>
            </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;