import React from 'react'
import './Gallery.css'
import gallerydata from './galleryData'
const Gallery = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary p-4">GALLERY</h1>
      <div className="grid-wrapper">
        {
          gallerydata.length > 0 ? gallerydata.map((item, index) => {
            return (
              <div className="img-box" key={index}>
                <img src={item.img} alt={item.alt} />
              </div>
            )
          }) : null
        }
      </div>
    </div>
  )
}

export default Gallery
