import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../feature/modal/modalSlice";
import transactionReducer from "../feature/transaction/transactionSlice";
import securityReducer from "../feature/security/securitySlice";
import bankReducer from "../feature/bank/bankSlice";
import bankFormReducer from "../feature/bankForm/bankFormSlice";
import bankDatabaseReducer from "../feature/bankDatabase/bankDatabaseSlice";
import transferReducer from "../feature/transfer/transferSlice";
import authReducer from "../feature/auth/authSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    transaction: transactionReducer,
    security: securityReducer,
    bank: bankReducer,
    bankForm: bankFormReducer,
    bankDatabase: bankDatabaseReducer,
    transfer: transferReducer,
    auth: authReducer,
  },
});

export default store;
