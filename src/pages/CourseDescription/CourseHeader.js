import { Link } from 'react-router-dom'
import classes from './CourseHeader.module.css'


const CourseHeader = () => {
  const DUMMYDATA = {
    title: 'Quamus Arabic Level Dasar',
    description: "Mengenal dan belajar menulis Huruf-huruf hijaiyah, Mengenal Kata Isim, Fi'il dan Huruf",
    bestseller: true,
    rating: 4.3,
    userRating: 423,
    numStudents: 1500,
    instructor: 'Firman Afifudin Saleh, M.Ag'
  }


  return (
    <div className={classes['header']}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <h1>{DUMMYDATA.title}</h1>
            <p className={classes['description']}>{DUMMYDATA.description}</p>
            <div className={classes['rating-group']}>
              {DUMMYDATA.bestseller && <div className={classes['status']}>Bestseller</div>}
              <p className={classes['number-rating']}>{DUMMYDATA.rating}</p>
              <div className={classes['star-rating']}>
                <ul className='d-none d-lg-block d-md-block'>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                  <li><i className="bi bi-star-fill"></i></li>
                </ul>
              </div>
              <p className={classes['user-give-rating']}>({DUMMYDATA.userRating} rating)</p>
              <p className={classes['user-enroll']}>{DUMMYDATA.numStudents} siswa</p>
            </div>
            <p>Instruktur : <Link to='/'><span className='text-bold'>{DUMMYDATA.instructor}</span></Link></p>
            <p><i className="bi bi-calendar-event"></i>Terakhir di update 3 September 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHeader