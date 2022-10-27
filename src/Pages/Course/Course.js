import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();

    // console.log(course);
    return (
        <div className='shadow rounded p-4 w-75 m-auto'>
            <h3 className='mb-4 text-primary'>{course.name}</h3>
            <Image className='w-100' src={course.image}></Image>
            <h2 className='mt-3 mb-3'>{course.title}</h2>
            <p className='mb-5'>{course.body}</p>
            <Link className='shadow pt-3 pb-3 ps-4 pe-4' to={`/scret/courses/${course.id}`}>Check Out To premiun</Link>
        </div>
    );
};

export default Course;