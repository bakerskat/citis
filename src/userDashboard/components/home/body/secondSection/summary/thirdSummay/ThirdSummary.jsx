import { CiCreditCard2 } from "react-icons/ci";
import { SlLock } from "react-icons/sl";
import { Link } from "react-router-dom";
import ExploreCustomer from "./ExploreCustomer";

const ThirdSummary = () => {
  return (
    <div className="space-y-5">
      <div className="items-center justify-between block gap-4 px-6 py-3 space-y-2 customXlg:flex card text-customGray-400 customXlg:space-y-0">
        <h2 className="font-bold min-w-fit">
          Ready to Meet Your Team at Citi?
        </h2>
        <p className=" text-customXST1">
          Speak with one of our bankers about getting the most out of your Citi
          accounts
        </p>
        <button className="px-2 py-1 font-bold text-white rounded-xl min-w-max bg-customBlue-500 text-customXST">
          Get Connected
        </button>
      </div>
      <ExploreCustomer />
      <div className="relative items-center block p-4 customMiniTablet:flex card">
        <div className="absolute top-0 left-0 w-full p-4 text-center customMiniTablet:w-max customMiniTablet:h-full rounded-tl-xl rounded-tr-xl customMiniTablet:rounded-tr-none customMiniTablet:rounded-bl-xl bg-customBlue-900 text-customBlue-500 ">
          <SlLock
            size={28}
            className="relative leading-10 top-3 text-center customMiniTablet:top-[50%] left-3 customMiniTablet:left-[50%] -translate-x-[50%] -translate-y-[50%]"
          />
        </div>
        <div className="relative mb-3 mr-2 space-y-1 customMiniTablet:mb-0 ml-9 customMiniTablet:ml-14 text-customGray-400">
          <h3 className="mt-1 mb-8 font-extrabold customMiniTablet:my-0">
            Security Tip: Account Protection
          </h3>
          <p className="text-sm font-light customMiniTablet:ml-0 -ml-9">
            Make check-ins a habit. Signing on weekly through the mobile app
            makes it easy to quickly spot any unusual activiy.
            <Link className="underline text-customBlue-500" to="/">
              More Security tips
            </Link>
          </p>
        </div>
        <button className="w-full px-4 py-2 font-bold text-white rounded-lg customMiniTablet:w-max min-w-fit bg-customBlue-500">
          Use Citi Mobile&reg;
        </button>
      </div>
    </div>
  );
};

export default ThirdSummary;
