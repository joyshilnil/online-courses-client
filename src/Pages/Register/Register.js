import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvide';
import './Register.css';

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        console.log(name, email, password, photoURL);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();          
            handleUpdateUserProfile(name, photoURL);   
            handleEmailVeryfaction();
            toast.success('Register Succes. Pleace Varifaction yout email');
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        });
    }



    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
    }



    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }



    const handleEmailVeryfaction = () => {
        verifyEmail()
        .then(() => {})
        .catch(error => console.error(error))
    }





    return (
      
        <Form onSubmit={handleSubmit} className='form-cotainer shadow rounded p-4 m-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URl</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter Your PhotoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" required/>
            
        <p className='mt-4'> Already You have a account pleace <Link className='text-danger' to='/login'>Login</Link></p>

            </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                 type="checkbox" 
                 onClick={handleAccepted}
                 label={<>
                Accept <Link to='/terms'>View Terms And Condition</Link> 
                </>
                } />                
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <br />
            <Form.Text className="text-danger">
               {error}
            </Form.Text>
        </Form>


    );
};

export default Register;