import AccountInfo from "./accountInfo/AccountInfo";
import FirstSection from "../summary/firstSectionSummary/FirstSection";
import Accounts from "./accounts/Accounts";
import TransactionReceipts from "./transactionRecipts/TransactionReceipts";

const Checking = () => {
  return (
    <div className="space-y-5">
      <FirstSection />
      <Accounts />
      <AccountInfo />
      <TransactionReceipts />
    </div>
  );
};

export default Checking;
