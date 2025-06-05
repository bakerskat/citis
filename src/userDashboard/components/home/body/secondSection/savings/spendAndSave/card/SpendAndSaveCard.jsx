import clsx from "clsx";

const SpendAndSaveCard = ({ spend }) => {
  const { name, icon, info, element } = spend;

  return (
    <div className=" card box-shadow2">
      <div
        className={clsx(
          " block customTablet1:flex justify-between px-3 pt-4 pb-2 border-b-8  rounded-b-lg",
          name === "spend" && "border-customGray-800",
          name === "earn" && "border-customBlue-1001",
          name === "set" && "border-customGreen-200"
        )}
      >
        <div className="flex items-center gap-5 customXlg:gap-2">
          <span
            className={clsx(
              "relative w-12 h-12 rounded-[50%] text-center",
              name === "spend" && "bg-customGray-800",
              name === "earn" && "bg-customBlue-1001",
              name === "set" && "bg-customGreen-200"
            )}
          >
            <span className="absolute left-[50%] -translate-x-[50%] text-3xl -translate-y-[50%]  top-[50%] text-white ">
              {icon()}
            </span>
          </span>
          <p className="flex-col font-light tracking-wide uppercase customXlg:flex text-customGray-400">
            {name} & <span> Save</span>{" "}
          </p>
        </div>
        <div className="-mt-2 customTablet1:-mt-0 space-y-1 customTablet1:space-y-2 ml-[68px] customTablet1:ml-0 customTablet1:text-end text-customXST text-customGray-400">
          <div className="flex space-x-1 customXlg:block">
            <h3 className="mb-">{info}</h3>
            <p>{element}</p>
          </div>
          <button className="font-bold text-customBlue-500">Enroll</button>
        </div>
      </div>
    </div>
  );
};

export default SpendAndSaveCard;
