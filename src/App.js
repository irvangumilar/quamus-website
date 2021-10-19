
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import CourseDescription from './pages/CourseDescription/CourseDescription';
import CourseLearn from './pages/CourseLearn/CourseLearn';

import Home from './pages/Home/Home';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Tos from './pages/Tos';
import Activate from './pages/Auth/Activate';
import { Fragment, useContext } from 'react';

import AuthContext from './stores/auth-context';
import RequestResetPassword from './pages/Auth/RequestResetPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import { useEffect } from 'react';

import queryString from "query-string";

const App = props => {
  const authCtx = useContext(AuthContext)
  let location = useLocation()

  useEffect(() => {
    const values = queryString.parse(location.search)
    const state = values.state ? values.state : null
    const code = values.code ? values.code : null
    
    if (state && code) {
      authCtx.google(state, code)
    }
  }, [])

  return (
    <Fragment>
      <Switch>
        <Route path='/' exact key="home">
          <Home />
        </Route>
        <Route path='/tos'>
          <Tos />
        </Route>
        {!authCtx.isAuthenticated && (
          <Route path='/login'>
            <Login />
          </Route>
        )}
        {!authCtx.isAuthenticated && (
          <Route path='/daftar'>
            <Register />
          </Route>
        )}
        {!authCtx.isAuthenticated && (
          <Route path='/activate/:uid/:token'>
            <Activate />
          </Route>
        )}
        {!authCtx.isAuthenticated && (
          <Route path='/request-reset'>
            <RequestResetPassword />
          </Route>
        )}
        {!authCtx.isAuthenticated && (
          <Route path='/password-reset/:uid/:token'>
            <ResetPassword />
          </Route>
        )}
        <Route path='/course/:courseSlug' exact>
          <CourseDescription />
        </Route>
        <Route path='/course/:courseSlug/learn/:subsectionId' exact>
          <CourseLearn />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Fragment>
  )
}

export default App