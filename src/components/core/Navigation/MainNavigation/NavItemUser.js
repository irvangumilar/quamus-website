import classes from './NavItemUser.module.css'

import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';
import AuthContext from '../../../../stores/auth-context';
import Button from '../../../ui/Button';
import { useContext } from 'react';

const NavItemUser = () => {
  const ctxAuth = useContext(AuthContext)
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    setUser(ctxAuth.user)
  }, [ctxAuth.user, setUser])

  const logoutHandler = () => {
    ctxAuth.logout()
    history.push("/");
  }

  return (
    <Fragment>
      <div className={`${classes['block']} ${classes['user']}`}>
        <div className={classes['circle-name']}>
          <p>{user && user.get_initial_name}</p>
        </div>
        <div className={classes['name']}>
          <h1>{user && user.first_name}</h1>
          <p>{user && user.email}</p>
        </div>
      </div>
      <div className={`${classes['block']} ${classes['kelas']}`}>
        <ul>
          <li><Link to='/'>Kelas saya</Link></li>
          <li><Link to='/'>Keranjang</Link></li>
        </ul>
      </div>
      <div className={`${classes['block']} ${classes['kelas']}`}>
        <ul>
          <li><Button onClick={logoutHandler} fullwidth={1}>Logout</Button></li>
        </ul>
      </div>
    </Fragment>
  )
}

export default NavItemUser