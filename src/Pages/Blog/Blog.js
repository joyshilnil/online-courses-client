import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <Row> 
            <Col lg={6} className='shadow rounded p-4 m-2 w-100'>
                <h4>What is cors??</h4>
                <p>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
            </Col>
            <Col lg={6} className='shadow rounded p-4 m-2 w-100'>
                <h4>Why are you using firebase? What Other opations do you have to implement authenction?</h4>
                <p>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. 15+ Products & Solutions. Accelerate Development. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </Col>
            <Col lg={6} className='shadow rounded p-4 m-2 w-100'>
                <h4>How does the private route work?</h4>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </Col>
            <Col lg={6} className='shadow rounded p-4 m-2 w-100'>
                <h4>What is node?? How does node work?</h4>
                <p> Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </Col>
            
            </Row>
        </>
    );
};

export default Blog;