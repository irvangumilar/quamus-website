import classes from './NavCart.module.css'

import NavCartItem from './NavCartItem'
import ButtonLink from '../../../ui/ButtonLink'

const NavCart = () => {
  return (
    <div className={classes['nav-cart']}>
      <ul>
        <li><NavCartItem /></li>
        <li><NavCartItem /></li>
        <li><NavCartItem /></li>
      </ul>
      <div className={classes['button-holder']}>
        <ButtonLink to='/' fullwidth={1}>Keranjang</ButtonLink>
      </div>
    </div>
  )
}

export default NavCart