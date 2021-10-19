import classes from './FormError.module.css'

const FormError = props => {
  return (
    <div className={classes['form-error']}>
      <p>{props.error}</p>
    </div>
  )
}

export default FormError