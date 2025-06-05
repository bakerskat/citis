import { transactions } from "../../../../checking/transactionRecipts/transactionReceiptsDetails";
import ReceiptsTransactions from "../transactionComponent/ReceiptsTransactions";

const Checkings = () => {
  return (
    <div>
      <ReceiptsTransactions transactions={transactions} />
    </div>
  );
};

export default Checkings;
