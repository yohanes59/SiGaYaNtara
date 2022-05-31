import React from 'react'
import { LogoHomepage } from '../../../assets'
import './index.css'

const Footer = () => {
  return (
    <div className="footer text-center text-lg-start">
      <div className="container d-flex justify-content-center py-5">
        <img src={LogoHomepage} alt="Logo SiGayantara" />
        <p className="text-center text-white">Sistem Informasi<br /><b>Cagar Budaya Indonesia</b></p>
      </div>
      <div className="text-center text-white p-3">
        <a> © 2022. SiGayantara, All rights reserved.</a>
      </div>
    </div>
  )
}

export default Footer