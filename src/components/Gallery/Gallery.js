import React from 'react'
import './Gallery.css'
import gallery_1 from '../../Assets/soft.jpeg'
import gallery_2 from '../../Assets/cctv.jpeg'
import gallery_3 from '../../Assets/back.jpeg'
import gallery_4 from '../../Assets/networker.jpeg'
import arrow from '../../Assets/arrow.png'

const Gallery = () => {
  return (
    <div className='photos'>
        <div className='gallery'>
            <img src={gallery_3}/>
             <img src={gallery_1}/>
              <img src={gallery_2}/>
               <img src={gallery_4}/>
        </div>
        <button className='btn dark-btn'>See More <img src={arrow} alt='Arrow'/></button>
    </div>
  )
}

export default Gallery
