// import { createSlice } from "@reduxjs/toolkit";
// import { formDetails1 } from "../../../components/home/body/addFunds/form/formDetails";

// const initialState = {
//   amount: "",
//   errorAmount: "",
//   isBankOpen: false,
//   index: null,
//   bankTouched: false,
//   bankError: "",
//   account: formDetails1[0],
//   isAccountOpen: false,
// };

// const bankFormSlice = createSlice({
//   name: "bankForm",
//   initialState,
//   reducers: {
//     amountActionChange: (state, action) => {
//       const { valueInput, emptyMessage } = action.payload;
//       // this part removes the "," from the value and make it just a number
//       const valueAmount = valueInput.replace(/,/g, "");
//       // this part are regex they tell the user that i dont want letters or symbols just the number and returns true that the purposed of the test
//       if (/^\d*\.?\d*$/.test(valueAmount)) {
//         state.amount = valueAmount;
//         state.errorAmount = "";
//       }
//       if (!valueAmount.trim()) {
//         state.errorAmount = emptyMessage;
//         return;
//       }
//     },
//     amountActionBlur: (state, action) => {
//       const { valueInput, emptyMessage } = action.payload;
//       const inputValue = valueInput.replace(/,/g, "");
//       const trimValue = inputValue.trim();
//       // this part means that when the fiedl is empty as soon as the user leave the field show this
//       if (!trimValue) {
//         state.errorAmount = emptyMessage;
//         return;
//       }
//       let num = parseFloat(trimValue);
//       if (isNaN(num)) {
//         state.errorAmount = "Invalid Amount";
//         return;
//       }

//       if (num < 25) {
//         state.errorAmount = "The minimum you can transfer is $25";
//       } else {
//         state.errorAmount = "";
//         const formatNum = num.toLocaleString("en-US", {
//           // This makes sure there are at least 2 digits after the decimal.
//           minimumFractionDigits: 2,
//           // This limits it to no more than 2 digits after the decimal.
//           maximumFractionDigits: 2,
//         });
//         state.amount = formatNum;
//       }
//     },
//     bankOpenAction: (state) => {
//       const newState = !state.isBankOpen;
//       state.isBankOpen = newState;
//       if (newState) {
//         state.bankTouched = true;
//       }
//     },
//     bankOptionAction: (state, action) => {
//       const { bankInfo, selectedBank } = action.payload;
//       const idx = bankInfo.findIndex((bank) => bank.id === selectedBank);
//       state.index = idx;
//       state.isBankOpen = false;
//       state.bankError = "";
//     },
//     bankErrorAction: (state) => {
//       state.isBankOpen = false;
//       if (
//         state.bankTouched &&
//         (typeof state.index !== "number" || state.index < 0)
//       ) {
//         state.bankError = "Please select or add an account";
//         return;
//       }
//     },
//     mainBankError: (state) => {
//       state.bankError = "Please select or add an account";
//     },
//     accountOpenAction: (state) => {
//       state.isAccountOpen = !state.isAccountOpen;
//     },
//     accountOption: (state, action) => {
//       state.account = action.payload;
//       state.isAccountOpen = false;
//     },
//     bankSubmitForm: (state) => {
//       state.amount = "";
//       state.errorAmount = "";
//       state.isBankOpen = false;
//       state.index = null;
//       state.bankTouched = false;
//       state.bankError = "";
//     },
//   },
// });

// export default bankFormSlice.reducer;
// export const selectedAmount = (state) => state.bankForm.amount;
// export const selectedErrorAmount = (state) => state.bankForm.errorAmount;
// export const selectedIsBankOpen = (state) => state.bankForm.isBankOpen;
// export const selectedIndex = (state) => state.bankForm.index;
// export const selectedBankError = (state) => state.bankForm.bankError;
// export const selectedAccountForm = (state) => state.bankForm.account;
// export const selectedIsAccountOpen = (state) => state.bankForm.isAccountOpen;
// export const {
//   amountActionChange,
//   amountActionBlur,
//   bankOpenAction,
//   bankOptionAction,
//   bankErrorAction,
//   bankSubmitForm,
//   accountOpenAction,
//   accountOption,
//   mainBankError,
// } = bankFormSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { formDetails1 } from "../../../components/home/body/addFunds/form/formDetails";

