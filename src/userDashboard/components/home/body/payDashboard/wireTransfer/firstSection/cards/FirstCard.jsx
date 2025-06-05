import yelloGirl from "../../../../../../../../assets/payDashboard/wire/wire.svg";

const FirstCard = () => {
  return (
    <div className="justify-between hidden gap-10 p-5 customTablet1:flex card2">
      <div className="flex flex-[2]">
        <div className="w-full">
          <img src={yelloGirl} alt="" />
        </div>
        <h2 className="text-[21px] text-customGray-400 font-bold">
          Protect Your Account from Scams and Fraud
        </h2>
      </div>
      <div className="flex-[2.7] flex">
        <p className="pl-3 text-sm border-l text-customGray-400 border-customGray-1000">
          Don&apos;t make yourself an easy target. Keep your accounts safe with
          the latest fraud prevention tips and tricks.
        </p>
        <div className="flex items-center justify-center w-full">
          <button className="px-5 py-2 text-sm font-bold rounded-lg text-customBlue-300 bg-customBlue-800 hover:bg-customBlue-200 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
