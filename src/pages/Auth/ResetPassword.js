import axios from 'axios'

import classes from './ResetPassword.module.css'
import { Fragment, useState } from 'react'
import { useParams } from 'react-router'
import MainNavigation from '../../components/core/Navigation/MainNavigation/MainNavigation'
import MainFooter from '../../components/core/Footer/MainFooter/MainFooter'
import FormError from '../../components/ui/FormError'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState()
  const params = useParams()

  const [password, setPassword] = useState('admin12345')
  const [re_password, setRePassword] = useState('admin12345')

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const rePasswordChangeHandler = (event) => {
    setRePassword(event.target.value)
  }

  document.title = "Atur ulang kata sandi - Quamus"

  const formFocusHandler = (event) => {
    setError()
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    if (password !== re_password) {
      setError('Password harus sama')
      return
    }
    setIsLoading(true)

    await axios.post('auth/users/reset_password_confirm/', {
      uid: params.uid,
      token: params.token,
      new_password: password,
      re_password: re_password
    })
      .then(function (response) {
        setIsSent(true)
      })
      .catch(function (error) {
        console.error(error)
      });
  }

  return (
    <Fragment>
      <MainNavigation />
      <div className={classes['register']}>
        {isSent && (
          <div className={classes['register-success']}>
            <p>Atur ulang kata sandi akun <span className="text-primary">Quamus</span> kamu sudah berhasil</p>
          </div>
        )}
        {!isSent && (
          <div className={classes['register-form']}>
            <p>Atur ulang kata sandi Akun Quamus</p>
            <hr />
            {error && <FormError error={error} />}
            <form onSubmit={submitHandler}>
              <Input
                onFocus={formFocusHandler}
                value={password}
                onChange={passwordChangeHandler}
                type='password'
                placeholder='Kata Sandi'
                icon='lock-fill'
                required
              />
              <Input
                onFocus={formFocusHandler}
                value={re_password}
                onChange={rePasswordChangeHandler}
                type='password'
                placeholder='Konfirmasi Kata Sandi'
                icon='lock-fill'
                required
              />
              <Button type='submit' fullwidth={1} disabled={isLoading}>
                {isLoading && (
                  <div className="spinner-border  spinner-border-sm text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
                {!isLoading && <p>Atur ulang</p>}
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

export default ResetPassword