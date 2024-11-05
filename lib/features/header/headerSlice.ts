import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Header {
    activePage: 'home' | 'resume' | 'about' | 'contact'
}

const initialState: Header = {
    activePage: 'home',
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction< 'home' | 'resume' | 'about' | 'contact'> )=> {
            state.activePage = action.payload
        }
    }
})
export const { setActivePage } = headerSlice.actions;
export default headerSlice.reducer;


