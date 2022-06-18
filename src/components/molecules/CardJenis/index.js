import React from 'react'
import "./cardJenis.css"

const CardJenis = ({src, alt, title, text}) => {
  return (
    <article className="card-jenis" tabIndex="0">
      <section className="card-jenis_img">
        <img src={src} className="foto" alt={alt}/>
      </section>
      <section className="cardbody">
        <h5 className="card-jenis_title">{title}</h5>
        <p className="card-jenis_text">{text}</p>
      </section>
    </article>
  )
}

export default CardJenis