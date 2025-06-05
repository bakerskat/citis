import { PiDotsThreeOutlineLight } from "react-icons/pi";
import Statement from "./Statement";
import { LiaSearchSolid } from "react-icons/lia";
import Filter from "./Filter";
import { useCallback, useState } from "react";
import MiniTransactionCard from "./MiniTransactionCard";
import MiniTransactionReceipts from "./miniTransactionReceipts/MiniTransactionReceipts";

const MiniTransaction = ({ context }) => {
  const miniTransactionsDetails = [
    {
      id: 1,
      label: "I want to...",
      icon: <PiDotsThreeOutlineLight />,
      children: <Statement />,
    },
    {
      id: 2,
      label: "Search & Filter",
      icon: <LiaSearchSolid />,
      children: <Filter context={context} />,
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = useCallback((id) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(id)
        ? prevItems.filter((prev) => prev !== id)
        : [...prevItems, id]
    );
  }, []);

  return (
    <div>
      <div className="mb-4">
        {miniTransactionsDetails.map((mini) => (
          <MiniTransactionCard
            key={mini.id}
            mini={mini}
            handleSelectedItems={handleSelectedItems}
            selectedItems={selectedItems}
          />
        ))}
      </div>
      <MiniTransactionReceipts context={context} />
    </div>
  );
};

export default MiniTransaction;
