import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

import logo from '../../../../images/quamus_logo.png'
import NavItemAuth from './NavItemAuth'
import NavItemNoAuth from './NavItemNoAuth'

import { Fragment, useEffect, useState } from 'react'
import NavItemAuthMobile from './NavItemAuthMobile'
import { useContext } from 'react'

import AuthContext from '../../../../stores/auth-context';

const MainNavigation = () => {
  const authCtx = useContext(AuthContext)
  const [isMobileNavShow, setIsMobileNavShow] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState()

  const toggleMobileNavHandler = () => {
    setIsMobileNavShow(!isMobileNavShow)
  }

  useEffect(() => {
    setIsAuthenticated(authCtx.isAuthenticated)
  }, [authCtx.isAuthenticated, setIsAuthenticated])

  return (
    <Fragment>
      <nav className={classes['main-nav']}>
        <div className={`${classes['nav-content']} container-fluid`}>
          <Link to='/'><img className={classes['brand']} src={logo} alt="Logo Quamus" /></Link>
          <button onClick={toggleMobileNavHandler} className={classes['btn-toggle']}>
            <i className={`bi bi-${isMobileNavShow ? 'x' : 'list'}`}></i>
          </button>
          {isAuthenticated && (
            <Link to='/' className={classes['btn-cart']}>
              <i className='bi bi-cart'></i>
            </Link>
          )}
          <div className={`${classes['nav-item-group']} d-none d-lg-block`}>
            {!isAuthenticated && <NavItemNoAuth />}
            {isAuthenticated && <NavItemAuth />}
          </div>
        </div>
      </nav>
      <div className={`${classes['mobile-nav']} d-block d-lg-none`}>
        <div onClick={toggleMobileNavHandler} className={`${classes['backdrop']} ${isMobileNavShow ? classes['active'] : classes['']}`}></div>
        <div className={`${classes['content']} ${isMobileNavShow ? classes['active'] : classes['']} `}>
          {!isAuthenticated && <NavItemNoAuth />}
          {isAuthenticated && <NavItemAuthMobile />}
        </div>
      </div>
    </Fragment>
  )
}

export default MainNavigation