import classes from './Keunggulan.module.css'

import img1 from '../../images/icon_benefit_0001.png'
import img2 from '../../images/icon_benefit_0002.png'
import img3 from '../../images/icon_benefit_0003.png'
import img4 from '../../images/icon_benefit_0004.png'

const Keunggulan = () => {
  return (
    <section className={classes['keunggulan']}>
      <div className='container'>
        <div className={classes['top']}>
          <div className='row'>
            <div className='d-none d-lg-block col-lg-6'>
              <div className={classes['left']}></div>
            </div>
            <div className={`${classes['title']} col-lg-6`}>
              <h1>Keunggulan <br />Metode Quamus</h1>
            </div>
          </div>
        </div>
        <div className={classes['bottom']}>
          <div className='row'>
            <div className={`${classes['img-item']} col-lg-3 col-md-3 col-6`}>
              <img src={img1} alt="Cepat" />
              <h1>Cepat</h1>
              <p>15 Menit sehari</p>
            </div>
            <div className={`${classes['img-item']} col-lg-3 col-md-3 col-6`}>
              <img src={img2} alt="Mudah" />
              <h1>Mudah</h1>
              <p>Kapan saja, Dimana saja</p>
            </div>
            <div className={`${classes['img-item']} col-lg-3 col-md-3 col-6`}>
              <img src={img3} alt="Menyenangkan" />
              <h1>Menyenangkan</h1>
              <p>Tidak ada hafalan</p>
            </div>
            <div className={`${classes['img-item']} col-lg-3 col-md-3 col-6`}>
              <img src={img4} alt="Sistematis" />
              <h1>Sistematis</h1>
              <p>Bertahap dan deduktif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Keunggulan