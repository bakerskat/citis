import { useEffect, useRef } from "react";
import {
  bankErrorAction,
  bankOptionAction,
  selectedSelector,
} from "../redux/feature/bankForm/bankFormSlice";
import { useDispatch, useSelector } from "react-redux";

const useSelectedAccounts = (type, error, allSelectedAccount) => {
  const { isBankOpen, index, bankError } = useSelector(selectedSelector(type));

  const dispatch = useDispatch();
  const wrappedRef = useRef();

  useEffect(() => {
    const handleSelect = (e) => {
      const isWrapped =
        wrappedRef.current && !wrappedRef.current.contains(e.target);
      if (isWrapped) {
        dispatch(bankErrorAction({ type: type, errorMessage: error }));
      }
    };

    document.addEventListener("mousedown", handleSelect);

    return () => document.removeEventListener("mousedown", handleSelect);
  }, [dispatch, type, error]);
  const handleSelectedAccount = (selectedAcc) => {
    dispatch(
      bankOptionAction({
        type: type,
        bankInfo: allSelectedAccount,
        selectedBank: selectedAcc,
      })
    );
  };
  return {
    isBankOpen,
    index,
    bankError,
    handleSelectedAccount,
    dispatch,
    wrappedRef,
  };
};

export default useSelectedAccounts;
