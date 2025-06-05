import useTitle from "../../../../hooks/useTitle";
import ScrollTop from "../../../ScrollTop";
import Form from "./form/Form";

const AddfundsCom = () => {
  useTitle("Add Funds");
  return (
    <>
      <ScrollTop />
      <div className="flex items-center justify-center py-10 mx-auto px-11 customTablet1:container customTablet1:pl-64 customTablet1:pr-0 customXlg:px-64">
        <div className="space-y-5 font-light text-customGray-400">
          <h1 className="customTablet1:text-[42px] text-[26px]  ">Add Funds</h1>
          <p className="customTablet1:pr-10 customXlg:pr-0">
            Tell us how much you want to transfer and from which account.
            We&apos;ve provided your account information on file, or you can
            transfer from an external account
          </p>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddfundsCom;
