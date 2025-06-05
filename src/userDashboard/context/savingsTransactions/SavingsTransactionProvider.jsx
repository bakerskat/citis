import { useEffect, useState } from "react";
import {
  calculatingSavingTransaction,
  selectedSavingAmount,
  selectedUpdateSavingTransaction,
} from "../../redux/feature/transaction/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import useFormateDate from "../../hooks/useFormateDate";
import { savingTransactions } from "../../components/home/body/secondSection/checking/transactionRecipts/transactionReceiptsDetails";
import { SavingsTransactionContext } from "./SavingTransactionContext";

const SavingsTransactionProvider = ({ children }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [selectedType, setSelectedType] = useState("all");
  const [searched, setSearched] = useState("");
  const savingAmount = useSelector(selectedSavingAmount);
  const updatedSavingTransaction = useSelector(selectedUpdateSavingTransaction);
  const dispactch = useDispatch();
  const { formateDate, cutOffDate, formateEndDate, formateStartDate } =
    useFormateDate(selectedPeriod);

  useEffect(() => {
    dispactch(calculatingSavingTransaction(savingTransactions));
  }, [dispactch]);

  const filterTransaction = updatedSavingTransaction
    .filter((transac) => new Date(transac.date) >= cutOffDate)
    .filter(
      (transac) => selectedType === "all" || transac.type === selectedType
    )
    .filter((transac) =>
      transac.description.toLowerCase().includes(searched.toLowerCase())
    );

  const clearPeriod = () => {
    setSelectedPeriod("30");
    setSelectedType("all");
    setSearched("");
  };

  return (
    <>
      <SavingsTransactionContext.Provider
        value={{
          selectedPeriod,
          setSelectedPeriod,
          searched,
          setSearched,
          selectedType,
          setSelectedType,
          filterTransaction,
          formateStartDate,
          formateEndDate,
          formateDate,
          savingAmount,
          clearPeriod,
        }}
      >
        {children}
      </SavingsTransactionContext.Provider>
    </>
  );
};

export default SavingsTransactionProvider;
