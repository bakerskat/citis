import PageTitle from "../../../../../../PageTitle";
import FirstSection from "./firstSectionSummary/FirstSection";
import SecondSummary from "./secondSummary/SecondSummary";
import ThirdSummary from "./thirdSummay/ThirdSummary";

const SummaryComponnets = () => {
  return (
    <>
      <PageTitle title={"Citibank Online"} />
      <div className="space-y-4">
        <FirstSection />
        <SecondSummary />
        <ThirdSummary />
      </div>
    </>
  );
};

export default SummaryComponnets;
