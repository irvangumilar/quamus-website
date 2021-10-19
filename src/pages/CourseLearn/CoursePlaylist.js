import classes from './CoursePlaylist.module.css'

import img from '../../images/thumb_video_0001.png'
import { useEffect, useState } from 'react'

const CoursePlaylist = props => {
  const [indexVideo, setIndexVideo] = useState(0)

  useEffect(() => {
    props.onUpdateContent(indexVideo)
  }, [props, indexVideo])

  const clickHandler = (index) => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIndexVideo(index)
  }

  return (
    <div className={classes['video-playlist']}>
      <ul>
        {
          props.items.map((item, index) => {
            return (
              <li key={index}>
                <button onClick={clickHandler.bind(null, index)} className={`${classes['playlist-item']} ${indexVideo === index ? classes['active'] : ''}`}>
                  <div className={classes['title-group']}>
                    <img src={img} alt="Thumbnail Video" />
                    <p>{item.title}</p>
                  </div>
                  <p className={classes['duration']}>{item.duration}</p>
                </button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CoursePlaylist