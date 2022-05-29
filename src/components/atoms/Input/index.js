import React from 'react'
import './input.css'

const   Input = ({ label, ...rest }) => {
  return (
    <div>
      <label className="label">{ label }</label>
      <input className="input" { ...rest } />
    </div>
  )
}

export default Input