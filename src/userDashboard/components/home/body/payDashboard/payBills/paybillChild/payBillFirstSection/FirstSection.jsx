import FirstCard from "./firstCard/FirstCard";
import SecondCard from "./secondCard/SecondCard";
import ThirdCard from "./thirdCard/ThirdCard";

const FirstSection = () => {
  return (
    <div className="mb-10 space-y-4">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
};

export default FirstSection;
