import CourseItem from './CourseItem'
import classes from './Courses.module.css'

const Courses = () => {
  return (
    <section className={classes['courses']}>
      <div className='container'>
        <div className={classes['header']}>
          <h1>Kelas <span className='text-quamus'>Quamus Arabic</span></h1>
          <p>Kelas pembelajaran bahasa arab lengkap</p>
        </div>
        <div className={classes['list']}>
          <div className='row'>
            <div className={`${classes['course-item']} col-lg-4 col-md-6`}>
              <CourseItem to='/course/tes-course' />
            </div>
            <div className={`${classes['course-item']} col-lg-4 col-md-6`}>
              <CourseItem to='/course/tes-course' />
            </div>
            <div className={`${classes['course-item']} col-lg-4 col-md-6`}>
              <CourseItem to='/course/tes-course' />
            </div>
            <div className={`${classes['course-item']} col-lg-4 col-md-6`}>
              <CourseItem to='/course/tes-course' />
            </div>
            <div className={`${classes['course-item']} col-lg-4 col-md-6`}>
              <CourseItem to='/course/tes-course' />
            </div>
            <div className={`${classes['course-item']} col-lg-4 col-md-6`}>
              <CourseItem to='/course/tes-course' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses