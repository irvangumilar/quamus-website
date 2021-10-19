import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../../../stores/auth-context'
import NavCart from './NavCart'
import classes from './NavItemAuth.module.css'
import NavItemUser from './NavItemUser'

const NavItemAuth = () => {
  const ctxAuth = useContext(AuthContext)
  const [user, setUser] = useState()

  const [isUserInfoShow, setIsUserInfoShow] = useState(false)
  const [isCartInfoShow, setIsCartInfoShow] = useState(false)

  const userMouseHandler = (value) => {
    setIsUserInfoShow(value)
    setIsCartInfoShow(false)
  }

  const cartMouseHandler = (value) => {
    setIsCartInfoShow(value)
    setIsUserInfoShow(false)
  }

  useEffect(() => {
    setUser(ctxAuth.user)
  }, [ctxAuth.user, setUser])

  return (
    <div className={classes['nav-item']}>
      <ul>
        <li>
          <div
            className={classes['cart-holder']}
            onMouseLeave={cartMouseHandler.bind(null, false)}
          >
            <button
              className={classes['cart']}
              onMouseEnter={cartMouseHandler.bind(null, true)}
            ><i className="bi bi-cart"></i></button>
            <div className={classes['badge']}><p>3</p></div>
            {isCartInfoShow && (
              <div className={classes['cart-dropdown']}>
                <div className={classes['content']}>
                  <NavCart />
                </div>
              </div>
            )}
          </div>
        </li>
        <li>
          <div
            className={classes['button-holder']}
            onMouseLeave={userMouseHandler.bind(null, false)}
          >
            <button
              className={classes['user']}
              onMouseEnter={userMouseHandler.bind(null, true)}
            >{user && user.get_initial_name}</button>
            {isUserInfoShow && (
              <div className={classes['user-dropdown']}>
                <div className={classes['content']}>
                  <NavItemUser />
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default NavItemAuth