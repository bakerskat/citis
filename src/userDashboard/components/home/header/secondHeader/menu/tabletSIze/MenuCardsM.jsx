import clsx from "clsx";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Security from "../../../../body/security/Security";

const MenuCardsM = ({ nav, handleIsOpened, isOpen, handleToggle }) => {
  const { id, label, children, icon, labelss } = nav;
  const navigate = useNavigate();
  const [isSecureOpen, setIsSecureOpen] = useState(false);

  const toThePath = (path) => {
    navigate(path);
    handleIsOpened(id);
    handleToggle();
  };

  return (
    <>
      <div>
        <div className="group">
          {label && (
            <h3
              className={clsx(
                " pl-5 ml-[50px] pr-5 mr-[2px] leading-[2.5] active:border-[2px] rounded-sm active:border-black cursor-pointer transistion text-customBlue-100 font-medium "
              )}
              onClick={() => handleIsOpened(id)}
            >
              {label === "Open An Account" ? (
                <div className="gap-1 flexCenter">{label}</div>
              ) : (
                <div className="flex items-center justify-between">
                  <span> {label} </span>
                  <FaChevronRight size={16} className="" />
                </div>
              )}
            </h3>
          )}

          {labelss && (
            <div
              onClick={() => handleIsOpened(id)}
              className="flex items-center gap-3 my-2.5 ml-8 cursor-pointer text-customGray-100"
            >
              {children ? (
                <div className="flex items-center justify-between w-full pr-5 mr-[2.5px] active:border-[2px] rounded-sm active:border-black cursor-pointer transistion">
                  <div className="flex items-center gap-3 cursor-pointer text-customGray-100">
                    {icon({ size: 30 })}
                    <h3 className="font-medium">{labelss}</h3>
                  </div>
                  <div>
                    <FaChevronRight size={16} className="text-customBlue-100" />
                  </div>
                </div>
              ) : (
                <>
                  {icon({ size: 30 })}
                  <h3 className="font-medium">{labelss}</h3>
                </>
              )}
            </div>
          )}
          <div
            className={clsx(
              "absolute top-0 left-0 w-full bg-white z-[120] h-[80%] transistion1 overflow-y-scroll",
              children && isOpen === id
                ? "transform translate-x-0"
                : "transform translate-x-full"
            )}
          >
            <div>
              <div
                className="flex items-center gap-5 pb-5 mx-8 my-6 border-b cursor-pointer border-customGray-300 group"
                onClick={() => handleIsOpened(id)}
              >
                <FaChevronLeft
                  size={16}
                  className="mb-1 group-active:border-[2px] group-active:border-black rounded-sm"
                />
                <h3 className="font-extrabold text-[17px] text-customGray-100 group-active:border-[2px] group-active:border-black rounded-sm w-full group-hover:text-customBlue-200 transistion">
                  {label} {labelss}
                </h3>
              </div>
            </div>
            {children?.map((nav1) => {
              const { element, children, labels, path } = nav1;
              return (
                <div
                  key={nav1.id}
                  className="mb-4 ml-16 space-y-3 font-bold cursor-pointer text-customBlue-100"
                >
                  <h2 className="my-5 font-extrabold text-customGray-100 text-customXST">
                    {labels}
                  </h2>
                  <p
                    onClick={() => toThePath(path)}
                    className="hover:underline hover:text-customPurple-200 transistion "
                  >
                    {element}
                  </p>
                  {children?.map((nav2) => {
                    const { element, path, side } = nav2;
                    return (
                      <p
                        key={nav2.id}
                        className="hover:underline hover:text-customPurple-200 transistion "
                        onClick={() =>
                          side ? setIsSecureOpen(true) : toThePath(path)
                        }
                      >
                        {element}
                      </p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isSecureOpen && <Security cancel={setIsSecureOpen} />}
    </>
  );
};

export default MenuCardsM;
