import clsx from "clsx";
import { useContext, useState } from "react";
import { ExistContext } from "../../../../../../../../context/existPlan/ExistContext";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Security from "../../../../../security/Security";

const QuickLinks = ({ quickLinks, manage, name }) => {
  const { handleExternal } = useContext(ExistContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="px-6 pt-4 pb-8 card2">
        <h2 className="mb-6 header">Quick Links</h2>
        <div
          className={clsx(
            " customMiniTablet:flex gap-3 text-center    space-y-4 customMiniTablet:space-y-0",
            name === "payee" ? "" : "border-b border-customGray-1000 pb-6 mb-6"
          )}
        >
          {quickLinks.map((quick) => {
            const { icon, id, element, label } = quick;
            return (
              <div
                key={id}
                className={clsx(
                  " pt-2 px-2 pb-0 customMiniTablet:py-5 border rounded-lg border-customGray-1000 customMiniTablet:px-4 group customMiniTablet:block flex items-center gap-3 cursor-pointer",
                  name === "payee" && "customMiniTablet:px-8",
                  name === "wire" && "customMiniTablet:px-7"
                )}
                onClick={() =>
                  label === "Add External "
                    ? handleExternal(navigate)
                    : setIsOpen(true)
                }
              >
                <div className="flex justify-center mb-2 ">
                  <span className="px-2 py-2 text-customBlue-500 bg-customBlue-900 rounded-[50%] text-[24px] customMiniTablet:text-[33px]">
                    {icon()}
                  </span>
                </div>
                <div className="flex gap-1 mb-2 text-sm font-semibold text-customBlue-500 customMiniTablet:block customMiniTablet:text-base ">
                  <p className="group-hover:border-b-2 border-customBlue-500">
                    {label}
                  </p>
                  <span className="group-hover:border-b-2 border-customBlue-500">
                    {element}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {manage && (
          <p className="font-light text-customBlue-500 hover:underline">
            {manage}
          </p>
        )}
        <AnimatePresence>
          {isOpen && <Security cancel={setIsOpen} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default QuickLinks;
