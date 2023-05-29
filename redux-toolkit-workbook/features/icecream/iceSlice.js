const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const iceCreamState = {
  numOfIceCreams: 20
};


const iceSlice = createSlice({
  name: 'IceCream',
  initialState: iceCreamState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--
    },
    restocked: (state, actions) => {
      state.numOfIceCreams += actions.payload
    }
  },
  // ! Will be deprecated in RTK 2.0
  // extraReducers: {
  //   ['Cakes/ordered']: (state) => {
  //     state.numOfIceCreams--
  //   }
  // }
  // * Recommended approach
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIceCreams--
    })
  }
});

module.exports = iceSlice.reducer;
module.exports.iceActions = iceSlice.actions;