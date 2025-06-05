import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase/FirebaseConfig";

const initialState = {
  loading: false,
  transferInfo: [],
  error: "",
};

const transferInfoRef = collection(db, "transferInfo");

export const getAllTransferInfo = createAsyncThunk(
  "transferInfo/getAllTransferInfo",
  async () => {
    try {
      const response = await getDocs(transferInfoRef);
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

export const addTransferInfo = createAsyncThunk(
  "transferInfo/addTransferInfo",
  async (newValue) => {
    try {
      const response = await addDoc(transferInfoRef, newValue);
      return { id: response.id, ...newValue };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const editTransferInfo = createAsyncThunk(
  "transferInfo/editTransferInfo",
  async ({ id, updateDetails }) => {
    try {
      const confirmsId = doc(transferInfoRef, id);
      await updateDoc(confirmsId, updateDetails);
      return { id, updateDetails };
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteTransferInfo = createAsyncThunk(
  "transferInfo/deleteTransferInfo",
  async (id) => {
    try {
      const confirmsID = doc(transferInfoRef, id);
      await deleteDoc(confirmsID);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTransferInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTransferInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.transferInfo = action.payload;
        state.error = "";
      })
      .addCase(getAllTransferInfo.rejected, (state, action) => {
        state.loading = false;
        state.transferInfo = [];
        state.error = action.error.message;
      })
      .addCase(addTransferInfo.pending, (state) => {
        state.loading = true;
      })

      .addCase(addTransferInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.transferInfo = [...state.transferInfo, action.payload];
      })
      .addCase(deleteTransferInfo.fulfilled, (state, action) => {
        const deleteTransfer = state.transferInfo.filter((fill) => {
          return fill.id !== action.payload;
        });

        state.transferInfo = deleteTransfer;
      });
  },
});

export default transferSlice.reducer;
export const selectedTransferInfo = (state) => state.transfer.transferInfo;
export const selectedTransferLoading = (state) => state.transfer.loading;
