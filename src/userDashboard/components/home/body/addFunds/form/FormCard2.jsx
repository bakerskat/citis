import clsx from "clsx";
import { useContext } from "react";
import { GeneralContext } from "../../../../../context/generalValue/GeneralValueContext";

const FormCard2 = ({ formd, handleSelectedAccount }) => {
  const { savingNav } = useContext(GeneralContext);
  return (
    <div
      className={clsx(
        "px-5 font-normal my-5 hover:text-customBlue-500 hover:underline",
        formd.label === `Citi® Savings Account-${savingNav}` && "pb-4"
      )}
      onClick={() => handleSelectedAccount(formd)}
    >
      {formd.label}
    </div>
  );
};

export default FormCard2;
