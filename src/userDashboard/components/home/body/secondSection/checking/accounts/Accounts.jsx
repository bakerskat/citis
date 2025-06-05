import { useContext } from "react";
import AccountsCard from "./AccountsCard";
import { AmountContext } from "../../../../../../context/amount/AmountContext";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const Accounts = () => {
  const context = useContext(AmountContext);
  const { checkingNav } = useContext(GeneralContext);

  if (!context) {
    return null;
  }

  const { checkingAmount } = context;
  const numberChecking = checkingAmount.toLocaleString();
  const theName = `Checking-${checkingNav}`;
  return (
    <div>
      <AccountsCard name={theName} numberChecking={numberChecking} />
    </div>
  );
};

export default Accounts;
