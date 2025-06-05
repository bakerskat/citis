import MiniTransactionTable from "./MiniTransactionTable";

const MiniTransactionReceipts = ({ context }) => {
  return (
    <div>
      <MiniTransactionTable context={context} />
      <div className="leading-6 text-customXST2 text-customGray-200">
        <p>
          Account activity is provided for information only and is used subject
          to revisions. It is not a substitute for your periodic statement,
          which is the official record of your account
        </p>
      </div>
    </div>
  );
};

export default MiniTransactionReceipts;
