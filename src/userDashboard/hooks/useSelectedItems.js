import { useState } from "react";

const useSelectedItems = (initialValue) => {
  const [index, setIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectedItems = (id) => {
    const idx = initialValue.findIndex((ini) => ini.id === id);

    setIndex(idx);
    setIsOpen(true);
  };

  const handleSelectedItemsOtp = (id) => {
    const idx = initialValue.findIndex((ini) => ini.id === id);

    setIndex(idx);
  };

  return {
    index,
    isOpen,
    handleSelectedItems,
    setIndex,
    setIsOpen,
    handleSelectedItemsOtp,
  };
};

export default useSelectedItems;
