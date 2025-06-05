import { useEffect, useState } from "react";
import { transactions } from "../../components/home/body/secondSection/checking/transactionRecipts/transactionReceiptsDetails";
import {
  calculatedTransaction,
  selectedCheckingAmount,
  selectedUpdatedTransaction,
} from "../../redux/feature/transaction/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import useFormateDate from "../../hooks/useFormateDate";
import { AmountContext } from "./AmountContext";

const AmountProvider = ({ children }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [selectedType, setSelectedType] = useState("all");
  const [searched, setSearched] = useState("");
  const checkingAmount = useSelector(selectedCheckingAmount);
  const updatedTransaction = useSelector(selectedUpdatedTransaction);
  const dispactch = useDispatch();
  const { formateDate, cutOffDate, formateEndDate, formateStartDate } =
    useFormateDate(selectedPeriod);

  useEffect(() => {
    dispactch(calculatedTransaction(transactions));
  }, [dispactch]);

  // this part means that the all the fiter date must greater and equal to the cutoffdate which we discuss earleir and anything less than that shoudl be cutoff
  const filterTransaction = updatedTransaction
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
      <AmountContext.Provider
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
          checkingAmount,
          clearPeriod,
        }}
      >
        {children}
      </AmountContext.Provider>
    </>
  );
};

export default AmountProvider;
