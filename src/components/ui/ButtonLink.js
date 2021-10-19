import { Link } from 'react-router-dom'
import classes from './ButtonLink.module.css'

const ButtonLink = (props) => {

  return (
    <Link
      className={`${classes['button']} ${props.fullwidth === 1 ? classes['fullwidth'] : ''} ${props.mode ? classes[`${props.mode}Style`] : classes['normalStyle']}`}
      onClick={props.onClick}
      {...props}>{
        props.children}
    </Link>
  )
}

export default ButtonLink