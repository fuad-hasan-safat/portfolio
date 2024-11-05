import { createSlice } from "@reduxjs/toolkit";

// Define the interface for a Card
interface Counter {
  count: number;
}

// Define the interface for the state managed by this slice

// Define the initial state for this slice
const initialState: Counter = {
    count: 0,
  };


  // Create a Redux slice for managing card data
const counterSlice = createSlice({
    name: "count", // Name of the slice
    initialState, // Initial state
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
  });


  // Export the action creator for getResourcesSuccess
export const { increment, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;

