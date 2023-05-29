const redux = require('redux');
const produce = require('immer').produce;

const UPDATE_STREET = 'UPDATE_STREET';

const userState = {
  name: 'Jishnu',
  address: {
    city: 'oakland',
    street: 'stark main 098',
    state: 'New York',
  }
}

// Action
function updateStreet(street) {
  return {
    type: UPDATE_STREET,
    payload: street
  }
};

// Reducer
const reducer = (state = userState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload
      //   }
      // }
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
console.log('Initial state:', store.getState());
const unSubscribed = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(updateStreet('TS 3000'))

unSubscribed();