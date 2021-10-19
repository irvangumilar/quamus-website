import Modal from '../../components/ui/Modal'
import classes from './ModalVideoPlayer.module.css'

import YouTube from 'react-youtube';

const ModalVideoPlayer = props => {
  const config = {
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <Modal onClose={props.onClose}>
      <div className={classes['video-player']}>
        <YouTube videoId={props.videoId} opts={config} />
      </div>
    </Modal>
  )
}

export default ModalVideoPlayer