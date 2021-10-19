import axios from 'axios'

import classes from './Activate.module.css'

import { Fragment } from 'react'
import MainNavigation from '../../components/core/Navigation/MainNavigation/MainNavigation'
import MainFooter from '../../components/core/Footer/MainFooter/MainFooter'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const Activate = () => {
  const [isActivated, setIsActivated] = useState(false)
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      await axios.post('auth/users/activation/', {
        uid: params.uid,
        token: params.token,
      })
        .then(function (response) {
          setIsActivated(true)
        })
        .catch(function (error) {
          console.error(error)
        });
    }
    fetchData()
  }, [isActivated,params.uid,params.token])

  document.title = "Activate - Quamus"

  return (
    <Fragment>
      <MainNavigation />
      <div className={classes['activate']}>
        {isActivated && (
          <div className={classes['activate-block']}>
            <p>Akun <span class="text-quamus">Quamus.</span> anda sudah diaktivasi.</p>
            <p>Sekarang anda dapat melakukan <span><a href="/login">login</a></span> </p>
          </div>
        )}
        {!isActivated && (
          <div className={classes['activate-block']}>
            <p>Harap tunggu, email anda sedang diaktivasi.</p>
            <div className="spinner-border  spinner-border-sm text-black" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
      <MainFooter />
    </Fragment>
  )
}

export default Activate