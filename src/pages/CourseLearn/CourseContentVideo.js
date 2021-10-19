import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './CourseContentVideo.module.css'
import CoursePlaylist from './CoursePlaylist'
import CourseStatus from './CourseStatus'

const CourseContentVideo = () => {
  const [indexVideo, setIndexVideo] = useState(0)

  const updateContent = (_index) => {
    // console.log(_index)
    setIndexVideo(_index)
  }

  return (
    <div className={classes['content-video']}>
      <iframe
        title="Video Player"
        className={classes['video-player']}
        key={DUMMYDATA[indexVideo].url}
        src={DUMMYDATA[indexVideo].url}
        allowFullScreen={true}
        allow="encrypted-media"
      ></iframe>
      <CourseStatus />
      <div className={classes['description']}>
        <h1>{DUMMYDATA[indexVideo].title}</h1>
        <Link to='/'><i className="bi bi-download"></i> Unduh Latihan</Link>
      </div>
      <CoursePlaylist onUpdateContent={updateContent} items={DUMMYDATA} />
    </div>
  )
}

export default CourseContentVideo




const DUMMYDATA = [
  {
    title: 'Tanda Baca Dobel Pendek',
    duration: '04:23',
    url: 'https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323J3juDithu0YENI0s6FkNwbmgFWzjDk4EXOEDLZ6qdtqIHd&playbackInfo=eyJ2aWRlb0lkIjoiYTQyM2NhOWExZGYwNGRmOTlkZThiZTc4OTcyMWU5ZTUifQ=='
  },
  {
    title: 'Kaidah Tanda Baca Dobel Pendek',
    duration: '05:13',
    url: 'https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323HH2Nbu0c0mIAflQfN7CtpX6tMq1CZ3mWuhIi6EIs9voc10&playbackInfo=eyJ2aWRlb0lkIjoiM2E5OGExMTZlNjZjNDgwOWFiODM5YWExYjIzMjVmNmIifQ=='
  },
  {
    title: 'Kaidah Tanda Baca Dobel Pendek',
    duration: '05:13',
    url: 'https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323GvJoPUjxFWwwCAPD6kDLDFW9dhRY19PWfRujs44f0WXPGt&playbackInfo=eyJ2aWRlb0lkIjoiMGJjMjBkZjI5MDU2NDZhNmI2YTkyNzlmNDkyMjQzNzkifQ=='
  },
  {
    title: 'Kaidah Tanda Baca Dobel Pendek',
    duration: '05:13',
    url: 'https://player.vdocipher.com/playerAssets/1.x/vdo/embed/index.html#otp=20160313versASE323jJBCXutMdC7aRNdtRfobmnod8BlJyIXmSJmUYSCI86YuvT&playbackInfo=eyJ2aWRlb0lkIjoiY2M5YTEzMDI5MGYyNGMxYWFiYTVhZTc0ZTcwZjc0MjUifQ=='
  }
]