import React from 'react';
import './about.css';

const About = () => {
  return (
    <article className="container about-content" id="content">
      <h2 className="about-title text-center" tabIndex="0">Tentang</h2>
      <section className="about my-4" tabIndex="0">
        <p className="sigayantara text-center text-decoration-none">SiGayantara</p>
        <p>SiGayantara (Sistem Informasi Cagar Budaya Nusantara) merupakan situs informasi mengenai cagar budaya yang terdapat di Nusantara.
          Website ini memberikan kemudahan bagi generasi milenial dan masyarakat untuk memperoleh informasi seputar cagar budaya serta melestarikan warisan budaya di Nusantara.</p>  
        <br></br>
        <p className="sigayantara text-center text-decoration-none">Kenapa SiGayantara?</p>
        <p>Karena website ini dirancang dengan sistem <i>CRUD (Create, Read, Update, Delete)</i> yang di mana semua pengguna dapat membaca semua informasi cagar budaya yang ada di dalam website tanpa harus melakukan registrasi maupun masuk terlebih dahulu.
          Sedangkan membuat, memperbarui, serta menghapus informasi cagar budaya yang ada di dalam website hanya dapat diakses setelah pengguna melakukan registrasi dan masuk.</p>
      </section>
    </article>
  )
}

export default About;