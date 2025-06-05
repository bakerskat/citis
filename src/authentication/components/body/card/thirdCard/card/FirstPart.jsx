import clsx from "clsx";
import { Link } from "react-router-dom";

const FirstPart = ({ img, title, name, info, btn, img1 }) => {
  return (
    <div
      className={clsx(
        "w-full  py-12 text-customGray-400",
        title === "DIAMOND PREFERED®" && "bg-customBlue-900",
        title === "CITI® / AADVANTAGE® CREDIT CARDS" && "bg-customBlue-1022"
      )}
    >
      <div className="items-center block gap-12 px-4 space-y-7 customMiniTablet:flex customXlg:px-24 customXlg:container customXlg:mx-auto customMiniTablet:space-y-0">
        {img && (
          <div className="flex-[1.1]">
            <img
              src={img}
              alt=""
              className="object-contain w-full rounded-2xl"
            />
          </div>
        )}
        <div className="text-sm flex-[1] text-center customMiniTablet:text-start customMiniTablet:text-base">
          <h3 className="mb-2 font-light tracking-widest">{title}</h3>
          <h1 className="font-extrabold leading-[1] text-[21px] mb-5 customMiniTablet:text-[42px]">
            {name}
          </h1>
          <p>{info}</p>
          <button className="w-1/2 py-3 font-bold text-white rounded-lg bg-customBlue-500 mt-7">
            <Link reloadDocument>{btn}</Link>
          </button>
        </div>
        {img1 && (
          <div className="flex-[1.1]">
            <img
              src={img1}
              alt=""
              className="object-contain w-full rounded-2xl"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FirstPart;
