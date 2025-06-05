import { useContext } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GeneralContext } from "../../../../../../../context/generalValue/GeneralValueContext";

const Selected2 = ({ setModal }) => {
  const { checkingNav } = useContext(GeneralContext);
  return (
    <>
      <div className="relative card">
        <div className="flex ">
          <div className="items-center justify-between w-full pt-3 pl-4 pr-4 space-y-3 customTablet1:pr-10 customTablet1:flex customXlg:pr-14 customTablet1:space-y-0">
            <div className="items-center block gap-2 text-start customMiniTablet:text-center customTablet1:text-left customTablet1:flex customXlg:gap-4 customTablet1:space-y-0">
              <FaMoneyBill
                size={24}
                className="mb-2 w-max customMiniTablet:w-full text-customBlue-500 customTablet1:w-max"
              />
              <div className="mb-4 space-y-1 customTablet1:mb-0">
                <p className="font-light tracking-widest text-customXST text-customGray-200 ">
                  Checking-{checkingNav}
                </p>
                <h3 className="pb-2 border-b text-customGray-400 customTablet1:border-b-0 customTablet1:pb-0 border-customGray-500">
                  Enhanced Direct Deposit
                </h3>
              </div>
              <span className="hidden customTablet1:block customTablet1:border-r customTablet1:h-[70px]  border-customGray-500"></span>
              <div className="">
                <h3 className="font-light tracking-[4px] text-customGray-400">
                  Earn $100
                </h3>
                <p className="font-light text-customXST text-customGray-200 ">
                  Enjoy a cash bonus. Activities required.
                </p>
              </div>
            </div>
            <div className="justify-center block customMiniTablet:flex">
              <button className="px-5 py-1 font-semibold text-white rounded-lg text-customXST bg-customBlue-500">
                See Offer
              </button>
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

export default Selected2;
