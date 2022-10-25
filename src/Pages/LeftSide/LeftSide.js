import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftSide = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h4>Courses: {courses.length}</h4>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        {course.name}
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;