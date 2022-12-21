import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-page">
                    <Row>
                        <Col lg='12' className='text-center'>
                          <div className="ax-home-details text-center">
                            <div className="ax-home-title">
                              <h1>Let’s Started</h1>
                            </div>
                            <div className="ax-home-dres">
                              <p>Learning Skills & Upgrade Your Life</p>
                            </div>

                            <div className="ax-home-btn">
                              <Link to='/courses' className="ax-home-first-btn">Our Courses</Link>
                            </div>
                          </div>
                        </Col>
                    </Row>
            </div>
        </div>
    );
};

export default Home;