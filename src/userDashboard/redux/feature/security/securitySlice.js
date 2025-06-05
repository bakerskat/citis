import { createSlice } from "@reduxjs/toolkit";
import { securityDetails } from "../../../components/home/body/security/securityDetails";

const initialState = {
  method: securityDetails[0],
  isOpen: false,
  loading: false,
  message: false,
  show: false,
};

const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {
    methodAction: (state, action) => {
      state.method = action.payload;
      state.isOpen = false;
      state.show = true;
    },
    messageAction: (state) => {
      state.loading = true;
    },
    messageAction1: (state) => {
      state.message = true;
      state.loading = false;
    },
    toggleAction: (state) => {
      state.isOpen = !state.isOpen;
    },
    resetActions: (state) => {
      state.method = securityDetails[0];
      state.isOpen = false;
      state.loading = false;
      state.message = false;
      state.show = false;
    },
  },
});

export default securitySlice.reducer;
export const selectedMethods = (state) => state.security.method;
export const selectedIsOpen = (state) => state.security.isOpen;
export const selectedLoading = (state) => state.security.loading;
export const selectedMessage = (state) => state.security.message;
export const selectedShow = (state) => state.security.show;
export const {
  messageAction,
  toggleAction,
  methodAction,
  messageAction1,
  resetActions,
} = securitySlice.actions;
