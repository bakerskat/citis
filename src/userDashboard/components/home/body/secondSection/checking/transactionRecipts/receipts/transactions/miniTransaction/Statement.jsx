import { useState } from "react";
import { statement } from "../../../transactionReceiptsDetails";
import Security from "../../../../../../security/Security";
import { AnimatePresence } from "framer-motion";

const Statement = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="pl-2 mt-4 mb-6 space-y-7">
        {statement.map((statem) => {
          const { id, label, value } = statem;
          return (
            <div
              key={id}
              className="flex items-center gap-4 font-extrabold text-customXST2 text-customBlue-300"
            >
              <span className="text-customBlue-500">
                {value({ size: "26px" })}
              </span>
              <span
                onClick={() =>
                  label === "View Last Statement" && setIsOpen(true)
                }
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        {isOpen && <Security cancel={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Statement;
