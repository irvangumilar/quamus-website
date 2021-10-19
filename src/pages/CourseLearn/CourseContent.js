import classes from './CourseContent.module.css'
import CourseContentGame from './CourseContentGame'
import CourseContentVideo from './CourseContentVideo'
import CourseTab from './CourseTab'

const CourseContent = () => {
  const type = 'game'

  return (
    <div className={classes['content']}>
      <div className={classes['content-wrapper']}>
        <CourseTab />
        {type === 'video' && <CourseContentVideo />}
        {type === 'game' && <CourseContentGame />}
      </div>
    </div>
  )
}

export default CourseContent