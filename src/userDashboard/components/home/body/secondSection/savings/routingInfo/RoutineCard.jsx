import { useState } from "react";
import Security from "../../../security/Security";

const RoutineCard = ({ account }) => {
  const { icon, name, info } = account;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between space-y-4 ">
        <h3 className="text-customGray-200 text-customXST2">{name}</h3>
        <div className="flex pb-2 space-x-1">
          <p className="text-customGray-400">{info}</p>
          <span
            onClick={() => name === "Account Number" && setIsOpen(true)}
            className="text-2xl text-customBlue-500"
          >
            {icon && icon()}
          </span>
        </div>
      </div>
      {isOpen && <Security cancel={setIsOpen} />}
    </>
  );
};

export default RoutineCard;
