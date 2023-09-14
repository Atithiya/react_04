import React from 'react'
import { Link } from 'react-router-dom'

function ButtonClick() {
  return (
    <div>
        <Link to={'/HomeUser'}><button className='homebutton'>User Home Sector</button></Link>
        <Link to={'/HomeAdmin'}><button className='homebutton'>Admin Home Sector</button></Link>
    </div>
  )
}

export default ButtonClick