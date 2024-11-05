import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import counterReducer from '../lib/features/counter/counterSlice';
import headerReducer from '../lib/features/header/headerSlice';


export type AppDispatch = typeof store.dispatch;


const rootReducer = combineReducers({
    count: counterReducer,
    header: headerReducer,

});


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// Extract the dispatch function from the store for convenience
const { dispatch } = store;
export type RootState = ReturnType<typeof rootReducer>;

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

// Create a custom useDispatch hook with typed dispatch
const useDispatch = () => useAppDispatch<AppDispatch>();

// Export the Redux store, dispatch, useSelector, and useDispatch for use in components
export { store, dispatch, useSelector, useDispatch };
