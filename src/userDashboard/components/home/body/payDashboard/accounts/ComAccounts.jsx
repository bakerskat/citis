import FirstSection from "./firstSection/FirstSection";
import SecondSection from "./secondSection/SecondSection";

const ComAccounts = () => {
  return (
    <div className="gap-4 space-y-4 customXlg:flex">
      <div className="flex-[2.5] ">
        <FirstSection />
      </div>
      <div className="flex-[1] ">
        <SecondSection />
      </div>
    </div>
  );
};

export default ComAccounts;
