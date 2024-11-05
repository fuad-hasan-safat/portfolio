import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState } from '../index'

export interface PageState {
    activePage: 'home' | 'resume' | 'about' | 'contact'
}
const initialState: PageState = {
  activePage: 'home',
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage:( state, action: PayloadAction< 'home' | 'resume' | 'about' | 'contact'> )=> {
     
      state.activePage = action.payload
    },
  }
})

export const activePage = (state: RootState) => state.page.activePage

export const { setCurrentPage } = pageSlice.actions

export default pageSlice.reducer