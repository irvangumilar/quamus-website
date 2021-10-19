import classes from './MainFooter.module.css'
import MainFooterBottom from './MainFooterBottom'
import MainFooterTop from './MainFooterTop'

const MainFooter = () => {
  return (
    <section className={classes['footer']}>
      <MainFooterTop />
      <MainFooterBottom />
    </section>
  )
}

export default MainFooter