import { savingTransactions } from "../../../../checking/transactionRecipts/transactionReceiptsDetails";
import ReceiptsTransactions from "../transactionComponent/ReceiptsTransactions";

const Savings = () => {
  return (
    <div>
      <ReceiptsTransactions transactions={savingTransactions} />
    </div>
  );
};

export default Savings;
