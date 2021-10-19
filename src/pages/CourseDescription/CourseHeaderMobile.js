import classes from './CourseHeaderMobile.module.css'

import { Fragment, useState } from 'react'
import thumbnail from '../../images/course_image.jpg'

import ModalVideoPlayer from '../Home/ModalVideoPlayer'
import CourseHeader from './CourseHeader'
import CourseSalePrice from './CourseSalePrice'

const CourseHeaderMobile = () => {
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
      <div className={classes['header-mobile']}>
        <div className={classes['thumbnail-group']}>
          <img src={thumbnail} alt="Course Thumbnail" />
          <button onClick={showModal.bind(null, 'L_P_KGNeOHM')} className={classes['button']}><i className="bi bi-play-fill"></i></button>
        </div>
        <CourseHeader />
        <CourseSalePrice />
      </div>
    </Fragment>
  )
}

export default CourseHeaderMobile