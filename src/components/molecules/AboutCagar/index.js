import React from 'react'
import "./aboutCagar.css"

const AboutCagar = () => {
  return (
    <article id="about-cagar">
      <section className="container cagar-content" id="content">
        <section className="videoplay justify-content-center">
          <section className="embed-responsive embed-responsive-16by9 videoIframe">
            <iframe className="embed-responsive-item video" src="https://www.youtube-nocookie.com/embed/G7ePJRF2W38" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </section>
        </section>

        <section className="cagar-description d-flex flex-column justify-content-center"> 
          <h2 className="desc-title text-center" tabIndex="0">Cagar Budaya</h2>
          <p className="description p-3 fs-6" tabIndex="0">
            "Cagar Budaya adalah warisan budaya bersifat kebendaan berupa Benda Cagar Budaya, Bangunan Cagar Budaya, Struktur Cagar Budaya, Situs Cagar Budaya, dan Kawasan Cagar Budaya di darat dan/atau di air yang perlu dilestarikan keberadaannya karena memiliki nilai penting bagi sejarah, ilmu pengetahuan, pendidikan, agama, dan/atau kebudayaan melalui proses penetapan." <b>(UU RI No.11 Tahun 2010)</b>
          </p>
        </section>
      </section>
    </article>
  )
}

export default AboutCagar