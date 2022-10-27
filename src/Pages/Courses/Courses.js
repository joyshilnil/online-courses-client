import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css'
const Courses = () => {

    const courses = useLoaderData();


    return (
        <>
            <div className="main-container">

                <div className="left-side shadow p-4 rounded">
                    <h3>All Courses {courses.length}</h3>

                        {
                            courses.map(course => <p key={course.id} className='p-3 shadow text-primary bolder mt-3 rounded'>
                                <p className='mb-0'>{course.name}</p>
                            </p>)
                        }
                </div>



                <div className="right-side">

                        {
                            courses.map(course => <div key={course.id} className='courses-container p-3 shadow text-primary bolder rounded'>
                                <Image src={course.image}></Image>
                                <h4>{course.title}</h4>
                                <p>{course.body}</p>
                                <Link to={`/courses/${course.id}`} className='details-btn'>View Details</Link>
                            </div>
                            
                            )
                        }


                </div>



            </div>
        </>
    );
};

export default Courses;