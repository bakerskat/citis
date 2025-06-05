import FirstPart from "./childrenComponent/firstPart/FirstPart";
import SecondPart from "./childrenComponent/secondPart/SecondPart";

const SecondSection = () => {
  return (
    <div className="space-y-4">
      <FirstPart />
      <SecondPart />
    </div>
  );
};

export default SecondSection;
