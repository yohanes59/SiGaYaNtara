import React from 'react'
import './input.css'

const Input = ({ label, ...rest }) => {
  return (
    <>
      <label className="label" tabIndex="0">{ label }</label>
      <input className="input" tabIndex="0" { ...rest } />
    </>
  )
}

export default Input