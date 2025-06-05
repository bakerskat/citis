import clsx from "clsx";
import { GoPlus } from "react-icons/go";

const TransactionCardRecipts = ({ filtTran, formateDate }) => {
  const { date, amount, type, description, balance } = filtTran;

  return (
    <>
      <tr className="border-b border-b-customGray-700 text-customGray-400">
        <td className="flex gap-1 py-5 pl-0 pr-3">
          <GoPlus size={20} className="text-customBlue-600" />
          {formateDate(date)}
        </td>
        <td className="py-5 pl-0 pr-3">{description}</td>
        <td className="py-5 pl-0 pr-3">
          {type === "debit" ? `-$${amount.toLocaleString()}.00` : ""}
        </td>
        <td
          className={clsx(
            "py-5 pl-0 pr-3",
            type === "credit" && "text-customGreen-100"
          )}
        >
          {type === "credit" ? `$${amount.toLocaleString()}.00` : ""}
        </td>
        <td className="py-5 pl-0 pr-2 text-end">
          ${balance.toLocaleString()}.00
        </td>
      </tr>
    </>
  );
};

export default TransactionCardRecipts;
