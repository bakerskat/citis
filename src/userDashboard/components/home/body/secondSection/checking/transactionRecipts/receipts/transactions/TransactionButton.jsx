import { timeOptions, typeOptions } from "../../transactionReceiptsDetails";
import DropDown from "../dropDown/DropDown";
import { LiaSearchSolid } from "react-icons/lia";

const TransactionButton = ({ context }) => {
  const {
    selectedPeriod,
    setSelectedPeriod,
    searched,
    setSearched,
    selectedType,
    setSelectedType,
    clearPeriod,
  } = context;

  return (
    <>
      <div>
        <h3 className="text-[15px] mb-1 font-semibold text-customGray-400">
          Time Period
        </h3>
        <div className="block gap-4 mb-6 space-y-4 customXlg:space-y-0 customXlg:flex ">
          <DropDown
            options={timeOptions}
            selected={selectedPeriod}
            setSelected={setSelectedPeriod}
          />
          <div className="relative w-full">
            <input
              type="text"
              className="flex items-center justify-between w-full py-3 pl-4 text-lg bg-white border outline-none pr-11 placeholder:italic placeholder:capitalize placeholder:font-semibold border-customGray-600 rounded-xl text-customBlue-500 focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-50 focus:bg-customBlue-400"
              placeholder="search"
              name="searched"
              value={searched}
              onChange={(e) => setSearched(e.target.value)}
            />
            <div className="absolute top-3 right-3 text-customBlue-500">
              <LiaSearchSolid size={28} />
            </div>
          </div>
          <div className="min-w-fit">
            <DropDown
              options={typeOptions}
              selected={selectedType}
              setSelected={setSelectedType}
            />
          </div>
        </div>
        <div className="flex justify-between pb-3 border-b customXlg:hidden border-b-customGray-700">
          <button className="text-base font-extrabold text-customBlue-300">
            Advanced Search
          </button>
          <button
            onClick={clearPeriod}
            className="text-base font-extrabold text-customBlue-500"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default TransactionButton;
