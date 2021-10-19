import { Link } from 'react-router-dom'
import classes from './ImageHeader.module.css'

const ImageHeader = () => {
  return (
    <section className={classes['image-header']}>
      <div className={classes['description']}>
        <h4><i className="bi bi-book"></i> REVOLUSI BELAJAR</h4>
        <h3>Quamus <span>Arabic</span></h3>
        <p>Kini belajar bahasa arab jadi mudah.</p>
        <Link className={classes['button']} to='/'>Daftar Sekarang</Link>
      </div>
    </section>
  )
}

export default ImageHeader