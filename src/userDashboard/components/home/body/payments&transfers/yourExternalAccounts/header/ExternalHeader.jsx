import { useState } from "react";
import { externalNavLinks } from "../externalDetails";
import { Link } from "react-router-dom";
import Security from "../../../security/Security";
import { AnimatePresence } from "framer-motion";
import ExternalPopUp from "../forms/ExternalPopUp";
import clsx from "clsx";

const ExternalHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClick = (name) => {
    if (name === "View/Manage Activity") {
      setIsOpen(true);
    } else if (name === "Add an External Account") {
      setIsOpen2(true);
    }
  };

  return (
    <div className="mb-10">
      <div className="space-x-3">
        {externalNavLinks.map((ext) => {
          const { id, name, path } = ext;

          return (
            <Link
              key={id}
              to={path}
              onClick={() => handleClick(name)}
              className={clsx(
                "h-[20px] pr-6 border-r border-customBlue-700 underline hover:text-customBlue-700 transistion2 text-customBlue-500  customTablet1:text-base text-sm",
                name === "Add an External Account" && "border-none"
              )}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <AnimatePresence>
        {isOpen && <Security cancel={setIsOpen} />}
        {isOpen2 && <ExternalPopUp cancel={setIsOpen2} />}
      </AnimatePresence>
    </div>
  );
};

export default ExternalHeader;
