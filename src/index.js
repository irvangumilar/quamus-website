import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import './index.css'
import App from './App'
import store from "./stores";
import axios from 'axios';

import { AuthContextProvider } from "./stores/auth-context"

axios.defaults.baseURL = 'http://localhost:8100/';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(
  <AuthContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AuthContextProvider>
  , document.getElementById('root')
)