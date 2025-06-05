import { secondSummaryDetails2 } from "../../summary/secondSummary/secondSummaryDetails";
import AccountInfoCard from "./AccountInfoCard";
// import { accountInfoDetails } from "./accountInfoDetails";
import TransferGrid from "./TransferGrid";
import useExternalArrays from "../../../../../../hooks/useExternalArrays";

const AccountInfo = () => {
  const { accountInfoDetails } = useExternalArrays();
  return (
    <div className="block gap-5 space-y-3 customXlg:flex customXlg:space-y-0 ">
      <div className="flex-1 px-4 pt-4 pb-10 space-y-8 card">
        <h3 className="font-bold text-customGray-400 text-customXST2">
          Account Information
        </h3>
        <div className="grid-cols-2 gap-10 customXlg:grid">
          {accountInfoDetails.map((account) => (
            <AccountInfoCard key={account.id} account={account} />
          ))}
        </div>
      </div>
      <TransferGrid second={secondSummaryDetails2} />
    </div>
  );
};

export default AccountInfo;
