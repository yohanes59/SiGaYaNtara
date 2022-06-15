import React from 'react'
import "./aboutCagar.css"

const AboutCagar = () => {
  return (
    <div className="container cagar-content" id="about-cagar">
      <section className="videoplay">
        <div className="embed-responsive embed-responsive-16by9 videoIframe">
          <iframe className="embed-responsive-item video" src="https://www.youtube-nocookie.com/embed/G7ePJRF2W38" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      <section className="cagar-description"> 
        <h2 className="desc-title" tabIndex="0">Cagar Budaya</h2>
        <p className="description" tabIndex="0">
          "Cagar Budaya adalah warisan budaya bersifat kebendaan berupa Benda Cagar Budaya, Bangunan Cagar Budaya, Struktur Cagar Budaya, Situs Cagar Budaya, dan Kawasan Cagar Budaya di darat dan/atau di air yang perlu dilestarikan keberadaannya karena memiliki nilai penting bagi sejarah, ilmu pengetahuan, pendidikan, agama, dan/atau kebudayaan melalui proses penetapan." <b>(UU RI No.11 Tahun 2010)</b>
        </p>
      </section>
    </div>
  )
}

export default AboutCagar