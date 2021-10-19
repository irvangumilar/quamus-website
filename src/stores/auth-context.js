import React, { useCallback, useEffect, useState } from "react"
import { useCookies } from 'react-cookie';
import axios from "axios";


const AuthContext = React.createContext({
  isAuthenticated: false,
  user: null,
  login: token => { },
  logout: () => { },
  google: (state, code) => { }
})

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['leofranz']);
  const [token, setToken] = useState(cookies['leofranz'])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fecthAuthenticated = useCallback(async () => {
    if (token) {
      try {
        await axios.post('auth/jwt/verify/', {
          token: token,
        })
        setIsAuthenticated(true)
        axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
      } catch (err) {
        setIsAuthenticated(false)
        axios.defaults.headers.common['Authorization'] = '';
      }
    } else {
      setIsAuthenticated(false)
      axios.defaults.headers.common['Authorization'] = '';
    }
  }, [token]);

  // const fecthAuthenticated = async () => {
  //   if (token) {
  //     try {
  //       await axios.post('auth/jwt/verify/', {
  //         token: token,
  //       })
  //       setIsAuthenticated(true)
  //       axios.defaults.headers.common['Authorization'] = `JWT ${token}`;
  //     } catch (err) {
  //       setIsAuthenticated(false)
  //       axios.defaults.headers.common['Authorization'] = '';
  //     }
  //   } else {
  //     setIsAuthenticated(false)
  //     axios.defaults.headers.common['Authorization'] = '';
  //   }
  // }

  const fecthUser = useCallback(async () => {
    if (isAuthenticated) {
      try {
        const response = await axios.get('auth/users/me/')
        setUser(response.data)
      } catch (err) {
        console.log(err)
      }
    } else {
      setUser()
    }
  }, [isAuthenticated]);

  // const fecthUser = async () => {
  //   if (isAuthenticated) {
  //     try {
  //       const response = await axios.get('auth/users/me/')
  //       setUser(response.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   } else {
  //     setUser()
  //   }
  // }

  const loginHandler = token => {
    setToken(token)
  }

  const logoutHandler = () => {
    setToken(null)
    removeCookie('leofranz')
  }

  useEffect(() => {
    if (token) {
      setCookie('leofranz', token)
    }
    fecthAuthenticated()
    fecthUser()
  }, [token, cookies, isAuthenticated, fecthAuthenticated, fecthUser, setCookie])


  const googleHandler = async (state, code) => {
    if (state && code && !token) {
      console.log(state)
      console.log(code)
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      const details = {
        'state': state,
        'code': code
      }

      const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&')

      try {
        const res = await axios.post(`auth/o/google-oauth2/?${formBody}`, config)

        console.log(res)
        // setToken(res)
      } catch (err) {

      }
    }
    console.log(state)
    console.log(code)
  }


  const contextValue = {
    isAuthenticated: isAuthenticated,
    user: user,
    login: loginHandler,
    logout: logoutHandler,
    google: googleHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthContext