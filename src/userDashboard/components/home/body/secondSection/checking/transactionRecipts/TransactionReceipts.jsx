import { useContext } from "react";
import ExploreCustomer from "../../summary/thirdSummay/ExploreCustomer";
import ReceiptsTransaction from "./receipts/ReceiptsTransaction";
import { AmountContext } from "../../../../../../context/amount/AmountContext";

const TransactionReceipts = () => {
  const context = useContext(AmountContext);
  return (
    <div className="space-y-5">
      <ExploreCustomer />
      <ReceiptsTransaction context={context} />
    </div>
  );
};

export default TransactionReceipts;
