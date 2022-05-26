import React from 'react'
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { LoginBg } from '../../assets'
import './login.css'

const Login = () => {
  return (
    <>
      <Container>
        <Row className="m-3">
          <Col lg={6} md={6} sm={12} className="mt-3">
            <img className="w-100 mt-5" src={ LoginBg } alt="img" />
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="login mt-5 mb-4 px-3">
              <h1>Selamat Datang!</h1>
            </div>
            <Form className='px-3'> 
              <FormGroup>
                  <Label for="email">Email</Label>
                  <Input id="email" name="email" type="text" placeholder="Masukkan Email Anda" />
                </FormGroup>

                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Masukkan Password Anda" />
                </FormGroup>

                <div className="my-4 text-end">
                  <a className="py-3 text-decoration-none text-secondary" href="/#">Lupa Password?</a>
                </div>

                <div>
                  <button className="btn-submit" type="submit">Masuk</button>
                </div>

                <div className="text-center mt-5">
                  <p>Belum punya akun? <a href="/register" className="py-3 fw-bold text-decoration-none text-danger">Daftar</a></p>
                </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login 
