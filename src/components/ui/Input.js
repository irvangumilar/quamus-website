import { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <div className={classes['input-group']}>
      <span className={classes['icon']}><i className={`bi bi-${props.icon}`}></i></span>
      <input ref={ref} className={classes['input']} {...props} />
    </div>
  )
})

export default Input