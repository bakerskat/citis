import { useState } from "react";
// import { thirdCardDetails } from "../../../thirdCardDetails";
import clsx from "clsx";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import TransactionsCards from "../../../../../secondSection/summary/secondSummary/cards/TransactionsCards";
import useExternalArrays from "../../../../../../../../hooks/useExternalArrays";

const ThirdCard = () => {
  const { thirdCardDetails } = useExternalArrays();
  const defaultCategory = thirdCardDetails[0];
  const [selectedItems, setSelectedItems] = useState(
    defaultCategory.children[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(defaultCategory.id);

  const findSelectedId = thirdCardDetails.find(
    (third) => third.id === selectedId
  );

  const theFirstSelectedId = findSelectedId?.id === 1;

  const handleSelectedItems = (id) => {
    setSelectedItems(id);
    setIsOpen(false);
  };

  return (
    <div className="px-6 pt-4 pb-8 card2 text-customGray-400">
      <h2 className="text-[18px] font-bold  ">Recent Transfer Activity</h2>
      <div className="customMiniTablet:w-[296px] mb-6 mt-8">
        {theFirstSelectedId && (
          <>
            <h3 className="mb-1 text-customGray-400">Select a citi Account</h3>
            <div className="relative">
              <button
                onClick={() => setIsOpen((prevOpen) => !prevOpen)}
                className={clsx(
                  "flex items-center justify-between px-5 py-3 font-bold bg-white border border-customGray-600 rounded-xl text-customBlue-500  focus:ring-2 focus:ring-offset-1 focus:ring-customBlue-500 focus:ring-opacity-50 focus:bg-customBlue-400 w-full  gap-10"
                )}
              >
                {selectedItems.label}
                <span className="">
                  {isOpen ? (
                    <BsChevronUp size={18} />
                  ) : (
                    <BsChevronDown size={18} />
                  )}
                </span>
              </button>

              <div className="absolute w-full space-y-3 text-sm bg-white rounded-lg shadow-lg top-full">
                {isOpen &&
                  defaultCategory.children.map((second) => (
                    <TransactionsCards
                      key={second.id}
                      second={second}
                      handleSelectedItems={handleSelectedItems}
                      selectedItems={selectedItems}
                    />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-between gap-2 text-sm customMiniTablet:justify-start customMiniTablet:gap-10">
        {thirdCardDetails.map((third) => (
          <div key={third.id}>
            <div>
              <h3
                className={clsx(
                  "pb-3 hover:border-b-2 hover:border-customBlue-500 cursor-pointer",
                  selectedId === third.id ? "font-bold" : null
                )}
                onClick={() => setSelectedId(third.id)}
              >
                {third.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mb-4 border-b border-customGray-1000"></div>
      <div className="text-sm">
        {findSelectedId.details && (
          <>
            <h3>{findSelectedId.details}</h3>
          </>
        )}
      </div>
      <div className="text-sm">{theFirstSelectedId && selectedItems.info}</div>
    </div>
  );
};

export default ThirdCard;
