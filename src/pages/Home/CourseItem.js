import classes from './CourseItem.module.css'

import imgCourse from '../../images/img_course.jpg'
import { Link } from 'react-router-dom'

const CourseItem = (props) => {
  return (
    <Link to={props.to} className={classes['course-item']}>
      <div className={classes['thumbnail']}>
        <img src={imgCourse} alt="Course Thumbnail" />
        <div className={classes['badge']}>
          Promo
        </div>
      </div>
      <div className={classes['description']}>
        <p><i className="bi bi-person-fill"></i> 11 Siswa</p>
        <h2>Quamus Arabic Level Dasar <br /> (New)</h2>
        <div className={classes['sale']}>
          <p>Rp. 400.000</p>
          <div className={classes['discount']}>10%</div>
        </div>
        <p className={`${classes['price']} text-quamus`}>Rp. 300.000</p>
      </div>
    </Link>
  )
}

export default CourseItem