const initialState = {
  selectorAmount: {
    addForms: {
      amount: "",
      errorAmount: "",
    },
    exterForms: {
      amount: "",
      errorAmount: "",
    },
  },
  selectors: {
    from: {
      isBankOpen: false,
      index: null,
      bankTouched: false,
      bankError: "",
    },
    to: {
      isBankOpen: false,
      index: null,
      bankTouched: false,
      bankError: "",
    },
    main: {
      isBankOpen: false,
      index: null,
      bankTouched: false,
      bankError: "",
    },
    frequency: {
      isBankOpen: false,
      index: null,
      bankTouched: false,
      bankError: "",
    },
  },
  account: formDetails1[0],
  isAccountOpen: false,
};

const bankFormSlice = createSlice({
  name: "bankForm",
  initialState,
  reducers: {
    amountActionChange: (state, action) => {
      const { type, valueInput, emptyMessage } = action.payload;
      const selector = state.selectorAmount[type];
      // this part removes the "," from the value and make it just a number
      const valueAmount = valueInput.replace(/,/g, "");
      // this part are regex they tell the user that i dont want letters or symbols just the number and returns true that the purposed of the test
      if (/^\d*\.?\d*$/.test(valueAmount)) {
        selector.amount = valueAmount;
        selector.errorAmount = "";
      }
      if (!valueAmount.trim()) {
        selector.errorAmount = emptyMessage;
        return;
      }
    },
    amountActionBlur: (state, action) => {
      const { type, valueInput, emptyMessage } = action.payload;
      const selector = state.selectorAmount[type];
      const inputValue = valueInput.replace(/,/g, "");
      const trimValue = inputValue.trim();
      // this part means that when the fiedl is empty as soon as the user leave the field show this
      if (!trimValue) {
        selector.errorAmount = emptyMessage;
        return;
      }
      let num = parseFloat(trimValue);
      if (isNaN(num)) {
        selector.errorAmount = "Invalid Amount";
        return;
      }

      if (num < 25) {
        selector.errorAmount = "The minimum you can transfer is $25";
      } else {
        selector.errorAmount = "";
        const formatNum = num.toLocaleString("en-US", {
          // This makes sure there are at least 2 digits after the decimal.
          minimumFractionDigits: 2,
          // This limits it to no more than 2 digits after the decimal.
          maximumFractionDigits: 2,
        });
        selector.amount = formatNum;
      }
    },
    bankOpenAction: (state, action) => {
      const type = action.payload;
      const selector = state.selectors[type];
      const newState = !selector.isBankOpen;
      selector.isBankOpen = newState;
      if (newState) {
        selector.bankTouched = true;
      }
    },
    bankOptionAction: (state, action) => {
      const { type, bankInfo, selectedBank } = action.payload;
      const selector = state.selectors[type];
      const idx = bankInfo.findIndex((bank) => bank.id === selectedBank);
      selector.index = idx;
      selector.isBankOpen = false;
      selector.bankError = "";
    },
    bankErrorAction: (state, action) => {
      const { type, errorMessage } = action.payload;
      const selector = state.selectors[type];
      selector.isBankOpen = false;
      if (
        selector.bankTouched &&
        (typeof selector.index !== "number" || selector.index < 0)
      ) {
        selector.bankError = errorMessage;
        return;
      }
    },
    mainBankError: (state, action) => {
      const { type, errorMessage } = action.payload;
      const selector = state.selectors[type];
      selector.bankError = errorMessage;
    },
    accountOpenAction: (state) => {
      state.isAccountOpen = !state.isAccountOpen;
    },
    accountOption: (state, action) => {
      state.account = action.payload;
      state.isAccountOpen = false;
    },
    bankSubmitForm: (state) => {
      for (let key in state.selectorAmount) {
        state.selectorAmount[key] = {
          amount: "",
          errorAmount: "",
        };
      }
      for (let key in state.selectors) {
        state.selectors[key] = {
          isBankOpen: false,
          index: null,
          bankTouched: false,
          bankError: "",
        };
      }
    },
  },
});

export default bankFormSlice.reducer;
export const selectedSelectorAmount = (type) => (state) =>
  state.bankForm.selectorAmount[type];
export const selectedSelector = (type) => (state) =>
  state.bankForm.selectors[type];
export const selectedAccountForm = (state) => state.bankForm.account;
export const selectedIsAccountOpen = (state) => state.bankForm.isAccountOpen;

export const {
  amountActionChange,
  amountActionBlur,
  bankOpenAction,
  bankOptionAction,
  bankErrorAction,
  bankSubmitForm,
  accountOpenAction,
  accountOption,
  mainBankError,
} = bankFormSlice.actions;
