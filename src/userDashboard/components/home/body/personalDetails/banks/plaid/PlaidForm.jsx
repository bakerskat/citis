import { LiaSearchSolid } from "react-icons/lia";

const PlaidForm = ({ searched, setSearched }) => {
  return (
    <>
      <div className="mt-6 mb-5">
        <h1 className="text-[23px] mb-3 font-extrabold text-customGray-900">
          Select your institution
        </h1>
        <div className="relative">
          <span className="absolute flex items-center justify-center h-full w-14">
            <LiaSearchSolid size={23} />
          </span>
          <input
            autoFocus
            type="text"
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            placeholder="Search"
            className="w-full h-full py-3.5   outline-none pl-12 rounded-xl border border-customGray-600 focus:border-customGray-1003 transistion2"
          />
        </div>
      </div>
    </>
  );
};

export default PlaidForm;
