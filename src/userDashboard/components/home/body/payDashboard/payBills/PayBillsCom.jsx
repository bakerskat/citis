import FirstSection from "./paybillChild/payBillFirstSection/FirstSection";
import SecondSection from "./paybillChild/payBillSecondSection/SecondSection";

const PayBillsCom = () => {
  return (
    <div>
      <div className="gap-12  customXlg:flex">
        <div className="flex-[2.8] ">
          <FirstSection />
        </div>
        <div className="flex-[1] ">
          <SecondSection />
        </div>
      </div>
    </div>
  );
};

export default PayBillsCom;
