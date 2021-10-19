import { createSlice } from "@reduxjs/toolkit";


const AuthSLice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload
    }
  }
})

export const AuthActions = AuthSLice.actions

export default AuthSLice.reducer