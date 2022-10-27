import React from 'react';
import { useLoaderData } from 'react-router-dom';
const ScretPage = () => {

    const secret = useLoaderData();

    console.log(secret);
    return (
        <div className='shadow rounded p-4 w-75 m-auto'>
            <h3 className='mb-4 text-primary'>{secret.name}</h3>
            <h2 className='mt-3 mb-3'>{secret.title}</h2>
            <p>{secret.body}</p>
        </div>
    );
};

export default ScretPage;