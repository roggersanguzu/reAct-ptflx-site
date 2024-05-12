import React from 'react'
import './Program.css'
import Program1 from '../../Assets/boldhead.jpeg'
import Program2 from '../../Assets/web.jpeg'
import Program3 from '../../Assets/security.jpeg'
import Icon from '../../Assets/grad.jpeg'

const Program = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={Program1} alt=''/>
            <div className='caption'>
              <img src={Icon}/>
              <p>Computer Networking</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program2} alt=''/>
            <div className='caption'>
              <img src={Icon}/>
              <p>Web Development</p>
            </div>
        </div>
        <div className='program'>
            <img src={Program3} alt=''/>
            <div className='caption'>
              <img src={Icon}/>
              <p>Cloud Computing</p>
            </div>
        </div>
    </div>
  )
}

export default Program
