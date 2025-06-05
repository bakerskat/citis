import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc } from "firebase/firestore";

const initialState = {
  loading: false,
  bankDatabase: [],
  error: "",
};

export const addToBankDatabase = createAsyncThunk(
  "bankDatabase/addToBankDatabase",
  async ({ dataBaseRef, newValue }) => {
    try {
      const response = await addDoc(dataBaseRef, newValue);
      return { id: response.id, ...newValue };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const bankDatabaseSlice = createSlice({
  name: "bankDatabase",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addToBankDatabase.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToBankDatabase.fulfilled, (state, action) => {
        state.loading = false;
        state.bankDatabase = [...state.bankDatabase, action.payload];
        state.error = "";
      })
      .addCase(addToBankDatabase.rejected, (state, action) => {
        state.loading = false;
        state.bankDatabase = [];
        state.error = action.error.message;
      });
  },
});

export default bankDatabaseSlice.reducer;
export const selectedAddLoading = (state) => state.bankDatabase.loading;
