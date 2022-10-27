import React, { useRef } from 'react';
import { Image } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import { Link, useLoaderData } from 'react-router-dom';
import './Course.css'

const Course = () => {
    const course = useLoaderData();
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
         content: () => componentRef.current,
          documentTitle: 'emp-data',
    onAfterPrint: () => alert('Print success')
    });
    // console.log(course);
    return (
        <div className='shadow rounded p-4 w-75 m-auto' ref={componentRef} style={{width: '100%', height: '100%'}}>
            <h3 className='mb-4 text-primary'>{course.name}</h3>
            <Image className='w-100' src={course.image}></Image>
            <h2 className='mt-3 mb-3'>{course.title}</h2>
            <p className='mb-5'>{course.body}</p>
            <div className='button-all'>                
                <Link className='shadow pt-3 pb-3 ps-4 pe-4' to={`/scret/courses/${course.id}`}>Check Out To premiun</Link>
                <Link className='shadow pt-3 pb-3 ps-4 pe-4' onClick={handlePrint}>Print this out</Link>
            </div>

        </div>
    );
};

export default Course;