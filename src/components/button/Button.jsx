import React from 'react'
import b from './Button.module.scss'
const Button = ({btnType,children}) => {
  return (
   <button className={b.btn} type={btnType}>{children}</button>
  )
}

export default Button