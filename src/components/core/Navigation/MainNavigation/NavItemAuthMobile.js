import classes from './NavItemAuthMobile.module.css'
import NavItemUser from './NavItemUser'

const NavItemAuthMobile = () => {
  return (
    <div className={classes['nav-item']}>
      <NavItemUser />
    </div>
  )
}

export default NavItemAuthMobile