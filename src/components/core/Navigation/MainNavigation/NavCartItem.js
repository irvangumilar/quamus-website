import classes from './NavCartItem.module.css'

import img from '../../../../images/course_image.jpg'

const NavCartItem = () => {
  return (
    <div className={classes['cart-item']}>
      <img src={img} alt="Course Thumbnail" />
      <div className={classes['description']}>
        <h1 className={classes['title']}>Quamus Arabic Level Dasar</h1>
        <p className={classes['instructor']}>Firman Affifudin Saleh</p>
        <div className={classes['price']}>
          <p className={classes['real-price']}>Rp. 200.000</p>
          <p className={classes['sale-price']}>Rp. 300.000</p>
        </div>
      </div>
    </div>
  )
}

export default NavCartItem