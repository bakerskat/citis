import FirstCard from "./allCards/firstCard/FirstCard";
import SecondCard from "./allCards/secondCard/SecondCard";
import ThirdCard from "./allCards/thirdCard/ThirdCard";

const FirstSection = () => {
  return (
    <div className="space-y-4 ">
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </div>
  );
};

export default FirstSection;
