import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import Security from "../../../../../security/Security";

const FormLink = ({ ready, header, add, choose, img }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-6 pt-4 pb-8 card2 ">
      <div>
        <h2 className="mb-4 header">{ready}</h2>
        <div>
          <h3 className="mb-4 text-sm text-customGray-400">{header}</h3>
          <div className="flex items-center justify-between gap-5">
            <div className="relative flex items-center w-full gap-4 flex-[6]">
              <div className="flex flex-col ">
                <span className="w-[50px] h-[50px] bg-customBlue-500 rounded-[50%] text-center leading-[50px] text-white font-bold">
                  1
                </span>
                <div className="relative flex justify-center w-full h-7">
                  <span className="absolute w-1 h-16 bg-customGray-300 "></span>
                </div>
                <span className="w-[50px] h-[50px] bg-customGray-300 rounded-[50%] text-center leading-[50px] text-white font-bold mt-5 z-10 ">
                  2
                </span>
              </div>
              <div className="w-full text-sm space-y-9 customMiniTablet:text-base">
                <div
                  className="flex w-full gap-3 p-4 border border-customGray-1000 rounded-xl linkBtn hover:no-underline"
                  onClick={() => setIsOpen(true)}
                >
                  <h2>{add}</h2>
                  <GoChevronRight size={24} />
                </div>
                <div className="w-full p-4 font-bold border border-customGray-1000 rounded-xl text-customGray-1000">
                  <h2>{choose}</h2>
                </div>
              </div>
            </div>
            <div className="hidden customMiniTablet:block flex-[3.5]">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && <Security cancel={setIsOpen} />}
      </AnimatePresence>
    </div>
  );
};

export default FormLink;
