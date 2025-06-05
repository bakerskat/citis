import FirstSection from "../summary/firstSectionSummary/FirstSection";
import ExploreCustomer from "../summary/thirdSummay/ExploreCustomer";
import AccountSavings from "./accounts/AccountSavings";
import RoutingInfo from "./routingInfo/RoutingInfo";
import SavingTransaction from "./savingTransaction/SavingTransaction";
import SpendAndSave from "./spendAndSave/SpendAndSave";

const SavingsAcc = () => {
  return (
    <div className="space-y-5">
      <FirstSection />
      <AccountSavings />
      <RoutingInfo />
      <ExploreCustomer />
      <SavingTransaction />
      <SpendAndSave />
    </div>
  );
};

export default SavingsAcc;
