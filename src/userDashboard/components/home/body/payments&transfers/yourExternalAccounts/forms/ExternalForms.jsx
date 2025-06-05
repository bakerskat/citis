import { useDispatch, useSelector } from "react-redux";
import {
  amountActionBlur,
  bankSubmitForm,
  mainBankError,
  selectedSelectorAmount,
} from "../../../../../../redux/feature/bankForm/bankFormSlice";
import ExternalFormCard from "./ExternalFormCard";
import useExternalArrays from "../../../../../../hooks/useExternalArrays";
import {
  getAllBankInfo,
  selectedBankInfo,
} from "../../../../../../redux/feature/bank/bankSlice";
import useSelectedAccounts from "../../../../../../hooks/useSelectedAccounts";
import { frequency } from "../externalDetails";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {
  addTransferInfo,
  selectedTransferInfo,
} from "../../../../../../redux/feature/transfer/transferSlice";
import {
  selectedCheckingAmount,
  selectedSavingAmount,
} from "../../../../../../redux/feature/transaction/transactionSlice";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";
import { AnimatePresence } from "framer-motion";
import RestrictArea from "./RestrictArea";

const ExternalForms = () => {
  const [restrictionVal, setRestrictionVal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { checkingNav, savingNav } = useContext(GeneralContext);
  const bankInfo = useSelector(selectedBankInfo);
  const checkingAmount = useSelector(selectedCheckingAmount);
  const savingAmount = useSelector(selectedSavingAmount);
  const { accountAvailable } = useExternalArrays();
  const { amount, errorAmount } = useSelector(
    selectedSelectorAmount("exterForms")
  );
  const transferInfo = useSelector(selectedTransferInfo);
  const allSelectedAccount = [...accountAvailable, ...bankInfo];
  const { isBankOpen, index, bankError, handleSelectedAccount, wrappedRef } =
    useSelectedAccounts(
      "from",
      "Please choose a Transfer From account to continue.",
      allSelectedAccount
    );
  const {
    isBankOpen: isBankOpenTo,
    index: indexTo,
    bankError: bankErrorTo,
    handleSelectedAccount: handleSelectedAccountTo,
    wrappedRef: wrappedRefTo,
  } = useSelectedAccounts(
    "to",
    "Please choose a Transfer To account to continue.",
    allSelectedAccount
  );
  const {
    isBankOpen: isBankOpenFr,
    index: indexFr,
    bankError: bankErrorFr,
    handleSelectedAccount: handleSelectedAccountFr,
    wrappedRef: wrappedRefFr,
  } = useSelectedAccounts("frequency", "Please select a frequency.", frequency);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllBankInfo());
  }, [dispatch]);

  const handleSubmit = async (now, later, recurring) => {
    setLoading(true);
    try {
      let hasError = false;

      // Validate amount
      if (!amount.trim()) {
        dispatch(
          amountActionBlur({
            type: "exterForms",
            valueInput: amount,
            emptyMessage:
              "Please enter a dollar amount to proceed with this transfer.",
          })
        );
        hasError = true;
      }

      if (amount < 25) {
        dispatch(
          amountActionBlur({
            type: "exterForms",
            valueInput: amount,
            emptyMessage:
              "Please enter a dollar amount to proceed with this transfer.",
          })
        );
        hasError = true;
      }

      // Validate bank selection

      if (typeof index !== "number" || index < 0) {
        dispatch(
          mainBankError({
            type: "from",
            errorMessage: "Please choose a Transfer From account to continue.",
          })
        );
        hasError = true;
      }
      if (typeof indexTo !== "number" || indexTo < 0) {
        dispatch(
          mainBankError({
            type: "to",
            errorMessage: "Please choose a Transfer To account to continue.",
          })
        );
        hasError = true;
      }
      if (recurring && (typeof indexFr !== "number" || indexFr < 0)) {
        dispatch(
          mainBankError({
            type: "frequency",
            errorMessage: "Please select a frequency.",
          })
        );
        hasError = true;
      }

      if (hasError) return;

      let itemsAdded = {
        totalAmount: amount,
        fromAccount: allSelectedAccount[index]?.bankName || "",
        toAccount: allSelectedAccount[indexTo]?.bankName || "",
        fromRouting: allSelectedAccount[index]?.account || "",
        fromRoutingType: allSelectedAccount[index]?.accountType || "",
        toRouting: allSelectedAccount[indexTo]?.account || "",
        toRoutingType: allSelectedAccount[indexTo]?.accountType || "",
        frequency: frequency[indexFr]?.bankName || "One Time",
        nowDate: now,
        laterDate: later,
      };
      const toSelectAcc = allSelectedAccount[indexTo]?.bankName;
      if (
        toSelectAcc ===
        `Checking:${checkingNav} $${checkingAmount.toLocaleString()} available`
      ) {
        setTimeout(() => {
          setRestrictionVal(true);
        }, 1000);
      } else if (
        toSelectAcc ===
        `Citi® Savings:${savingNav} $${savingAmount.toLocaleString()} available`
      ) {
        setTimeout(() => {
          setRestrictionVal(true);
        }, 1000);
      } else {
        await dispatch(addTransferInfo(itemsAdded));
        navigate("/confirmTransFer");
      }
      dispatch(bankSubmitForm());
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" text-customGray-400">
      <AnimatePresence>
        {restrictionVal && <RestrictArea cancel={setRestrictionVal} />}
      </AnimatePresence>
      <ExternalFormCard
        amount={amount}
        errorAmount={errorAmount}
        dispatch={dispatch}
        isOpen={isBankOpen}
        selectedAccount={allSelectedAccount[index]}
        selectedAccountTo={allSelectedAccount[indexTo]}
        selectedAccountFr={frequency[indexFr]}
        handleSelectedAccount={handleSelectedAccount}
        allSelectedAccount={allSelectedAccount}
        wrappedRef={wrappedRef}
        bankError={bankError}
        isBankOpenTo={isBankOpenTo}
        indexTo={indexTo}
        bankErrorTo={bankErrorTo}
        handleSelectedAccountTo={handleSelectedAccountTo}
        wrappedRefTo={wrappedRefTo}
        typeFrom="from"
        typeTO="to"
        isBankOpenFr={isBankOpenFr}
        indexFr={indexFr}
        bankErrorFr={bankErrorFr}
        handleSelectedAccountFr={handleSelectedAccountFr}
        wrappedRefFr={wrappedRefFr}
        typeFr="frequency"
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
};

export default ExternalForms;
