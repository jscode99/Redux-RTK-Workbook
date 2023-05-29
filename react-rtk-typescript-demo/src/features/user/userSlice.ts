import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// API Endpoint
const url = "https://jsonplaceholder.typicode.com/users";

interface InitialState {
  loading: boolean;
  user: string[];
  error: string | undefined;
}

const initialState: InitialState = {
  loading: false,
  user: [],
  error: "",
};

// Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("User/fetchUsers", () => {
  return axios
    .get(url)
    .then((response) =>
      response.data.map((user: { name: string }) => user.name),
    );
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.user = action.payload;
        state.error = "";
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
