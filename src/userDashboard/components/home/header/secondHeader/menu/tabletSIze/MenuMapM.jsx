import { useCallback, useState } from "react";
import MenuCardsM from "./MenuCardsM";

const MenuMapM = ({ navs, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(null);

  const handleIsOpened = useCallback((id) => {
    setIsOpen((prevOpen) => (prevOpen === id ? null : id));
  }, []);

  return (
    <div className="mt-6">
      {navs.map((nav) => (
        <MenuCardsM
          key={nav.id}
          nav={nav}
          isOpen={isOpen}
          handleIsOpened={handleIsOpened}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default MenuMapM;
