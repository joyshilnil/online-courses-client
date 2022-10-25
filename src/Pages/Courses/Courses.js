import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='9'>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;