import PageTitle from "../../../../../../PageTitle";
import useTitle from "../../../../../hooks/useTitle";
import ScrollTop from "../../../../ScrollTop";
import ExternalForms from "./forms/ExternalForms";
import ExternalHeader from "./header/ExternalHeader";

const CompYourExternalAccounts = () => {
  useTitle("Transfer  Between Accounts");
  return (
    <>
      <PageTitle title="Transfer  Between Accounts" />
      <ScrollTop />
      <div className="flex items-center justify-center px-5 py-8 customTablet1:py-24">
        <div className="customXlg:ml-12  customTablet1:px-24  customXlg:w-[945px] customXlg:px-0">
          <ExternalHeader />
          <ExternalForms />
        </div>
      </div>
    </>
  );
};

export default CompYourExternalAccounts;
