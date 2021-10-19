import classes from './UpcomingClasses.module.css'

import logo1 from '../../images/upcoming_class_0001.png'
import logo2 from '../../images/upcoming_class_0002.png'
import logo3 from '../../images/upcoming_class_0003.png'
import logo4 from '../../images/upcoming_class_0004.png'

const UpcomingClasses = () => {
  return (
    <section className={classes['upcoming-class']}>
      <div className='container'>
        <div className='row'>
          <div className={`${classes['img-item']} col-lg-3 col-6`}>
            <img src={logo1} alt="Quamus Arabic" />
          </div>
          <div className={`${classes['img-item']} col-lg-3 col-6`}>
            <img src={logo2} alt="Quamus Academy" />
          </div>
          <div className={`${classes['img-item']} col-lg-3 col-6`}>
            <img src={logo3} alt="Quamus Kids" />
          </div>
          <div className={`${classes['img-item']} col-lg-3 col-6`}>
            <img src={logo4} alt="Quamus Thinking" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingClasses