import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/FirebaseConfig";

const initialState = {
  loading: false,
  bankInfo: [],
  error: "",
};

const bankInfoRef = collection(db, "bankInfo");

export const getAllBankInfo = createAsyncThunk(
  "bankInfo/getAllBankInfo",
  async () => {
    try {
      const response = await getDocs(bankInfoRef);
      const dataResults = response.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return dataResults;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const addToBankInfo = createAsyncThunk(
  "bankInfo/addToBankInfo",
  async (newValue) => {
    try {
      const response = await addDoc(bankInfoRef, newValue);
      return { id: response.id, ...newValue };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBankInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBankInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.bankInfo = action.payload;
        state.error = "";
      })
      .addCase(getAllBankInfo.rejected, (state, action) => {
        state.loading = false;
        state.bankInfo = [];
        state.error = action.error.message;
      })
      .addCase(addToBankInfo.fulfilled, (state, action) => {
        state.bankInfo = [...state.bankInfo, action.payload];
      });
  },
});

export default bankSlice.reducer;
export const selectedBankInfo = (state) => state.bank.bankInfo;
