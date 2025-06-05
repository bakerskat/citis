import { useContext } from "react";
import ReceiptsTransaction from "../../checking/transactionRecipts/receipts/ReceiptsTransaction";
import { SavingsTransactionContext } from "../../../../../../context/savingsTransactions/SavingTransactionContext";

const SavingTransaction = () => {
  const context = useContext(SavingsTransactionContext);
  return (
    <div>
      <ReceiptsTransaction context={context} />
    </div>
  );
};

export default SavingTransaction;
