import { Fragment, useState } from 'react'

import classes from './Testimoni.module.css'

import img from '../../images/testimoni.jpg'
import ModalVideoPlayer from './ModalVideoPlayer'

const Testimoni = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [videoId, setVideoId] = useState('')

  const closeModal = () => {
    setIsShowModal(false)
  }

  const showModal = (videoId) => {
    setIsShowModal(true)
    setVideoId(videoId)
  }

  return (
    <Fragment>
      {isShowModal && <ModalVideoPlayer onClose={closeModal} videoId={videoId} />}
      <section className={classes['testimoni']}>
        <div className={`${classes['wrapper']} container`}>
          <h1>Testimoni Quamus Arabic</h1>
          <div className={classes['thumbnail']}>
            <img src={img} alt="Testimoni" />
            <button onClick={showModal.bind(null, 'zV5Dj3DtdLE')} className={classes['button']}><i className="bi bi-play-fill"></i></button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Testimoni