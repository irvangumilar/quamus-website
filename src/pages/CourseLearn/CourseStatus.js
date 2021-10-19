import classes from './CourseStatus.module.css'

const CourseStatus = () => {
  return (
    <div className={classes['course-status']}>
      <p>Klik tombol berikut untuk menandai bagian ini sudah selesai dipelajari  </p>
      <button><i className="bi bi-check-circle"></i>  Tandai Selesai</button>
    </div>
  )
}

export default CourseStatus