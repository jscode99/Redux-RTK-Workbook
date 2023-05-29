const axios = require('axios');
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// Middleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
// Asyn action creator (MIDDLEWARE)
const thunkMiddleware = require('redux-thunk').default

// API Endpoint
const url = 'https://jsonplaceholder.typicode.com/users'

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

const intialState = {
  loading: false,
  data: [],
  error: ''
};

const fetchUserRequested = () => {
  return {
    type: FETCH_USER_REQUESTED
  }
};

const fetchUserSucceeded = (userData) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: userData
  }
};

const fetchUserFailed = (err) => {
  return {
    type: FETCH_USER_FAILED,
    payload: err
  }
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case FETCH_USER_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
  }
};

/**
 * ! Thunk middleware returns an action creator function instead of an action object
 * 
 */
const fetchUsers = () => {
  /**
   * * Function is not pure, and is allowed to have side effects like async API calls.
   * * Also can dispatch actions
   */
  return function (dispatch) {
    dispatch(fetchUserRequested());
    axios.get(url).then(response => {
      const users = response.data.map(user => user.id);
      dispatch(fetchUserSucceeded(users))
    }).catch(err => {
      dispatch(fetchUserFailed(err.message))
    })
  }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

store.subscribe(() => { });

store.dispatch(fetchUsers())