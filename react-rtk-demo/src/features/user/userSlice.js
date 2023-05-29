import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Endpoint
const url = 'https://jsonplaceholder.typicode.com/users'

const initialState = {
  loading: false,
  user: [],
  error: ''
}

// Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('User/fetchUsers', () => {
  return axios.get(url).then(response => response.data.map(user => user.name))
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer;