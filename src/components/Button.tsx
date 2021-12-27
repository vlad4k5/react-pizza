import classnames from 'classnames'
import React, { FC } from 'react'

type ButtonPropsType = {
  onClick?: () => void
  className?: string
  outline?: boolean
  children: React.ReactChild | React.ReactNode
}

const Button: FC<ButtonPropsType> = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classnames('button', className, { 'button--outline': outline })}
    >
      {children}
    </button>
  )
}
export default Button
