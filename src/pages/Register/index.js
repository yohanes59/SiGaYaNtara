import React from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Input } from '../../components'
import './register.css'

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-3 d-flex flex-column justify-content-center">
          <img className="w-100 h-100" src={ RegisterBg } alt="img" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <div className="register mt-5 mb-2">
            <h1>Daftar Akun SiGayantara</h1>
          </div>

          <div className="px-3">
            <Input label="Nama Lengkap" for="name" id="name" name="name" type="text"/>
            <Gap height={18} />
            <Input label="Email" for="email" id="email" name="email" type="email"/>
            <Gap height={18} />
            <Input label="Password" for="password" id="password" name="password" type="password"/>

            <div className="my-5">
              <button className="btn-submit" type="submit">Daftar</button>
            </div>

            <div className="text-center mt-5">
              <p>Sudah punya akun? <a href="/login" className="py-3 fw-bold text-decoration-none text-primary">Masuk</a></p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Register