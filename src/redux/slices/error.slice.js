import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorData: {
    date: false,
    category: false,
    amount: false,
    content: false,
  },
};

const errorSlice = createSlice({
  name: "errorState",
  initialState,
  reducers: {
    setErrorData(state, action) {
      const { newErrorData } = action.payload;
      state.errorData = { ...newErrorData };
    },
    resetInputData(state) {
      state.errorData = initialState.errorData;
    },
  },
});

export const { setErrorData, resetInputData } = errorSlice.actions;
export default errorSlice.reducer;
