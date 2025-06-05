import { useState } from "react";
import MenuCards from "./MenuCards";

const MenuMap = ({ navs }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleIsOpen = (id) => {
    setIsOpen((prev) => {
      return {
        ...prev,
        [id]: true,
      };
    });
  };
  const handleIsClose = (id) => {
    setIsOpen((prev) => {
      return {
        ...prev,
        [id]: false,
      };
    });
  };

  return (
    <>
      {navs.map((nav) => (
        <MenuCards
          key={nav.id}
          nav={nav}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleIsOpen={handleIsOpen}
          handleIsClose={handleIsClose}
        />
      ))}
    </>
  );
};

export default MenuMap;
