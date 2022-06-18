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
  // jika sudah login tidak bisa ke halaman login lagi
  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <main className="container">
      <HomeButton />
      <article className="row">
        <figure className="col-lg-6 col-md-6 col-sm-12 mt-3 d-flex flex-column justify-content-center" tabIndex="0">
          <img className="w-100 h-100" src={LoginBg} alt="login background" />
        </figure>

        <section className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <header className="login mt-5 mb-2" tabIndex="0">
            <h1>Selamat Datang!</h1>
          </header>

          <section className="px-3" tabIndex="0">
            <Input label="Email" id="email" name="email" type="email" onChange={(ev) => setEmail(ev.target.value)} />
            <Gap height={18} />
            <Input label="Password" id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />

            <section className="my-3 text-end">
              <a className="py-3 text-decoration-none text-secondary" href="/#">Lupa Password?</a>
            </section>

            <button className="btn-submit" onClick={onSubmit}>Masuk</button>

            <section className="text-center mt-5" tabIndex="0">
              <p>Belum punya akun? <a href="/register" className="py-3 fw-bold text-decoration-none text-danger">Daftar</a></p>
            </section>
          </section>
        </section>
      </article>
    </main>
  )
}

export default Login