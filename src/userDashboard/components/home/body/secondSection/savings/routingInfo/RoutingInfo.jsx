import { BsChevronRight } from "react-icons/bs";
import TransferGrid from "../../checking/accountInfo/TransferGrid";
import { secondSummaryDetails3 } from "../../summary/secondSummary/secondSummaryDetails";
import RoutineCard from "./RoutineCard";
import { VscPercentage } from "react-icons/vsc";
import useExternalArrays from "../../../../../../hooks/useExternalArrays";

const RoutingInfo = () => {
  const { routineDetails } = useExternalArrays();
  return (
    <div className="block gap-5 space-y-3 customXlg:flex customXlg:space-y-0 ">
      <div className="flex-1 card">
        <div className="p-4">
          <h3 className="mb-3 font-bold text-customGray-400 text-customXST2">
            Account Information
          </h3>
          <div>
            {routineDetails.map((account) => (
              <RoutineCard key={account.id} account={account} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between p-3 bg-customBlue-800 text-customBlue-300">
          <div className="flex items-center gap-1 text-customBlue-500">
            <VscPercentage size={35} />
            <p className="text-sm font-extrabold text-customBlue-300">
              View Rate & Interest Details
            </p>
          </div>
          <BsChevronRight size={20} />
        </div>
      </div>
      <TransferGrid second={secondSummaryDetails3} allGap="allGap" />
    </div>
  );
};

export default RoutingInfo;
