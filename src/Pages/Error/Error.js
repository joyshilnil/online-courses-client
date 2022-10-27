import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <div className='text-center'>
        <h1 className='text-danger'>Ops! An Error Ocurred!</h1>
        <br />
        { error && (
          <div>
            <p className= 'text-danger'>{error.statusText || error.message}</p>
            <p>{error.status}</p>
          </div>
  )}
      </div>
    </>
  )
}

export default Error
