import axios from 'axios'

import classes from './RequestResetPassword.module.css'

import { Fragment, useState } from 'react'
import MainNavigation from '../../components/core/Navigation/MainNavigation/MainNavigation'
import MainFooter from '../../components/core/Footer/MainFooter/MainFooter'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const RequestResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const [email, setEmail] = useState('irvangumilar87@gmail.com')

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  document.title = "Permintaan atur ulang - Quamus"

  const submitHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    await axios.post('auth/users/reset_password/', {
      email: email,
    })
      .then(function (response) {
        setIsSent(true)
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  return (
    <Fragment>
      <MainNavigation />
      <div className={classes['request']}>
        {isSent && (
          <div className={classes['request-success']}>
            <p>Permintaan atur ulang kata sandi <span className="text-primary">Quamus</span> sudah diproses.</p>
            <p>Silahkan cek email <span className='text-quamus text-bold'>{email}</span> untuk melakukan atur ulang kata sandi.</p>
          </div>
        )}
        {!isSent && (
          <div className={classes['request-form']}>
            <p>Atur ulang kata sandi</p>
            <hr />
            <form onSubmit={submitHandler}>
              <Input
                value={email}
                onChange={emailChangeHandler}
                type='email'
                placeholder='Email'
                icon='envelope-fill'
                required
              />
              <Button type='submit' fullwidth={1} disabled={isLoading}>
                {isLoading && (
                  <div className="spinner-border  spinner-border-sm text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                {!isLoading && <p>Kirim</p>}
              </Button>
              <p className='text-center'>Sudah punya akun Quamus? <Link to='/login' className='text-quamus'>Login</Link></p>
            </form>
          </div>
        )}
      </div>
      <MainFooter />
    </Fragment>
  )
}

export default RequestResetPassword