import clsx from "clsx";
import useFormateDate from "../../../../../../../../hooks/useFormateDate";
import { CgClose } from "react-icons/cg";
import { SlPrinter } from "react-icons/sl";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { motion } from "framer-motion";

const ReciptsChildren = ({
  selectedItems,
  setIsClose,
  totalLength,
  setIndex,
  index,
}) => {
  const { date, transac, type, amount, description } = selectedItems;
  const { formateDate } = useFormateDate();

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const hanleNext = () => {
    if (index < totalLength - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 z-50 flex justify-center min-w-full min-h-full px-2 pt-5 overflow-hidden bg-black bg-opacity-50 customTablet1:px-24 customXlg:px-60"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 50 }}
          className="w-full h-full bg-white rounded-lg "
        >
          <span
            onClick={() => setIsClose(false)}
            className="float-right pt-5 cursor-pointer px-7 text-customBlue-500"
          >
            <CgClose size={24} />
          </span>
          <div className="px-8 pt-16 pb-10">
            <div>
              <h3 className="mb-3 text-4xl font-light text-customGray-400">
                Recent Transactions
              </h3>
              <div className="mb-3 font-bold text-customGray-400">
                {description}
              </div>
              <div className="pb-5 mb-5  customSm:w-[330px] space-y-4 border-b border-b-customGray-700">
                <div className="flex justify-between">
                  <h2 className="text-customGray-200">Amount</h2>
                  <div
                    className={clsx(
                      type === "credit"
                        ? "text-customGreen-100"
                        : "text-customGray-400"
                    )}
                  >
                    {type === "credit" ? (
                      <p>${amount.toLocaleString()}</p>
                    ) : (
                      <p>-${amount.toLocaleString()}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-customGray-200">Transaction Date</h3>
                  <p className="text-customGray-400">{formateDate(date)}</p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-customGray-200">Posted On</h3>
                  <p className="text-customGray-400">{formateDate(date)}</p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-customGray-200">Transaction Type</h3>
                  <p className="text-customGray-400">{transac}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-6 font-bold text-customBlue-500">
              <SlPrinter size={20} />
              <p>Print</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <IoIosArrowDropleftCircle
                  size={30}
                  onClick={handlePrev}
                  className={clsx(
                    index === 0
                      ? "cursor-not-allowed text-customGray-200"
                      : "text-customBlue-500 cursor-pointer"
                  )}
                />
                <span className="mt-1 tracking-wider text-customGray-400">
                  {index + 1} of {totalLength}
                </span>
                <IoIosArrowDroprightCircle
                  size={30}
                  onClick={hanleNext}
                  className={clsx(
                    index === totalLength - 1
                      ? "cursor-not-allowed text-customGray-200"
                      : "text-customBlue-500 cursor-pointer"
                  )}
                />
              </div>
              <button
                onClick={() => setIsClose(false)}
                className="font-bold cursor-pointer text-customBlue-500"
              >
                View All Transactions
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ReciptsChildren;
