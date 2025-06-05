import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const MiniTransactionCard = ({ mini, selectedItems, handleSelectedItems }) => {
  const { id, children, label, icon } = mini;

  return (
    <div>
      <div
        onClick={() => handleSelectedItems(id)}
        className="flex items-center justify-between py-3 text-[30px] font-extrabold border-b border-b-customGray-700 text-customBlue-500"
      >
        <div className="flex items-center gap-2 text-customXST2 text-customBlue-300">
          <span>
            {selectedItems.includes(id) ? <BsChevronUp /> : <BsChevronDown />}
          </span>
          <span>{label}</span>
        </div>

        {icon}
      </div>
      <div className="">{selectedItems.includes(id) && children}</div>
    </div>
  );
};

export default MiniTransactionCard;
