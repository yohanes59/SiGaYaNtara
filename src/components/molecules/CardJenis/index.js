import React from 'react'
import "./cardJenis.css"

const CardJenis = ({src, alt, title, text}) => {
  return (
    <article className="card-jenis" tabIndex="0">
      <div className="card-jenis_img">
        <img src={src} className="foto" alt={alt}/>
      </div>
        <div class="cardbody">
          <h5 class="card-jenis_title">{title}</h5>
          <p class="card-jenis_text">{text}</p>
        </div>
    </article>
  )
}

export default CardJenis