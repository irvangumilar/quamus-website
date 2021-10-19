import { Link } from 'react-router-dom'
import classes from './CourseTab.module.css'

const CourseTab = () => {
  return (
    <div className={classes['tab-group']}>
      <Link className={classes['tab-item']} to='/'>
        <div className={classes['icon']}><i className="bi bi-camera-reels-fill"></i></div>
        <i className={`${classes['check']} bi bi-check-circle`}></i>
      </Link>
      <Link className={classes['tab-item']} to='/'>
        <div className={classes['icon']}><i className="bi bi-controller"></i></div>
        <i className={`${classes['check']} bi bi-check-circle`}></i>
      </Link>
      <Link className={classes['tab-item']} to='/'>
        <div className={classes['icon']}><i className="bi bi-list-check"></i></div>
        <i className={`${classes['check']} bi bi-check-circle`}></i>
      </Link>
    </div>
  )
}

export default CourseTab