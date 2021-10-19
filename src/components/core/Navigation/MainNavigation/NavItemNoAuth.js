import ButtonLink from '../../../ui/ButtonLink'
import classes from './NavItemNoAuth.module.css'

const NavItemNoAuth = () => {
  return (
    <div className={classes['nav-item']}>
      <ul>
        <li><ButtonLink to='/login' fullwidth={1}>Login</ButtonLink></li>
        <li><ButtonLink to='/daftar' fullwidth={1} mode='bw'>Daftar</ButtonLink></li>
      </ul>
    </div>
  )
}

export default NavItemNoAuth