const createSlice = require('@reduxjs/toolkit').createSlice;

const cakeState = {
  numOfCakes: 10
};

const cakeSlice = createSlice({
  name: 'Cakes',
  initialState: cakeState,
  reducers: {
    ordered: (state) => {
      // Data mutations is possible (Coz immer lib is used under the hood)
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions