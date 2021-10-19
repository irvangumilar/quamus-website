import { useState } from 'react'
import classes from './CourseSalePrice.module.css'

import Button from '../../components/ui/Button'

const CourseSalePrice = () => {
  const [isEnrolled, setIsEnrolled] = useState(true)
  const [isStarted, setIsStarted] = useState(true)
  return (
    <div className={classes['sale']}>
      <div className={classes['price-group']}>
        <div className={classes['price']}>
          <h1>Rp. 350.000</h1>
          <p>Rp. 500.000</p>
        </div>
        <p className={classes['discount']}><i className="bi bi-tag-fill"></i> Potongan 20%</p>
      </div>
      <div className={classes['buy-group']}>
        {!isEnrolled && <Button fullwidth={1}>Masukkan keranjang</Button>}
        {!isEnrolled && <Button fullwidth={1} mode='bw'>Beli Sekarang</Button>}
        {isEnrolled && <p>Kamu sudah membeli kelas ini pada <br /><span>3 September 2021</span></p>}
        {isEnrolled && !isStarted && <Button fullwidth={1}>Mulai Kelas</Button>}
        {isEnrolled && isStarted && <Button fullwidth={1}>Lanjutkan Kelas</Button>}
      </div>
      <div className={classes['include']}>
        <h1>Kelas ini berisi :</h1>
        <ul>
          <li><i className="bi bi-collection-play-fill"></i>45 Jam Video belajar</li>
          <li><i className="bi bi-file-earmark-fill"></i>12 File Latihan</li>
          <li><i className="bi bi-tag-fill"></i>Akses selamanya</li>
          <li><i className="bi bi-phone-fill"></i>Akses dari Mobile</li>
        </ul>
      </div>
    </div>
  )
}

export default CourseSalePrice