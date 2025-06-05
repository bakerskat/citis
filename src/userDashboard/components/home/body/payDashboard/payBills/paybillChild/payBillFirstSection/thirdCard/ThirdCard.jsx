import { useState } from "react";
import { payBillsDetails } from "../../../payBillsDetails";
import clsx from "clsx";

const ThirdCard = () => {
  const [selectedId, setSelectedId] = useState(1);

  const theSelectedId = payBillsDetails.find((pay) => pay.id === selectedId);

  return (
    <div className="px-6 pt-4 pb-8 card2 text-customGray-400">
      <h1 className="text-[18px] font-bold  mb-5">Recent Payment Activity</h1>
      <div className="flex justify-between gap-2 text-sm customMiniTablet:justify-start customMiniTablet:gap-10">
        {payBillsDetails.map((pay) => (
          <h2
            className={clsx(
              "pb-3 hover:border-b-2 hover:border-customBlue-500 cursor-pointer",
              selectedId === pay.id ? "font-bold" : null
            )}
            key={pay.id}
            onClick={() => setSelectedId(pay.id)}
          >
            {pay.name}
          </h2>
        ))}
      </div>
      <div className="w-full mb-4 border-b border-customGray-1000"></div>
      {theSelectedId.details && (
        <p className="text-sm">{theSelectedId.details}</p>
      )}
    </div>
  );
};

export default ThirdCard;
