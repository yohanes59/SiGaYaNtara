import React from 'react'
import "./cardJenis.css"

const CardJenis = ({src, alt, title, text}) => {
  return (
    <article className="card-jenis" tabIndex="0">
      <section className="card-jenis_img">
        <img src={src} className="foto" alt={alt}/>
      </section>
      <section className="cardbody">
        <p className="card-jenis_title fs-5">{title}</p>
        <p className="card-jenis_text">{text}</p>
      </section>
    </article>
  )
}

export default CardJenis