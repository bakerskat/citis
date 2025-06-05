import FirstSection from "./firstSection/FirstSection";
import SecondSection from "./secondSection/SecondSection";

const WireTransferCom = () => {
  return (
    <div className="gap-6  customXlg:flex">
      <div className="flex-[2.5] ">
        <FirstSection />
      </div>
      <div className="flex-[1] ">
        <SecondSection />
      </div>
    </div>
  );
};

export default WireTransferCom;
