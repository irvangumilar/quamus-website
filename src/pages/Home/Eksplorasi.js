import classes from './Eksplorasi.module.css'

import media1 from '../../images/media_type_0001.jpg'
import media2 from '../../images/media_type_0002.jpg'
import media3 from '../../images/media_type_0003.jpg'
import media4 from '../../images/media_type_0004.jpg'

import app1 from '../../images/upcoming_apps_0001.jpg'
import app2 from '../../images/upcoming_apps_0002.jpg'
import app3 from '../../images/upcoming_apps_0003.jpg'

import art from '../../images/game_art.jpg'

const Eksplorasi = () => {
  return (
    <section className={classes['eksplorasi']}>
      <div className='container'>
        <div className='row'>
          <div className={`${classes['description']} col-lg-6`}>
            <div>
              <h1>Eksplorasi Belajar</h1>
              <p>Kelas online Quamus dikembangkan dalam berbagai bentuk media belajar yaitu video, game, latihan dan kuis.</p>
              <div className={`${classes['img-group']} row`}>
                <div className={`${classes['img-item']} col-6 col-lg-3 col-md-3`}><img src={media1} alt="Video" /></div>
                <div className={`${classes['img-item']} col-6 col-lg-3 col-md-3`}><img src={media2} alt="Game" /></div>
                <div className={`${classes['img-item']} col-6 col-lg-3 col-md-3`}><img src={media3} alt="Assignment" /></div>
                <div className={`${classes['img-item']} col-6 col-lg-3 col-md-3`}><img src={media4} alt="Evaluasi" /></div>
              </div>
              <p>Kelas online Quamus dilengkapi dengan sumber belajar berupa game dan apps yang tersedia di Google Play dan iOS.</p>
              <div className={`${classes['img-group']} row`}>
                <div className={`${classes['img-item-app']} col-4`}><img src={app1} alt="Quran Quamus" /></div>
                <div className={`${classes['img-item-app']} col-4`}><img src={app2} alt="Game" /></div>
                <div className={`${classes['img-item-app']} col-4`}><img src={app3} alt="Game" /></div>
              </div>
            </div>
          </div>
          <div className='d-none d-lg-block d-sm-block col-lg-6'>
            <div className={classes['right-side']}>
              <img src={art} alt="Game Art" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eksplorasi