import React from 'react'
import ChildC from './childC'
const ChildB = () => {
  return (
    <div className='B'>
         childB
        <ChildC />
    </div>
  )
}
export default ChildB