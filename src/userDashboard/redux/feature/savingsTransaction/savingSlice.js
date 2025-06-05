import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savingAmount: "",
  upatedSavings: [],
};

const savingSlice = createSlice({
  name: "savings",
  initialState,
  reducers: {
    calculateTheSaving,
  },
});
