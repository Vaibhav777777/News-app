import React from 'react'
import loading from './loading-gif.gif'
const Spinner = () => {
  return (
    <div className="text-center">
      <img className='my-3' src={loading} alt='loading' style={{ width: "2rem", height: "2rem" }}></img>
    </div>
  )
}
export default Spinner