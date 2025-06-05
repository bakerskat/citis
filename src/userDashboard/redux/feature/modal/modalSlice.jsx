import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: true,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isOpen: (state) => {
      state.modal = true;
    },
    isClose: (state) => {
      state.modal = false;
    },
  },
});

export default modalSlice.reducer;
export const selectedModal = (state) => state.modal.modal;
export const { isClose, isOpen } = modalSlice.actions;
