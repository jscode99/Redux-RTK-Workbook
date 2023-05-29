import { createSlice } from '@reduxjs/toolkit';

const cakeState = {
  numOfCakes: 10
};

const cakeSlice = createSlice({
  name: 'cake',
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

export const { ordered, restocked } = cakeSlice.actions
export default cakeSlice.reducer;