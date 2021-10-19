import classes from './CourseSale.module.css'

import { Fragment, useState } from 'react'

import thumbnail from '../../images/course_image.jpg'
import ModalVideoPlayer from '../Home/ModalVideoPlayer'


import CourseSalePrice from './CourseSalePrice'

const CourseSale = () => {
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
      <div className={classes['sale']}>
        <div className={classes['thumbnail-group']}>
          <img src={thumbnail} alt="Course Thumbnail" />
          <button onClick={showModal.bind(null, 'L_P_KGNeOHM')} className={classes['button']}><i className="bi bi-play-fill"></i></button>
        </div>
        <CourseSalePrice />
      </div>
    </Fragment>
  )
}

export default CourseSale