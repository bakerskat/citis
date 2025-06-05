import TransactionTable from "./TransactionTable";
import TransactionButton from "../TransactionButton";

const Transactions = ({ context }) => {
  return (
    <div>
      <TransactionButton context={context} />
      <div>
        <TransactionTable context={context} />
      </div>
      <div className="px-4 leading-6 text-customXST2 text-customGray-200">
        <p>
          Account activity is provided for information only and is used subject
          to revisions. It is not a substitute for your periodic statement,
          which is the official record of your account
        </p>
      </div>
    </div>
  );
};

export default Transactions;
