import FirstSection from "./zelleChildren/firstSection/FirstSection";
import SecondSection from "./zelleChildren/secondSection/SecondSection";

const ZelleCom = () => {
  return (
    <div className="gap-14 customXlg:flex">
      <div className="flex-[1] ">
        <FirstSection />
      </div>
      <div className="flex-[2] ">
        <SecondSection />
      </div>
    </div>
  );
};

export default ZelleCom;
