import { useContext } from "react";
import AccountsCard from "../../checking/accounts/AccountsCard";
import { SavingsTransactionContext } from "../../../../../../context/savingsTransactions/SavingTransactionContext";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const AccountSavings = () => {
  const { savingAmount } = useContext(SavingsTransactionContext);
  const numberSavings = savingAmount.toLocaleString();
  const { savingNav } = useContext(GeneralContext);
  const theName = `Citi® Savings Account-${savingNav}`;

  return (
    <div>
      <AccountsCard name={theName} numberChecking={numberSavings} />
    </div>
  );
};

export default AccountSavings;
