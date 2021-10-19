import classes from './CourseDescription.module.css'

import { Fragment } from 'react'
import MainNavigation from '../../components/core/Navigation/MainNavigation/MainNavigation'
import MainFooter from '../../components/core/Footer/MainFooter/MainFooter'
import { useParams } from 'react-router'
import CourseHeader from './CourseHeader'
import CourseGoal from './CourseGoal'
import CourseContent from './CourseContent'
import CourseSale from './CourseSale'
import CourseHeaderMobile from './CourseHeaderMobile'

const CourseDescription = () => {
  const params = useParams()

  const pageTitle = params.courseSlug
  document.title = `${pageTitle}  - Quamus`

  return (
    <Fragment>
      <MainNavigation />
      <div className='d-none d-lg-block'>
        <CourseHeader />
        <div className='container'>
          <div className='row'>
            <div className={`${classes['left-side']} col-lg-8`}>
              <CourseGoal />
              <CourseContent />
            </div>
            <div className={`${classes['right-side']} col-lg-4`}>
              <CourseSale />
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes['mobile']} d-lg-none`}>
        <CourseHeaderMobile />
        <div className={classes['wrapper']}>
          <CourseGoal />
          <CourseContent />
        </div>
      </div>
      <MainFooter />
    </Fragment>
  )
}

export default CourseDescription