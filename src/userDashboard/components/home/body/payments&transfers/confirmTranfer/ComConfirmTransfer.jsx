import ScrollTop from "../../../../ScrollTop";
import ExternalHeader from "../yourExternalAccounts/header/ExternalHeader";
import FinalTransfer from "./finalTransfer/FinalTransfer";

const ComConfirmTransfer = () => {
  return (
    <>
      <ScrollTop />
      <div className="flex items-center justify-center px-5 py-8 customTablet1:py-24">
        <div className="w-full customXlg:ml-12  customTablet1:px-24  customXlg:w-[990px] customXlg:px-0 text-customGray-400">
          <ExternalHeader />
          <FinalTransfer />
        </div>
      </div>
    </>
  );
};

export default ComConfirmTransfer;
