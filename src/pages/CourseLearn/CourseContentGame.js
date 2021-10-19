import classes from './CourseContentGame.module.css'
import CourseStatus from './CourseStatus'

const CourseContentGame = () => {


  return (
    <div className={classes['content-game']}>
      <iframe
        title="Game Player"
        className={classes['game-player']}
        key='https://game.quamus.id/quamus_arabic/level_1/game/index.php?media=qa2-2-1'
        src='https://game.quamus.id/quamus_arabic/level_1/game/index.php?media=qa2-2-1'
      ></iframe>
      <CourseStatus />
    </div>
  )
}

export default CourseContentGame