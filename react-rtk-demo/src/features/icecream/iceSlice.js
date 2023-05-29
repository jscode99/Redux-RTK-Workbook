import { createSlice } from '@reduxjs/toolkit';
// Other slice's actions
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const iceCreamState = {
  numOfIceCreams: 20
};


const iceSlice = createSlice({
  name: 'iceCream',
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
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--
    })
  }
});

export const { ordered, restocked } = iceSlice.actions;
export default iceSlice.reducer;