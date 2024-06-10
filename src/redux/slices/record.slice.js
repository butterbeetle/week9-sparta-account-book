import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import formatDate from "../../utils/formatDate";

const initialState = {
  selectedMonth: +formatDate(new Date(), "month"),
  recordsData: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    addRecordDataHandler(state, action) {
      const { newRecordData } = action.payload;
      state.recordsData.push({ id: uuidv4(), ...newRecordData });
    },
    updateRecordDataHandler(state, action) {
      const {
        payload: { recordId, updatedData },
      } = action;
      state.recordsData = state.recordsData.map((recordData) =>
        recordData.id === recordId ? updatedData : recordData
      );
    },
    deleteRecordDataHandler(state, action) {
      const { recordId } = action.payload;
      state.recordsData = state.recordsData.filter(
        (recordData) => recordData.id !== recordId
      );
    },
    monthSelectHandler(state, action) {
      state.selectedMonth = action.payload;
    },
  },
});

export const {
  addRecordDataHandler,
  updateRecordDataHandler,
  deleteRecordDataHandler,
  monthSelectHandler,
} = recordsSlice.actions;
export default recordsSlice.reducer;

export const selectDataById = (state, id) =>
  state.record.recordsData.find((item) => item.id === id);
