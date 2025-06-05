import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkingAmount: "",
  updatedTransaction: [],
  savingAmount: "",
  updateSavingTransaction: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    calculatedTransaction: (state, action) => {
      let returningBalance = 0;
      let sortedTransaction = action.payload
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((transac) => {
          if (transac.type === "debit") {
            returningBalance -= Number(transac.amount);
          } else if (transac.type === "credit") {
            returningBalance += Number(transac.amount);
          }

          return {
            ...transac,
            balance: returningBalance,
          };
        });
      state.updatedTransaction = sortedTransaction;
      state.checkingAmount = returningBalance;
    },
    calculatingSavingTransaction: (state, action) => {
      let returningBalance = 0;
      let sortedTransaction = action.payload
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((transac) => {
          if (transac.type === "debit") {
            returningBalance -= Number(transac.amount);
          } else if (transac.type === "credit") {
            returningBalance += Number(transac.amount);
          }

          return {
            ...transac,
            balance: returningBalance,
          };
        });
      state.updateSavingTransaction = sortedTransaction;
      state.savingAmount = returningBalance;
    },
  },
});

export default transactionSlice.reducer;
export const selectedUpdatedTransaction = (state) =>
  state.transaction.updatedTransaction;
export const selectedCheckingAmount = (state) =>
  state.transaction.checkingAmount;
export const selectedUpdateSavingTransaction = (state) =>
  state.transaction.updateSavingTransaction;
export const selectedSavingAmount = (state) => state.transaction.savingAmount;
export const { calculatedTransaction, calculatingSavingTransaction } =
  transactionSlice.actions;
