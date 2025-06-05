import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MenuCards = ({ nav, isOpen, handleIsOpen, handleIsClose }) => {
  const { id, label, children, checked } = nav;

  return (
    <div>
      <div className="relative min-w-full">
        {label && (
          <div
            onMouseEnter={() => handleIsOpen(id)}
            onMouseLeave={() => handleIsClose(id)}
            className="relative group"
          >
            <h3
              className={clsx(
                "py-[12px] px-[20px] group-hover:bg-customGray-100 group-hover:text-white  cursor-pointer transistion text-customBlue-100 font-medium ",
                label === "Open An Account"
                  ? "rounded-lg"
                  : "rounded-tr-lg rounded-tl-lg"
              )}
            >
              {label === "Open An Account" ? (
                <div className="gap-1 flexCenter">
                  {label}
                  <FaChevronRight size={16} className="mb-0.5" />
                </div>
              ) : (
                <span> {label} </span>
              )}
            </h3>
            <div
              className={clsx(
                "absolute bg-white shadow-lg   px-[20px] top-[100%]  w-max transistion rounded-br-lg rounded-bl-lg overflow-x-auto z-50",
                label === "Explore Products" && "-left-80",
                isOpen[id] && children ? "block transistion" : "hidden",
                checked === "Singled" ? " block " : "flex space-x-10 pt-[16px] "
              )}
            >
              {children?.map((nav1) => {
                const { element, children, labels, path } = nav1;
                return (
                  <div
                    key={nav1.id}
                    className="mb-4 space-y-3 cursor-pointer text-customBlue-100"
                  >
                    <h2 className="text-customGray-100 text-customXST">
                      {labels}
                    </h2>
                    <p className="hover:underline hover:text-customPurple-200 transistion ">
                      <Link to={path}>{element}</Link>
                    </p>
                    {children?.map((nav2) => {
                      const { element, path } = nav2;
                      return (
                        <p
                          key={nav2.id}
                          className="hover:underline hover:text-customPurple-200 transistion "
                        >
                          <Link to={path}>{element}</Link>
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCards;
