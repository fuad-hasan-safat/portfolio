import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface  IState {
    selectedButton: 'education' | 'experience' | 'skill'
}


const initialState: IState = {
    selectedButton: 'education'
}

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        setResumeButton:(state, action: PayloadAction<'education' | 'experience' | 'skill'>)=>{
            state.selectedButton = action.payload
        }
    }
})

export const {setResumeButton} = resumeSlice.actions;
export  default resumeSlice.reducer;
