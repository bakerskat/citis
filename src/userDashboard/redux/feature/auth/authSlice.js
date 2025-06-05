import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../../firebase/FirebaseConfig";

const initialState = {
  loading: false,
  user: [],
  error: "",
  codeVerified: false,
};

export const registerUser = createAsyncThunk(
  "auth/regiaterusre",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        username,
        password
      );
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      return userCredential.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsVerified: (state, action) => {
      state.codeVerified = action.payload;
    },
    noUSerSignIn: (state) => {
      state.loading = false;
      state.user = null;
      state.error = "";
      state.codeVerified = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          uid: action.payload.uid,
          email: action.payload.email,
        };
        state.error = "";
        state.codeVerified = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
export const selectedUser = (state) => state.auth.user;
export const selectedUserLoading = (state) => state.auth.loading;
export const selectedUserError = (state) => state.auth.error;
export const selectedCodeVerified = (state) => state.auth.codeVerified;
export const { setUser, setIsVerified, noUSerSignIn } = authSlice.actions;
