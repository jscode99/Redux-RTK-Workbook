import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/iceSlice';
import userReducer from '../features/user/userSlice';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

// const logger = createLogger();

// Invoking the store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;