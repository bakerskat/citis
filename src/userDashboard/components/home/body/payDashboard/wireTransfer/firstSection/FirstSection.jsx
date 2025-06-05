import FirstCard from "./cards/FirstCard";
import FourthCard from "./cards/FourthCard";
import SecondCard from "./cards/SecondCard";
import ThirdCard from "./cards/ThirdCard";

const FirstSection = () => {
  return (
    <div className="mb-4 space-y-4">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
    </div>
  );
};

export default FirstSection;
