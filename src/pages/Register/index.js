import React, { useState } from 'react'
import { RegisterBg } from '../../assets'
import { Gap, HomeButton, Input } from '../../components'
import { userRegister } from '../../utils/UserHandler'
import './register.css'

const Register = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const user = { fullName, email, password };
    userRegister(user);
  }

  if (props.user) {
    return window.location.href = '/';
  }
  return (
    <div className="container">
      <HomeButton />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-3 d-flex flex-column justify-content-center">
          <img className="w-100 h-100" src={ RegisterBg } alt="img" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <div className="register mt-5 mb-2">
            <h1>Daftar Akun SiGayantara</h1>
          </div>

          <div className="px-3">
            <Input label="Nama Lengkap" id="name" name="name" type="text" onChange={(ev) => setFullName(ev.target.value)} />
            <Gap height={18} />
            <Input label="Email" id="email" name="email" type="email" onChange={(ev) => setEmail(ev.target.value)} />
            <Gap height={18} />
            <Input label="Password" id="password" name="password" type="password" onChange={(ev) => setPassword(ev.target.value)} />

            <div className="my-5">
              <button className="btn-submit" onClick={onSubmit}>Daftar</button>
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