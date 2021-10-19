import axios from 'axios'

import classes from './Register.module.css'
import { Fragment, useState } from 'react'

import MainNavigation from '../../components/core/Navigation/MainNavigation/MainNavigation'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { useDispatch } from 'react-redux'

import MainFooter from '../../components/core/Footer/MainFooter/MainFooter'
import { Link } from 'react-router-dom'

import FormError from '../../components/ui/FormError'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState()

  const dispatch = useDispatch()
  const [name, setName] = useState('Irvan Gumilar')
  const [email, setEmail] = useState('irvangumilar87@gmail.com')
  const [password, setPassword] = useState('admin12345')
  const [re_password, setRePassword] = useState('admin12345')

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const rePasswordChangeHandler = (event) => {
    setRePassword(event.target.value)
  }

  document.title = "Register - Quamus"

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

    await axios.post('auth/users/', {
      email: email,
      first_name: name,
      password: password,
      re_password: re_password
    })
      .then(function (response) {
        setIsSent(true)
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          setError("Maaf, email sudah digunakan.")
          setIsLoading(false)
        }
      });
  }

  return (
    <Fragment>
      <MainNavigation />
      <div className={classes['register']}>
        {isSent && (
          <div className={classes['register-success']}>
            <p>Terima kasih sudah mendaftarkan dirimu di <span className="text-primary">Quamus.</span></p>
            <p>Silahkan cek email {email} untuk melakukan verifikasi.</p>
          </div>
        )}
        {!isSent && (
          <div className={classes['register-form']}>
            <p>Ayo daftar Akun Quamus</p>
            <hr />
            {error && <FormError error={error} />}
            <form onSubmit={submitHandler}>
              <Input
                onFocus={formFocusHandler}
                value={name}
                onChange={nameChangeHandler}
                type='text'
                placeholder='Nama Lengkap'
                icon='person-fill'
                required
              />
              <Input
                onFocus={formFocusHandler}
                value={email}
                onChange={emailChangeHandler}
                type='email'
                placeholder='Email'
                icon='envelope-fill'
                required
              />
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
                {!isLoading && <p>Daftar</p>}
              </Button>
              <p className={classes['agreement']}>Dengan mendaftar, Anda menyetujui <Link to='/' className='text-quamus'>Ketentuan Penggunaan</Link> dan <Link to='/' className='text-quamus'>Kebijakan Privasi</Link>. </p>
              <hr />
              <p className='text-center'>Sudah punya akun Quamus? <Link to='/login' className='text-quamus'>Login</Link></p>
            </form>
          </div>
        )}
      </div>
      <MainFooter />
    </Fragment >
  )
}

export default Register