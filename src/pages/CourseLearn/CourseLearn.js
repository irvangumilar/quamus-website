import { Fragment } from 'react'
import CourseNavigation from '../../components/core/Navigation/CourseNavigation/CourseNavigation'
import CourseSidebar from './CourseSidebar'
import CourseContent from './CourseContent'
import CourseBottomBar from './CourseBottomBar'

const CourseLearn = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
  document.title = "Quamus Arabic Level Dasar - Quamus"

  return (
    <Fragment>
      <CourseNavigation />
      <CourseSidebar />
      <CourseContent />
      <CourseBottomBar />
    </Fragment>
  )
}

export default CourseLearn