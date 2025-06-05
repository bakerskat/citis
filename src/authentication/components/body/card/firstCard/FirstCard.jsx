import { cardInfo, cardInfo1 } from "./firstCardDetails";
import FirstPart from "./firstpart/FirstPart";
import SecondPart from "./secondPart/SecondPart";
import ThirdPart from "./thirdPart/ThirdPart";

const FirstCard = () => {
  return (
    <>
      <div className="w-full btn8 bg-customGray-1027">
        <div className="flex gap-4 px-5 pt-4 pb-10 customXlg:container customXlg:mx-auto">
          <div className="flex-[2]">
            <FirstPart />
          </div>
          <div className="flex-[1] hidden customTablet1:block">
            <SecondPart />
          </div>
        </div>
      </div>
      <div className="customXlg:container customXlg:mx-auto">
        <div className="hidden customMiniTablet:block">
          <ThirdPart cardSide={cardInfo} />
        </div>
        <div className="block customMiniTablet:hidden">
          <ThirdPart cardSide={cardInfo1} />
        </div>
      </div>
    </>
  );
};

export default FirstCard;
