import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';import toast from 'react-hot-toast';

import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvide';


const Login = () => {
    const [error, setError] = useState('');
    const {signIn, setLoading} = useContext(AuthContext);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Thank you login.');
        })
        .catch(error => console.error(error));
    }




    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
          const user =  result.user;
          console.log(user);
          form.reset();
          setError('');
          if(user.emailVerified){
            navigate(from, {replace: true});            
          } 
          else{
            toast.error('Your Email Varifaction Not Allowed, Pleace verify your email');
          }
        })

        .catch(error => {
          console.error(error)
          setError(error.message);
        })
        .fanally( () => {
          setLoading(false);
        })

    }

    return (
    <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>

        <p>You have a no account pleace <Link className='text-danger' to='/register'>Register</Link></p>
        <Button onClick={handleGoogleSignIn} variant="outline-dark"> Sign In Google <FaGoogle></FaGoogle> </Button>
        <br />
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;