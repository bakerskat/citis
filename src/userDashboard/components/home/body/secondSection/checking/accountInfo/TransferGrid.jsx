import clsx from "clsx";
import Transfer from "../../summary/secondSummary/cards/Transfer";

const TransferGrid = ({ second, allGap }) => {
  return (
    <>
      <div className="flex-1 hidden px-3 pt-3 pb-4 card customTablet1:block">
        <div className="flex items-center justify-between px-2 mt-2 mb-6 text-customBlue-500">
          <h3 className="font-extrabold text-customXST text-customGray-400">
            I want to...
          </h3>
        </div>
        <div
          className={clsx(
            "grid grid-cols-2 px-4 gap-8",
            allGap && "gap-x-8 gap-y-20"
          )}
        >
          {second.map((second) => (
            <Transfer key={second.id} second={second} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TransferGrid;
