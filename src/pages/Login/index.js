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
    <div className="container">
      <HomeButton />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 mt-3 d-flex flex-column justify-content-center">
          <img className="w-100 h-100" src={ LoginBg } alt="img" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center">
          <div className="login mt-5 mb-2">
            <h1>Selamat Datang!</h1>
          </div>
            <div className="px-3">
              <Input label="Email" id="email" name="email" type="email" onChange={(ev) => setEmail(ev.target.value)} />
              <Gap height={18} />
              <Input label="Password" id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                
              <div className="my-3 text-end">
                <a className="py-3 text-decoration-none text-secondary" href="/#">Lupa Password?</a>
              </div>

              <div>
                <button className="btn-submit" onClick={onSubmit} >Masuk</button>
              </div>

              <div className="text-center mt-5">
                <p>Belum punya akun? <a href="/register" className="py-3 fw-bold text-decoration-none text-danger">Daftar</a></p>
              </div>
            </div>
        </div>
      </div>  
    </div>
  )
}

export default Login