import { FaChevronRight } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const BodyHeaderCard = ({ bodhe }) => {
  const { element, path, add, available, amount, elemetNumber } = bodhe;
  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          clsx(
            "block rounded-[10px]",
            isActive
              ? " text-white relative top-full left-3 box-shadow1 "
              : "box-shadow text-customBlue-300 hover:box-shadow1 hover:ml-3 transistion"
          )
        }
      >
        {({ isActive }) => (
          <div
            className={clsx(
              "block w-full  rounded-[10px] ",
              isActive
                ? "btn2"
                : "bg-white hover:box-shadow1  transistion rounded-[10px]"
            )}
          >
            <div className="flex justify-between w-full px-5 pt-5 pb-4">
              <div className="flex flex-col font-extrabold leading-snug ">
                {element === " Savings Account" ? (
                  <>
                    <div className="hidden customMiniTablet:block customXlg:hidden">
                      Citi&reg;{element.slice(0, 13)}...
                    </div>
                    <div className="block customMiniTablet:hidden customXlg:block">
                      Citi&reg;{element}
                    </div>
                  </>
                ) : (
                  element
                )}
                <span
                  className={clsx(
                    "text-customXST font-light tracking-[2px]",
                    isActive ? "text-white" : "text-customGray-200"
                  )}
                >
                  {elemetNumber}
                </span>
              </div>
              <div>
                <div
                  className={clsx(
                    "flex items-center font-semibold leading-normal",
                    isActive ? "text-white" : "text-black"
                  )}
                >
                  $<span>{amount}.00</span>
                </div>
                <span
                  className={clsx(
                    "text-customXST font-light tracking-[2px]",
                    isActive ? "text-white" : "text-customGray-200"
                  )}
                >
                  {available}
                </span>
              </div>
            </div>
            <div className=" flex  justify-end w-full py-1.5 px-5 text-[13px] font-bold bg-customBlue-400  text-customBlue-500 rounded-b-[10px] ">
              <Link to="/fundtransfer" className="flex items-center">
                <h4>{add}</h4>
                <FaChevronRight size={11} className="mb-0.5" />
              </Link>
            </div>
          </div>
        )}
      </NavLink>
    </>
  );
};

export default BodyHeaderCard;
