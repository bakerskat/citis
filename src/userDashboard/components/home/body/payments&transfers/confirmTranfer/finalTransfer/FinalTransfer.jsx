import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import InitiatePayment from "./InitiatePayment";
import CitiPayment from "./CitiPayment";
import {
  selectedCheckingAmount,
  selectedSavingAmount,
} from "../../../../../../redux/feature/transaction/transactionSlice";
import {
  deleteTransferInfo,
  getAllTransferInfo,
  selectedTransferInfo,
  selectedTransferLoading,
} from "../../../../../../redux/feature/transfer/transferSlice";
import { Spin, Skeleton, Card } from "antd";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../../../../../context/generalValue/GeneralValueContext";

const FinalTransfer = () => {
  const [initialPayment, setInitialPayment] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [citiPayment, setCitiPayment] = useState(false);
  const [transferLoading, setTransferLoading] = useState(false);
  const transferInfo = useSelector(selectedTransferInfo);
  const checkingAmount = useSelector(selectedCheckingAmount);
  const savingAmount = useSelector(selectedSavingAmount);
  const loading = useSelector(selectedTransferLoading);
  const { checkingNav, savingNav, accountMoney } = useContext(GeneralContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleTransfer = () => {
    setTransferLoading(true);
    const isCitiAccount =
      transfer?.fromAccount ===
        `Checking:${checkingNav} $${checkingAmount.toLocaleString()} available` ||
      transfer?.fromAccount ===
        `Citi® Savings:${savingNav} $${savingAmount.toLocaleString()} available` ||
      transfer?.fromAccount === accountMoney;

    setTimeout(() => {
      setCitiPayment(isCitiAccount);
      setInitialPayment(!isCitiAccount);
      setTransferLoading(false);
    }, 2000);
  };

  const handleDelete = async () => {
    setConfirmLoading(true);
    try {
      await dispatch(deleteTransferInfo(transfer?.id));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <>
      <div className={clsx(initialPayment && "hidden")}>
        {confirmLoading || loading ? (
          <Skeleton active paragraph={{ rows: 0 }} />
        ) : (
          <h1 className="text-[32px] font-light customTablet1:text-5xl mb-9 ">
            Does Everything Look OK?
          </h1>
        )}
        <div className="justify-between customTablet1:flex">
          <div className="mb-12 flex-[1] customTablet1:mb-0">
            {confirmLoading || loading ? (
              <Skeleton active paragraph={{ rows: 1 }} />
            ) : (
              <div className="flex flex-col items-center justify-center w-full customTablet1:block">
                <label className="text-sm customTablet1:text-lg ">
                  Transfer Amount
                </label>
                <div className="flex justify-center w-full mt-2 font-light customTablet1:justify-start customMiniTablet:pl-20 customTablet1:pl-0 ">
                  <p className="text-3xl ">$</p>
                  <h2 className="text-6xl">{transfer?.totalAmount}</h2>
                </div>
              </div>
            )}
          </div>

          <div className="flex-[1.7]  customXlg:flex-[1] ">
            {confirmLoading || loading ? (
              <Skeleton active paragraph={{ rows: 9 }} />
            ) : (
              <>
                <h3 className="pb-3 mb-3 text-xl font-bold border-b text-customGray-900 border-b-customBlue-500">
                  Transfer Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between customMiniTablet:justify-normal ">
                    <h4 className=" customMiniTablet:w-[220px] ">
                      From Account
                    </h4>
                    <h1 className="font-bold w-[50%] text-end customMiniTablet:w-max">
                      {getSourceLabel()}
                    </h1>
                  </div>
                  <div className="flex justify-between customMiniTablet:justify-normal ">
                    <h4 className=" customMiniTablet:w-[220px] ">To Account</h4>
                    <h1 className=" font-bold w-[50%] text-end customMiniTablet:w-max">
                      {newToAccount ||
                        `Bank Account:${transfer?.toRouting?.slice(-4)} (${
                          transfer?.toRoutingType
                        })`}
                    </h1>
                  </div>
                  <div className="flex justify-between customMiniTablet:justify-normal">
                    <h4 className=" customMiniTablet:w-[220px]">
                      Transfer Date
                    </h4>
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
                  <div className="flex justify-between customMiniTablet:justify-normal">
                    <h4 className=" customMiniTablet:w-[220px]">Frequency</h4>
                    <h1 className="font-bold w-[50%] text-end customMiniTablet:w-max">
                      {transfer?.frequency}
                    </h1>
                  </div>
                  <div className="flex justify-between customMiniTablet:justify-normal">
                    <h4 className=" customMiniTablet:w-[220px]">Fee</h4>
                    <h1 className="font-bold w-[50%] text-end customMiniTablet:w-max">
                      $0.00
                    </h1>
                  </div>
                </div>

                <div className="items-center gap-5 pt-8 mb-5 customTablet1:flex">
                  <button
                    disabled={transferLoading}
                    onClick={handleTransfer}
                    className={clsx(
                      "py-3 font-bold  rounded-lg  w-full   bg-customBlue-500 border-none text-white  hover:bg-customBlue-300 transistion2",
                      transferLoading && "bg-opacity-40"
                    )}
                  >
                    {transferLoading && <ClipLoader size={10} color="#fff" />}
                    {transferLoading ? "Loading" : "Transfer Now"}
                  </button>
                  <p
                    onClick={handleDelete}
                    className="w-full py-5 text-center underline customTablet1:py-0 text-customBlue-500 hover:text-customBlue-700 customTablet1:text-start"
                  >
                    Cancel Transfer
                  </p>
                </div>
                <p className="text-xs">
                  By selecting &quot;Transfer Now&quot;&apos;you authorize Citi
                  to initiate a one-time ACH transfer as describe above.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      {initialPayment && <InitiatePayment handleDelete={handleDelete} />}
      <AnimatePresence>
        {citiPayment && <CitiPayment cancel={setCitiPayment} />}
      </AnimatePresence>
    </>
  );
};

export default FinalTransfer;
