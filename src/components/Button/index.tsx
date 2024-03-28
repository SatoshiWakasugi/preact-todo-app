import { ComponentPropsWithRef, forwardRef } from 'react'
import './index.css'

type Props = ComponentPropsWithRef<'button'>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} type="button" {...props} class="button">
        {children}
      </button>
    )
  }
)
