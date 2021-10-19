import { Link } from 'react-router-dom'
import classes from './MainFooterBottom.module.css'

const MainFooterBottom = () => {
  const year = new Date().getFullYear()

  return (
    <div className={classes['footer-bottom']}>
      <div className={`${classes['wrapper']} container`}>
        <p>&copy; {year} by Quamus</p>
        <div className={classes['socmed']}>
          <ul>
            <li><Link className={classes['socmed-item']} to='/'><i className="bi bi-instagram"></i></Link></li>
            <li><Link className={classes['socmed-item']} to='/'><i className="bi bi-facebook"></i></Link></li>
            <li><Link className={classes['socmed-item']} to='/'><i className="bi bi-twitter"></i></Link></li>
            <li><Link className={classes['socmed-item']} to='/'><i className="bi bi-youtube"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>)
}

export default MainFooterBottom