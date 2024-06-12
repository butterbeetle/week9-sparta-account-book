import { create } from "zustand";
import formatDate from "../utils/formatDate";

const useRecordStore = create((set) => ({
  month: localStorage.getItem("month") || +formatDate(new Date(), "month"),
  selectMonth: (selectedMonth) => {
    localStorage.setItem("month", selectedMonth);
    set({
      month: selectedMonth,
    });
  },
}));

export default useRecordStore;
