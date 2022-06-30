import React, { useState } from 'react'
import { LoginBg } from '../../assets'
import { Gap, HomeButton, Input } from '../../components'
import { userLogin } from '../../utils/UserHandler'
import './login.css'

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const user = { email, password };
    userLogin(user);
  }
  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <main className="container login-content">
      <HomeButton />
      <article className="row px-3">
        <section className="col-lg-6 col-md-6 col-sm-12 mt-3 d-flex flex-column justify-content-center" tabIndex="0">
          <img className="w-100 h-100" src={ LoginBg } alt="img" />
        </section>

        <section className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center px-3" id="content">
          <h2 className="login mt-5 mb-4" tabIndex="0">Selamat Datang!</h2>

          <Input label="Email" id="email" name="email" type="email" onChange={(ev) => setEmail(ev.target.value)} />
          <Gap height={18} />
          <Input label="Password" id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />

          <button className="btn-submit my-5 mx-0 fs-7 border-0 text-white rounded-pill shadow cursor-pointer" onClick={onSubmit}>Masuk</button>

          <p className="text-center mt-5" tabIndex="0">Belum punya akun? <a href="/register" className="py-3 fw-bold text-decoration-none text-danger">Daftar</a></p>
        </section>
      </article>  
    </main>
  )
}

export default Login