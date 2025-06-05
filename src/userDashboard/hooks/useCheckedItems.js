import { useState } from "react";

const useCheckedItems = (initialValue) => {
  const [selectedAccount, setSelectedAccount] = useState(initialValue[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectedAccount = (id) => {
    setSelectedAccount(id);
  };

  const handleSelectedOpenAccount = (id) => {
    setSelectedAccount(id);
    setIsOpen(false);
  };

  return {
    selectedAccount,
    handleSelectedAccount,
    handleSelectedOpenAccount,
    isOpen,
    setIsOpen,
  };
};

export default useCheckedItems;
