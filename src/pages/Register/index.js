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

  // jika sedang login tidak bisa register
  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <main className="container">
      <HomeButton />
      <section className="row">
        <section className="col-lg-6 col-md-6 col-sm-12 mt-3 d-flex flex-column justify-content-center" tabIndex="0">
          <img className="w-100 h-100" src={RegisterBg} alt="register background" />
        </section>

        <aside className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <header className="register mt-5 mb-2" tabIndex="0">
            <h1>Daftar Akun SiGayantara</h1>
          </header>

          <section className="px-3">
            <Input label="Nama Lengkap" id="name" name="name" type="text" onChange={(ev) => setFullName(ev.target.value)} />
            <Gap height={18} />
            <Input label="Email" id="email" name="email" type="email" onChange={(ev) => setEmail(ev.target.value)} />
            <Gap height={18} />
            <Input label="Password" id="password" name="password" type="password" onChange={(ev) => setPassword(ev.target.value)} />

            <button className="btn-submit my-5" onClick={onSubmit}>Daftar</button>

            <section className="text-center mt-5" tabIndex="0">
              <p>Sudah punya akun? <a href="/login" className="py-3 fw-bold text-decoration-none text-primary">Masuk</a></p>
            </section>
          </section>
        </aside>
      </section>
    </main>
  )
}

export default Register