import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvide';

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
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to='/'  className='text-danger'>ONLINE COURSE</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav className='me-4'><Link className='text-dark' to='/courses'>Courses</Link></Nav>
              <Nav className='me-4'><Link  className='text-dark' to='/faq'>FAQ</Link></Nav>
              <Nav className='me-4'><Link className='text-dark' to='/blog'>Blog</Link></Nav>
              
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
                  <Image
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