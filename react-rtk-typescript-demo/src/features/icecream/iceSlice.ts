import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
// Other slice's actions
import { ordered as cakeOrdered } from "../cake/cakeSlice";

interface IceCreamState {
  numOfIceCreams: number;
}
const iceCreamState: IceCreamState = {
  numOfIceCreams: 20,
};

const iceSlice = createSlice({
  name: "iceCream",
  initialState: iceCreamState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, actions: PayloadAction<number>) => {
      state.numOfIceCreams += actions.payload;
    },
  },
  // ! Will be deprecated in RTK 2.0
  // extraReducers: {
  //   ['Cakes/ordered']: (state) => {
  //     state.numOfIceCreams--
  //   }
  // }
  // * Recommended approach
  extraReducers: (builder: ActionReducerMapBuilder<IceCreamState>) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export const { ordered, restocked } = iceSlice.actions;
export default iceSlice.reducer;
