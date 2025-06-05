import { useCallback, useContext, useEffect, useState } from "react";
import FormInput from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBankInfo,
  selectedBankInfo,
} from "../../../../../redux/feature/bank/bankSlice";
import {
  accountOption,
  amountActionBlur,
  bankSubmitForm,
  mainBankError,
  selectedAccountForm,
  selectedIsAccountOpen,
  selectedSelectorAmount,
} from "../../../../../redux/feature/bankForm/bankFormSlice";
import useSelectedAccounts from "../../../../../hooks/useSelectedAccounts";
import { useNavigate } from "react-router-dom";
import useFormateDate from "../../../../../hooks/useFormateDate";
import { addTransferInfo } from "../../../../../redux/feature/transfer/transferSlice";
import { GeneralContext } from "../../../../../context/generalValue/GeneralValueContext";
import { AnimatePresence } from "framer-motion";
import RestrictArea from "../../payments&transfers/yourExternalAccounts/forms/RestrictArea";

const Form = () => {
  const [restrictionVal, setRestrictionVal] = useState(false);
  const bankInfo = useSelector(selectedBankInfo);
  const { amount, errorAmount } = useSelector(
    selectedSelectorAmount("addForms")
  );
  const isAccountOpen = useSelector(selectedIsAccountOpen);
  const account = useSelector(selectedAccountForm);
  const { checkingNav, savingNav } = useContext(GeneralContext);
  const { isBankOpen, index, bankError, handleSelectedAccount, wrappedRef } =
    useSelectedAccounts("main", "Please select or add an account", bankInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nowDate = new Date();
  const laterDate = new Date();

  laterDate.setDate(nowDate.getDate() + 3);

  const { formateDate } = useFormateDate();

  const startDate = formateDate(nowDate);
  const endDate = formateDate(laterDate);

  const handleSelectedAccounts = useCallback(
    (selectedAccountForm) => {
      dispatch(accountOption(selectedAccountForm));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getAllBankInfo());
  }, [dispatch]);

  const handleSubmit = useCallback(async () => {
    // setLoading(true);
    try {
      let hasError = false;

      // Validate amount
      if (!amount.trim()) {
        dispatch(
          amountActionBlur({
            type: "addForms",
            valueInput: amount,
            emptyMessage: "Please enter an amount",
          })
        );
        hasError = true;
      }

      if (amount < 25) {
        dispatch(
          amountActionBlur({
            type: "addForms",
            valueInput: amount,
            emptyMessage: "Please enter an amount",
          })
        );
        hasError = true;
      }

      // Validate bank selection
      if (typeof index !== "number" || index < 0) {
        dispatch(
          mainBankError({
            type: "main",
            errorMessage: "Please select or add an account",
          })
        );
        hasError = true;
      }

      if (hasError) return;
      let itemsAdded = {
        totalAmount: amount,
        fromCard: bankInfo[index]?.cardNumeber || "",
        fromAccount: bankInfo[index]?.bankName || "",
        toAccount: account.label || "",
        fromRouting: bankInfo[index]?.account || "",
        fromRoutingType: bankInfo[index]?.accountType || "",
        toRouting: bankInfo[index]?.account || "",
        toRoutingType: bankInfo[index]?.accountType || "",
        frequency: "One Time",
        nowDate: startDate,
        laterDate: endDate,
        timeStamp: new Date().toISOString(),
      };
      const toSelectAcc = account.label;
      if (toSelectAcc === `Checking-${checkingNav}`) {
        setTimeout(() => {
          setRestrictionVal(true);
        }, 1000);
      } else if (toSelectAcc === `Citi® Savings Account-${savingNav}`) {
        setTimeout(() => {
          setRestrictionVal(true);
        }, 1000);
      } else {
        await dispatch(addTransferInfo(itemsAdded));
        navigate("/confirmTransFer");
      }

      dispatch(bankSubmitForm());

      dispatch(bankSubmitForm());
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, [
    dispatch,
    amount,
    index,
    bankInfo,
    startDate,
    endDate,
    account,
    navigate,
    checkingNav,
    savingNav,
  ]);

  return (
    <div>
      <AnimatePresence>
        {restrictionVal && <RestrictArea cancel={setRestrictionVal} />}
      </AnimatePresence>
      <FormInput
        handleSelectedAccount={handleSelectedAccounts}
        handleSubmit={handleSubmit}
        amount={amount}
        selectedAccount={account}
        isAccountOpen={isAccountOpen}
        isBankOpen={isBankOpen}
        bankInfo={bankInfo}
        handleAllBankInfo={handleSelectedAccount}
        allSelectedBankInfo={bankInfo[index]}
        errorAmount={errorAmount}
        bankError={bankError}
        wrappRef={wrappedRef}
      />
    </div>
  );
};

export default Form;
