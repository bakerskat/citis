import { AiOutlineCalendar } from "react-icons/ai";
import TransactionCardRecipts from "./TransactionCardRecipts";

const TransactionTable = ({ context }) => {
  const {
    filterTransaction,
    formateStartDate,
    formateEndDate,
    formatNumber,
    formateDate,
  } = context;

  return (
    <>
      <div>
        {filterTransaction.length > 0 ? (
          <>
            <div>
              <h3 className="mb-3 space-x-2 text-customGray-200">
                Results for : <span>{formateStartDate}</span> to
                <span>{formateEndDate}</span>
              </h3>
            </div>
            <div className="w-full mb-4">
              <table className="w-full mt-3 border-collapse">
                <thead>
                  <tr className="border-b border-b-[#f4f3f3] text-customBlue-500 text-customXST2 text-left font-semibold">
                    <th className="pl-6">Date</th>
                    <th>Description</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th className="text-customGray-400">Available Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {filterTransaction
                      .slice()
                      .reverse()
                      .map((filtTran) => {
                        return (
                          <TransactionCardRecipts
                            key={filtTran.date}
                            filtTran={filtTran}
                            formateDate={formateDate}
                            formatNumber={formatNumber}
                          />
                        );
                      })}
                  </>
                </tbody>
              </table>
              <div className="w-full p-4 bg-customBlue-1000 text-customGray-400">
                <p>End Of Activity</p>
              </div>
            </div>
          </>
        ) : (
          <div className="my-10 font-light text-center text-customXST2 text-customGray-200">
            <AiOutlineCalendar
              size={48}
              className="w-full mb-4 text-customBlue-500"
            />
            We&apos;re sorry. No activity was found for the type of activity you
            selected
          </div>
        )}
      </div>
    </>
  );
};

export default TransactionTable;
