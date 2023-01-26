import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'areas',
  initialState: {
    mainData: undefined,
    secondaryData: undefined,
  },
  reducers: {
    setMainData: (state, { payload }) => {
      state.mainData = payload;
    },
    setSecondaryData: (state, { payload }) => {
      state.secondaryData = payload;
    },
  },
});

export const { setMainData, setSecondaryData } = counterSlice.actions;

export default counterSlice.reducer;
