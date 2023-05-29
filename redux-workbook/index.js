const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

// Middleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


// Actions
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1
  }
};

function reStockProduct(qty = 1) {
  return {
    type: 'CAKE_RESTOCKED',
    payload: qty
  }
}

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  }
}

function restockIcream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty
  }
}

// Cake state
const cakeState = {
  numOfCakes: 10
}
// Icecream state
const iceCreamState = {
  numOfIceCream: 20
}

// (prevState, action) => newState

const CakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }
    default:
      return state;
  }
};

const IceCreamReducer = (state = iceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      }
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      }
    /**
     * * Each reducer can updates only the portion of its application state.
     * * However, it can respond to any action dispatched in the application.
     * * But in RTK approach is different.
     */
    case CAKE_ORDERED:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceCreamReducer
})

// Middleware included
// const store = createStore(rootReducer, applyMiddleware(logger));
const store = createStore(rootReducer);


// console.log('Initial state:', store.getState());

// const unSubscribed = store.subscribe(() => { });
const unSubscribed = store.subscribe(() => {
  console.log('Updated state:', store.getState());
});

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(reStockProduct(2))

const actionCretor = bindActionCreators({ orderCake, reStockProduct, orderIceCream, restockIcream }, store.dispatch)
actionCretor.orderCake()
actionCretor.orderCake()
actionCretor.orderCake()
actionCretor.reStockProduct(3)
actionCretor.orderIceCream(1);
actionCretor.orderIceCream(1);
actionCretor.restockIcream(2)

unSubscribed();

// Already unsubscribed so no use
store.dispatch(orderCake())
