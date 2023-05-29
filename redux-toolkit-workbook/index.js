const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/icecream/iceSlice').iceActions;
const userFetch = require('./features/user/userSlice').userFetch


// console.log("Initial state", store.getState());

const unSubscribe = store.subscribe(() => {
  // console.log('updated state', store.getState());
})

store.dispatch(userFetch())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.restocked(3))

// unSubscribe()