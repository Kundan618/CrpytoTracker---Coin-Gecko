import React from 'react'

const CustomErrorboundaryUI = ({error,  resetErrorBoundary}) => {
  return (
    <div role='alert' className='alert alert-error'>
      <p>Something went wrong:</p>
      <p>{error?.message}</p>
      <button onClick={resetErrorBoundary} className="btn btn-sm btn-primary mt-2">Reset</button>
    </div>
  )
}

export default CustomErrorboundaryUI
