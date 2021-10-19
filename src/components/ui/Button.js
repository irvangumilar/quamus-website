import classes from './Button.module.css'

const Button = (props) => {


  return (
    <button
      className={`${classes['button']} ${props.fullwidth === 1 ? classes['fullwidth'] : ''} ${props.mode ? classes[`${props.mode}Style`] : classes['normalStyle']}`}
      onClick={props.onClick}
      {...props}>{
        props.children}
    </button>
  )
}

export default Button