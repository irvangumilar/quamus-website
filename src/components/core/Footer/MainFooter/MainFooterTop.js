import classes from './MainFooterTop.module.css'

import logo from '../../../../images/footer_logo.png'
import app1 from '../../../../images/app_icon_0001.png'
import app2 from '../../../../images/app_icon_0002.png'
import { Link } from 'react-router-dom'

const MainFooterTop = () => {
  return (
    <div className={classes['footer-top']}>
      <div className='container'>
        <div className='row'>
          <div className={`${classes['footer-blok']} col-12 col-lg-4 col-md-12`}>
            <img src={logo} alt="Logo" />
            <h1>Quamus Academy Center</h1>
            <p>Bandung, Indonesia</p>
          </div>
          <div className={`${classes['footer-blok']} col-8 col-lg-3 col-md-4`}>
            <ul>
              <li><Link to='/'>Syarat dan Ketentuan</Link> </li>
              <li><Link to='/'>Kebijakan Privasi</Link> </li>
            </ul>
          </div>
          <div className={`${classes['footer-blok']} col-4 col-lg-3 col-md-4`}>
            <ul>
              <li><Link to='/'>Bantuan</Link></li>
            </ul>
          </div>
          <div className={`${classes['footer-blok-app']} col-12 col-lg-2 col-md-4`}>
            <h1>Quamus Apps</h1>
            <ul>
              <li><img src={app1} alt="Android" /></li>
              <li><img src={app2} alt="Apple" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFooterTop