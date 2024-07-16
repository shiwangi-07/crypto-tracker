import React from 'react'
import "./style.css"

const Button = ({text , onClick , outline}) => {
  return (
    <div className={ outline ? "outlined-btn" : "btn" }>{text}</div>
  )
}

export default Button