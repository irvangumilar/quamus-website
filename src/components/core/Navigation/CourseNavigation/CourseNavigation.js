import { Link } from 'react-router-dom'
import classes from './CourseNavigation.module.css'

import img from '../../../../images/quamus_logo.png'
import img_mobile from '../../../../images/logo_only.png'

const CourseNavigation = () => {
  return (
    <nav className={classes['nav']}>
      <div className={`${classes['nav-wrapper']} container-fluid`}>
        <Link className={classes['btn-brand']} to='/'><img src={img} alt="Quamus Logo" /></Link>
        <Link className={classes['btn-brand-mobile']} to='/'><img src={img_mobile} alt="Quamus Logo" /></Link>
        <div className={classes['divider']}></div>
        <Link className={classes['btn-title']} to='/'>Quamus Arabic Level Dasar</Link>
      </div>
    </nav>
  )
}

export default CourseNavigation