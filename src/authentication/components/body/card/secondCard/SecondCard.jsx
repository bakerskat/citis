import clsx from "clsx";
import { allCardInfo } from "./secondDetails";
import { Link } from "react-router-dom";

const SecondCard = () => {
  return (
    <div className="px-4 customXlg:container customXlg:mx-auto">
      <div className="w-full gap-4 mb-20 space-y-8 customMiniTablet:space-y-0 customMiniTablet:flex mt-44 text-customGray-400">
        {allCardInfo.map((all) => {
          const { name, title, img, info, btn, link } = all;
          return (
            <div
              key={name}
              className="p-4 border rounded-lg border-customGray-500 flex-[1]"
            >
              <h3 className="mb-2 text-xs font-light tracking-widest ">
                {title}
              </h3>
              <div className="mb-5">
                <img src={img} alt="" className="rounded-t-lg" />
              </div>
              <h1 className="mb-4 text-2xl font-extrabold">{name}</h1>
              <p>{info}</p>
              <div
                className={clsx(
                  "block  customTablet1:flex gap-3 items-center space-y-4 customTablet1:space-y-0",
                  title === "CITI CUSTOM CASH® CARD" && "mt-24",
                  title === "CITI SIMPLICITY CARD®" && "mt-10",
                  title === "CITI® PERSONAL LOAN" && "mt-[4.5rem]"
                )}
              >
                <button className="w-full py-3 font-bold text-white rounded-lg customTablet1:w-1/2 bg-customBlue-500">
                  <Link reloadDocument>{btn}</Link>
                </button>
                <p className="font-bold text-center underline customTablet1:text-start customTablet1:text-xs text-customBlue-500">
                  {link}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondCard;
