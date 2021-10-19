import { useState } from 'react'
import { Fragment } from 'react'
import ModalVideoPlayer from './ModalVideoPlayer'

import classes from './Why.module.css'
import WhyButton from './WhyButton'

const Why = () => {
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
      <section className={classes['why']}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='d-none d-lg-block col-lg-6'>
              <div className={classes['left-side']}></div>
            </div>
            <div className='col-lg-6'>
              <div className={classes['right-side']}>
                <h2>Mengapa Belajar <br /> <span className='text-quamus'>Bahasa Arab?</span></h2>
                <ul>
                  <li>
                    <WhyButton onClick={showModal.bind(null, '5CHJGg-VkWA')} description='Mengapa kita perlu belajar Bahasa?' />
                  </li>
                  <li>
                    <WhyButton onClick={showModal.bind(null, 'E2TNHTbI8kM')} description='Mengapa kita perlu belajar Bahasa Arab?' />
                  </li>
                  <li>
                    <WhyButton onClick={showModal.bind(null, 'XNcspr4YOns')} description='Mengapa Belajar Bahasa Arab dengan Metode Quamus?' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Why