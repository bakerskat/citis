import { useContext } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GeneralContext } from "../../../../../../../context/generalValue/GeneralValueContext";

const Selected1 = ({ setModal }) => {
  const { savingNav } = useContext(GeneralContext);
  return (
    <>
      <div className="relative pt-4 pr-5  h-[120px] card">
        <div className="flex ">
          <div>
            <div className="flex gap-4 px-3">
              <FaMoneyBill size={24} className="mt-8 text-customBlue-500" />
              <div className="w-[190px] mt-5 space-y-1">
                <p className="font-light tracking-widest text-customXST text-customGray-200 ">
                  Citi&reg; Savings Acc...-{savingNav}
                </p>
                <h3 className="text-customGray-400">
                  Citi Certificate of Deposit
                </h3>
              </div>
              <span className="border-r h-[90px] border-customGray-500"></span>
              <div className="w-[110px] mt-6">
                <h3 className="font-extrabold tracking-widest text-customGray-400">
                  Citi CD
                </h3>
                <p className="font-light tracking-tighter text-customXST text-customGray-200 ">
                  Member FDIC
                </p>
              </div>
              <span className="border-r h-[90px] border-customGray-500"></span>
              <div className="w-[160px]">
                <p className="font-light text-customXST text-customGray-200 ">
                  Lock in a fixed-rate CD & enjoy the peace of mind that comes
                  with a guaranteed interest rate for the term of the CD you
                  open.
                </p>
              </div>
              <div>
                <button className="px-4 py-1 ml-6 font-semibold text-white rounded-lg mt-7 text-customXST bg-customBlue-500">
                  See Options
                </button>
              </div>
            </div>
          </div>
        </div>
        <button>
          <IoClose
            size={20}
            className="absolute cursor-pointer top-3 right-3 hover:text-customBlue-200"
            onClick={() => setModal(false)}
          />
        </button>
      </div>
    </>
  );
};

export default Selected1;
