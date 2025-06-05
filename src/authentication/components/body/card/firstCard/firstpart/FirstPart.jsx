import { Link } from "react-router-dom";
import Cards from "../../../../../../assets/home/card.png";

const FirstPart = () => {
  return (
    <div className="items-center gap-10 customMiniTablet:flex text-customGray-400">
      <div className="flex-[1] customMiniTablet:hidden w-full  flex justify-center mb-5">
        <img
          src={Cards}
          alt=""
          className="w-[260px] h-[164px] object-contain"
        />
      </div>
      <div className="flex-[1.1] customMiniTablet:text-start text-sm customMiniTablet:text-base text-center">
        <h3 className="mb-1">
          CITI<sup className="text-[8px] customMiniTablet:text-xs">&reg;</sup>{" "}
          CREDIT CARDS
        </h3>
        <h1 className="text-[32px] customMiniTablet:text-[42px] leading-[1.3] font-extrabold mb-5">
          Choose the right Citi
          <sup className="text-[19.2px] customMiniTablet:text-2xl">
            &reg;
          </sup>{" "}
          credit card for you
        </h1>
        <p>
          Whether you want Cash Back, a Low Intro Rate, Rewards for Costco
          Members, or Great Airline Miles, the choice is all yours.
        </p>
        <button className="w-1/2 py-3 mt-6 font-bold text-white rounded-lg bg-customBlue-500">
          <Link reloadDocument>Learn More</Link>
        </button>
      </div>
      <div className="flex-[1] hidden customMiniTablet:block">
        <img
          src={Cards}
          alt=""
          className="w-[320px] h-[202px] object-contain"
        />
      </div>
    </div>
  );
};

export default FirstPart;
