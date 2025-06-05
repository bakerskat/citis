import clsx from "clsx";
import { GoDash, GoPlus } from "react-icons/go";

const MiniTransactionTableCard = ({
  miniTransac,
  formateDate,
  handleSelectedItems,
  isOpen,
}) => {
  const { description, date, type, amount, id, transac } = miniTransac;

  return (
    <>
      <div className="border-b border-b-customGray-700">
        <div
          className="flex justify-between py-4 text-customGray-400"
          onClick={() => handleSelectedItems(id)}
        >
          <div className="flex gap-1">
            <span className="text-customBlue-300">
              {isOpen.includes(id) ? (
                <GoDash size={20} />
              ) : (
                <GoPlus size={20} />
              )}
            </span>

            <div>
              <h3 className="text-[15.2px]">{description}</h3>
              <p className="text-customGray-200 text-customXST2">
                {formateDate(date)}
              </p>
            </div>
          </div>
          <div
            className={clsx(
              type === "credit" ? "text-customGreen-100" : "text-customGray-400"
            )}
          >
            {type === "credit" ? (
              <p>${amount.toLocaleString()}</p>
            ) : (
              <p>-${amount.toLocaleString()}</p>
            )}
          </div>
        </div>

        <div>
          {isOpen.includes(id) && (
            <div className="p-6 space-y-5 bg-customBlue-1000 text-[15.2px]">
              <div>
                <h3 className="text-customGray-200 ">Transaction Date</h3>
                <p className="text-customGray-400">{formateDate(date)}</p>
              </div>
              <div>
                <h3 className="text-customGray-200 ">Posted On</h3>
                <p className="text-customGray-400">{formateDate(date)}</p>
              </div>
              <div>
                <h3 className="text-customGray-200 ">Transaction Type</h3>
                <p className="text-customGray-400">{transac}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MiniTransactionTableCard;
