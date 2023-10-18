import React from 'react'
import './Guitar.css';

export const Guitar = () => {
  return (
    <div className='container'> 
      <div className = 'group' id = 'bordergroup'>
          <div className = 'guitarborder '>
          </div>

          <div className = 'pianoborder'>

          </div>
      </div>
      <div>
        <h5>
          4.5
        </h5>
      </div>
    </div>
  )
}

export default Guitar