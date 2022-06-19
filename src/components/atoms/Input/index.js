import React from 'react'
import './input.css'

const   Input = ({ label, ...rest }) => {
  return (
    <>
      <label className="label">{ label }</label>
      <input className="input" { ...rest } />
    </>
  )
}

export default Input