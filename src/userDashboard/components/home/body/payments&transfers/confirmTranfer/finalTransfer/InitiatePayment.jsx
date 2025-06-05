import clsx from "clsx";
import { FaCheck, FaTriangleExclamation } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllTransferInfo,
  selectedTransferInfo,
} from "../../../../../../redux/feature/transfer/transferSlice";
import { useEffect } from "react";

const InitiatePayment = ({ handleDelete }) => {
  const transferInfo = useSelector(selectedTransferInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransferInfo());
  }, [dispatch]);
  const transfer = transferInfo[0];
  const fromRemove = transfer?.fromAccount?.indexOf("$");
  const newFromAccount =
    fromRemove !== -1
      ? transfer?.fromAccount?.slice(0, fromRemove)
      : transfer?.fromAccount;
  const toRemove = transfer?.toAccount?.indexOf("$");
  const newToAccount =
    toRemove !== -1
      ? transfer?.toAccount?.slice(0, toRemove)
      : transfer?.toAccount;

  function getSourceLabel() {
    if (newFromAccount) return newFromAccount;
    if (transfer?.fromRouting)
      return `Bank Account:${transfer?.fromRouting?.slice(-4)} (${
        transfer?.fromRoutingType
      })`;
    if (transfer?.fromCard) return `Card:${transfer?.fromCard?.slice(-4)}`;
    return "";
  }

  const finalToAccount =
    newToAccount ||
    `Bank Account:${transfer?.toRouting?.slice(-4)} (${
      transfer?.toRoutingType
    })`;

  return (
    <>
      <h1 className="text-[32px] font-light customTablet1:text-5xl mb-9 ">
        Your Transfer Has Been Initiated
      </h1>
      <div className="justify-between customTablet1:flex">
        <div className="mb-12 flex-[1] customTablet1:mb-0">
          <div className="flex flex-col items-center justify-center w-full customTablet1:block">
            <div className="flex justify-center w-full ">
              <p className="w-20 h-20 rounded-full   flex justify-center items-center border-customBlue-1035 border-[3px] text-4xl text-customBlue-1035 mb-3">
                <FaCheck />
              </p>
            </div>
            <div className="flex justify-center w-full mt-2 mb-3 font-light">
              <p className="text-3xl ">$</p>
              <h2 className="text-6xl">{transfer?.totalAmount}</h2>
            </div>
            <p className="mb-6 text-center customTablet1:px-10">
              Your transfer request to {finalToAccount} will begin processing.
            </p>
            <h2 className="mb-5 font-extrabold text-center">
              Refrence Number{" "}
              <span className="uppercase">{transfer?.id?.slice(0, 15)}</span>
            </h2>
            <div className="flex justify-center gap-2 px-1 customTablet1:px-10">
              <FaTriangleExclamation className="text-xl mt- text-customOrange-100 " />
              <p>
                Attention! You may{" "}
                <span
                  className="font-semibold text-customRed-100"
                  onClick={handleDelete}
                >
                  cancel
                </span>{" "}
                this transfer untill 12:30PM ET
              </p>
            </div>
          </div>
        </div>

        <div className="flex-[1.7]  customXlg:flex-[1] ">
          <h3 className="pb-3 mb-3 text-xl font-bold border-b text-customGray-900 border-b-customBlue-500">
            Transfer Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between customMiniTablet:justify-normal ">
              <h4 className=" customMiniTablet:w-[220px] ">From Account</h4>
              <h1 className="font-bold w-[50%] text-end customMiniTablet:w-max">
                {getSourceLabel()}
              </h1>
            </div>
            <div className="flex justify-between customMiniTablet:justify-normal ">
              <h4 className=" customMiniTablet:w-[220px] ">To Account</h4>
              <h1 className=" font-bold w-[50%] text-end customMiniTablet:w-max">
                {finalToAccount}
              </h1>
            </div>
            <div className="flex justify-between customMiniTablet:justify-normal">
              <h4 className=" customMiniTablet:w-[220px]">Transfer Date</h4>
              <h1 className="font-bold w-[50%] text-end customMiniTablet:w-max">
                {transfer?.nowDate}
              </h1>
            </div>
            <div className="flex justify-between customMiniTablet:justify-normal">
              <h4 className=" customMiniTablet:w-[220px]">
                Estimated Deposit Date{" "}
              </h4>
              <h1 className="font-bold w-[50%] text-end customMiniTablet:w-max">
                {`${transfer?.nowDate} - ${transfer?.laterDate}`}
              </h1>
            </div>
          </div>
          <div className="items-center gap-5 pt-8 mt-10 customTablet1:flex">
            <Link to="/dashboard">
              <button
                className={clsx(
                  "py-3 font-bold w-full  customTablet1:px-16 customTablet1:w-max  rounded-lg     bg-customBlue-500 border-none text-white  hover:bg-customBlue-300 transistion2"
                )}
              >
                {/* <Link to="/dashboard">Done</Link> */}
                Done
              </button>
            </Link>
            <Link
              to="/domestic/input"
              className="flex justify-center py-5 text-sm text-center underline customTablet1:py-0 text-customBlue-500 hover:text-customBlue-700 customTablet1:text-start"
            >
              Make Another Transfer
            </Link>
            <p
              onClick={handleDelete}
              className="py-2 text-sm text-center underline customTablet1:py-0 text-customRed-100 hover:text-customRed-1000 customTablet1:text-start"
            >
              Cancel this Transfer
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default InitiatePayment;
