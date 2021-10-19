import { Link } from 'react-router-dom'
import classes from './CourseAccordionButton.module.css'

const CourseAccordionButton = props => {
  const isOpen = props.isOpen

  return (
    <Link to={isOpen ? props.to : '#'} className={classes['button']}>
      <h1>{+props.index + 1}. {props.title}</h1>
      <p>{props.duration}</p>
      <i className={`${isOpen ? classes['check'] : classes['lock']} bi bi-${isOpen ? 'check-square-fill' : 'lock-fill'}`}></i>
    </Link>
  )
}

export default CourseAccordionButton