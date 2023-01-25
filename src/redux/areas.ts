import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'areas',
  initialState: {
    mainData: undefined,
  },
  reducers: {
    setMainData: (state, { payload }) => {
      state.mainData = payload;
    },
  },
});

export const { setMainData } = counterSlice.actions;

export default counterSlice.reducer;
