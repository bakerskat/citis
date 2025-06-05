import MenuMaps from "./MenuMaps";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";
import Security from "../../../body/security/Security";

const MenuCards = ({ nav }) => {
  const { label, children, path, element } = nav;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <>
        {label && (
          <h3
            className={clsx(
              "text-customGray text-customXST",
              label === "SETTINGS" ? "pt-7" : "pt-5"
            )}
          >
            {label}
          </h3>
        )}
        {element && (
          <div className="pt-4">
            <p
              className="text-base text-customBlue-100 hover:text-customPurple-200 hover:underline"
              // to={path}
              onClick={() => setIsOpen(true)}
            >
              {element}
            </p>
          </div>
        )}

        <div>{nav && children ? <MenuMaps navs={children} /> : null}</div>
        {isOpen && <Security cancel={setIsOpen} />}
      </>
    </>
  );
};

export default MenuCards;
