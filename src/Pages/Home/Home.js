import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container shadow rounded'>
            <div className="home-page">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                          <div className="ax-home-details text-center">
                            <div className="ax-home-subtitle">
                              <p>Welcome To Our Agency</p>
                            </div>
                            <div className="ax-home-title">
                              <h1>Introduce Our <br/>
                               Creative Agency.</h1>
                            </div>
                            <div className="ax-home-dres">
                              <p>Consectetur adipisicing elit. Architecto Forem  sit amet! <br/> Lorem ipsum dolor sit amet adipisicing elit.</p>
                            </div>
                            <div className="ax-home-btn">
                              <Link to='/courses' className="ax-home-first-btn">Our Courses</Link>
                            </div>
                          </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;