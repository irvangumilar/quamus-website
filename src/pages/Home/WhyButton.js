import classes from './WhyButton.module.css'

const WhyButton = props => {
  return (
    <div className={`${classes['why-button']} bg-quamus`}>
      <p>{props.description}</p>
      <button onClick={props.onClick} className={classes['button']}><i className="bi bi-play-circle"></i></button>
    </div>
  )
}

export default WhyButton