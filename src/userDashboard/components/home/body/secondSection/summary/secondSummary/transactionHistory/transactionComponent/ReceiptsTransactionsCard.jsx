import { GoPlus } from "react-icons/go";
import useFormateDate from "../../../../../../../../hooks/useFormateDate";
import clsx from "clsx";

const ReceiptsTransactionsCard = ({ filtering, handleIsOpen }) => {
  const { formateDate } = useFormateDate();
  const { date, description, id, type, amount } = filtering;

  return (
    <>
      <div className="border-b cursor-pointer border-b-customGray-700">
        <div
          className="flex justify-between py-4 text-customGray-400"
          onClick={() => handleIsOpen(id)}
        >
          <div className="flex gap-4">
            <span className="text-customBlue-500">
              <GoPlus size={20} />
            </span>

            <div className="space-y-2 text-customGray-200 text-customXST">
              <h3 className="uppercase">
                {description.length >= 25 ? (
                  <p>{description.slice(0, 25)}...</p>
                ) : (
                  description
                )}
              </h3>
              <p>{formateDate(date)}</p>
            </div>
          </div>
          <div
            className={clsx(
              type === "credit" ? "text-customGreen-100" : "text-customGray-200"
            )}
          >
            {type === "credit" ? (
              <p>${amount.toLocaleString()}</p>
            ) : (
              <p>-${amount.toLocaleString()}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptsTransactionsCard;
