import axios from 'axios'

import { useHistory } from 'react-router-dom';

import classes from './Login.module.css'
import { Fragment, useContext, useState } from 'react'

import MainNavigation from '../../components/core/Navigation/MainNavigation/MainNavigation'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import MainFooter from '../../components/core/Footer/MainFooter/MainFooter'
import { Link } from 'react-router-dom'
import FormError from '../../components/ui/FormError'
import AuthContext from '../../stores/auth-context';


const Login = () => {
  const ctxAuth = useContext(AuthContext)
  const history = useHistory()


  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const [email, setEmail] = useState('irvangumilar87@gmail.com')
  const [password, setPassword] = useState('admin12345')

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }
  document.title = "Login - Quamus"

  const formFocusHandler = (event) => {
    setError()
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    await axios.post('auth/jwt/create/', {
      email: email,
      password: password
    })
      .then(function (response) {
        ctxAuth.login(response.data.access)
        history.push("/");
      })
      .catch(function (error) {
        if (error.response.status === 401) {
          setError("Maaf, Email dan Password tidak valid.")
          setIsLoading(false)
        }
      });
  }

  const goggleLoginHandler = async() => {
    const redirect_uri = 'http://localhost:3000'
    try{
      const res = await axios.get('auth/o/google-oauth2/?redirect_uri='+redirect_uri)
      window.location.replace(res.data.authorization_url)
    }catch(error){

    }
  }

  return (
    <Fragment>
      <MainNavigation />
      <div className={classes['login']}>
        <p>Login ke Akun Quamus Anda!</p>
        <hr />
        {error && <FormError error={error} />}
        <form onSubmit={submitHandler}>
          <Input
            onFocus={formFocusHandler}
            onChange={emailChangeHandler}
            value={email}
            type='email'
            placeholder='Email'
            icon='envelope-fill'
            required
          />
          <Input
            onFocus={formFocusHandler}
            onChange={passwordChangeHandler}
            value={password}
            type='password'
            placeholder='Kata Sandi'
            icon='lock-fill'
            required
          />
          <Button type='submit' fullwidth={1} disabled={isLoading}>
            {isLoading && (
              <div className="spinner-border  spinner-border-sm text-white" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {!isLoading && <p>Login</p>}
          </Button>
          {/* <Button type='button' onClick={goggleLoginHandler} mode='bw' fullwidth={1} >
            {isLoading && (
              <div className="spinner-border  spinner-border-sm text-white" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {!isLoading && <p><i className="bi bi-google"></i> Lanjutkan dengan Google</p>}
          </Button> */}
          <p className='text-center'>Atau <Link to='/request-reset' className='text-quamus'>Lupa Kata Sandi</Link></p>
          <hr />
          <p className='text-center'>Tidak punya akun Quamus? <Link to='/daftar' className='text-quamus'>Daftar</Link></p>
        </form>
      </div>
      <MainFooter />
    </Fragment >
  )
}

export default Login