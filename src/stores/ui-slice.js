import { createSlice } from "@reduxjs/toolkit";


const UiSLice = createSlice({
  name: 'ui',
  initialState: {
  },
  reducers: {
    updatePageTitle(state, action) {
      document.title = `${action.payload} - Quamus`
    }
  }
})

export const UiActions = UiSLice.actions

export default UiSLice.reducer