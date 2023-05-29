import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CakeState {
  numOfCakes: number;
}
const cakeState: CakeState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: cakeState,
  reducers: {
    ordered: (state) => {
      // Data mutations is possible (Coz immer lib is used under the hood)
      state.numOfCakes--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { ordered, restocked } = cakeSlice.actions;
export default cakeSlice.reducer;
