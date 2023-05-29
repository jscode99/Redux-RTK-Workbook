const configureStore = require('@reduxjs/toolkit').configureStore;
const LoggerMiddleware = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceSlice');
const userReducer = require('../features/user/userSlice');
const { getDefaultMiddleware } = require('@reduxjs/toolkit');

const logger = LoggerMiddleware.createLogger()
// Invoking the store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

module.exports = store