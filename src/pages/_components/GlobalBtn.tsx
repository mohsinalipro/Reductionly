'use client'

import React from 'react'
import type { ReactNode } from 'react'

interface GlobalBtnProps {
  text: ReactNode
  icon?: ReactNode
  onClick?: () => void
  className?: string
  textClassName?: string
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const GlobalBtn: React.FC<GlobalBtnProps> = ({
  text,
  icon,
  onClick,
  className = '',
  textClassName = '',
  iconPosition = 'right',
  disabled = false,
  type = 'button',
}) => {
  const defaultBtnClass =
    'flex items-center gap-2 px-4 py-2 rounded-md transition text-white disabled:opacity-50'
  const finalBtnClass = `${defaultBtnClass} ${className}`.trim()
  const finalTextClass = `${textClassName}`.trim()

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={finalBtnClass}
    >
      {icon && iconPosition === 'left' && <div className=''>{icon}</div>}
      <div className={finalTextClass}>{text}</div>
      {icon && iconPosition === 'right' && <div className=''>{icon}</div>}
    </button>
  )
}

export default GlobalBtn
