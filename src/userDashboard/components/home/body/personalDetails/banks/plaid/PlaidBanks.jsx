import PlaidBankCards from "./PlaidBankCards";
import { useCallback, useState } from "react";
import PlaidForm from "./PlaidForm";
import { BiArrowBack } from "react-icons/bi";
import PlaidLogo from "../../../../../../../assets/allBanks/plaids/plaids2.svg";
import { CgClose } from "react-icons/cg";
import clsx from "clsx";
import PlaidLogin from "./PlaidLogin";
import useSelectedItems from "../../../../../../hooks/useSelectedItems";
import {
  allBankInfoDetails,
  otpInfo,
  otpOptions,
  whatToShowDetails,
} from "../bankDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBankInfo,
  selectedBankInfo,
} from "../../../../../../redux/feature/bank/bankSlice";
import { selectedAddLoading } from "../../../../../../redux/feature/bankDatabase/bankDatabaseSlice";
import useSubmission from "../../../../../../hooks/useSubmission";
import PlaidInvolved from "./PlaidInvolved";
import { AnimatePresence, motion } from "framer-motion";
import PlaidExist from "./PlaidExist";
import PlaidSelection from "./PlaidSelection";
import useAddToDatabase from "../../../../../../hooks/useAddToDatabase";
import useSubmissionOtp from "../../../../../../hooks/useSubmissionOtp";
import { selectedUser } from "../../../../../../redux/feature/auth/authSlice";

const PlaidBanks = ({ handleCancel, mainCancel, setSelectedBank }) => {
  const [searched, setSearched] = useState("");
  const user = useSelector(selectedUser);
  const [isBankPageOpen, setisBankPageOpen] = useState(false);
  const [existPage, setExistPage] = useState(false);
  const [typeAccount, setTypeAccount] = useState(false);
  const loading = useSelector(selectedAddLoading);
  const {
    index: indexOtp,
    handleSelectedItemsOtp: handleOtpOption,
    isOpen: isOpenOtp,
    setIsOpen: setIsOpenOtp,
  } = useSelectedItems(otpOptions);
  const { addToAllDataBase } = useAddToDatabase("otpOptions");

  const onSubmitOtpOptions = async () => {
    const items = { whereToSend: otpOptions[indexOtp].name };
    try {
      await addToAllDataBase(items);
      setIsOpenOtp(true);
    } catch (error) {
      console.log(error);
    }
  };

  const {
    handleSelectedId: handleSelectedFirstId,
    handleSubmissionName: handleSubmitSelctedForm,
    selectedPath: selectedPathFirst,
    allBankOpen: allBankItems,
    setAllBankOpen: setAllBankItems,
    activePath: activePathDetails,
  } = useSubmission(whatToShowDetails[0]);
  const {
    handleSelectedOtp,
    handleSubmitOtp,
    selectedOtp,
    OtpOpen,
    setOtpOpen,
    activeOtp,
  } = useSubmissionOtp(otpInfo[0]);

  const bankInfo = useSelector(selectedBankInfo);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (listItems) => {
      try {
        await dispatch(addToBankInfo(listItems));
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    [dispatch]
  );

  const allBankInfo = allBankInfoDetails.map((allBank, index) => {
    return {
      ...allBank,
      id: index + 1,
      page: (
        <allBank.componet
          handleCancel={setisBankPageOpen}
          bankName={allBank.name}
          handleSubmit={handleSubmit}
          allBankOpen={allBankItems}
          selectedPath={selectedPathFirst}
          handleSelectedId={handleSelectedFirstId}
          handleSelectSubmit={handleSubmitSelctedForm}
          whatToShowDetails={whatToShowDetails}
          otpInfo={otpInfo}
          handleSelectedOtp={handleSelectedOtp}
          handleSubmitOtp={handleSubmitOtp}
          selectedOtp={selectedOtp}
          OtpOpen={OtpOpen}
          setOtpOpen={setOtpOpen}
          activePathDetails={activePathDetails}
          indexOtp={indexOtp}
          handleOtpOption={handleOtpOption}
          isOpenOtp={isOpenOtp}
          setIsOpenOtp={setIsOpenOtp}
          onSubmitOtpOptions={onSubmitOtpOptions}
          activeOtp={activeOtp}
          setAllBankItems={setAllBankItems}
          typeAccount={typeAccount}
          setTypeAccount={setTypeAccount}
          loading={loading}
          user={user}
        />
      ),
    };
  });

  const filterBankAccount = allBankInfo.filter((allBank) =>
    allBank.name.toLowerCase().includes(searched.toLowerCase())
  );

  const { index, isOpen, handleSelectedItems, setIsOpen } =
    useSelectedItems(filterBankAccount);

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        className={clsx(
          "p-5",
          isBankPageOpen ? "hidden" : "block",
          existPage ? "hidden" : "block",
          isOpen ? "hidden" : "block"
        )}
      >
        <div className="flex items-center justify-between w-full pb-5">
          <BiArrowBack size={23} onClick={() => setSelectedBank(false)} />
          <div>
            <img src={PlaidLogo} alt="" />
          </div>
          <CgClose size={22} onClick={() => setExistPage(true)} />
        </div>

        <div
          className={clsx(
            " overflow-y-scroll h-[40rem] customMiniTablet:h-[54rem]  customTablet1:h-[32rem] "
          )}
        >
          <div className=" customTablet1:h-[40rem] w-full">
            <PlaidForm searched={searched} setSearched={setSearched} />
            <div>
              {filterBankAccount.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {filterBankAccount.map((allBank) => (
                    <PlaidBankCards
                      key={allBank.id}
                      allBank={allBank}
                      handleSelectedBank={handleSelectedItems}
                    />
                  ))}
                </div>
              ) : (
                <div className="px-1 mt-5 space-y-3 text-center text-customGray-1003">
                  <p>
                    No results found if you have your account number and routing
                    number, you can verify your account manually.
                  </p>
                  <button
                    className="font-extrabold text-customGray-1004"
                    onClick={() => setExistPage(true)}
                  >
                    Verify Manually
                  </button>
                </div>
              )}
            </div>
            <div>
              <PlaidInvolved />
            </div>
          </div>
        </div>
      </motion.div>
      <div>
        {isOpen && (
          <AnimatePresence>
            <PlaidLogin
              selectedItems={filterBankAccount[index]}
              setisBankPageOpen={setisBankPageOpen}
              isBankPageOpen={isBankPageOpen}
              setIsOpen={setIsOpen}
              setExistPage={setExistPage}
              existPage={existPage}
            />
          </AnimatePresence>
        )}
      </div>
      <div className="absolute top-0 left-0 w-screen px-0 customXlg:px-56">
        {isBankPageOpen && filterBankAccount[index].page}
      </div>
      <div>
        {existPage && (
          <AnimatePresence>
            <PlaidExist
              setExistPage={setExistPage}
              existPage={existPage}
              handleCancel={handleCancel}
            />
          </AnimatePresence>
        )}
      </div>
      <div>
        {typeAccount && (
          <AnimatePresence>
            <PlaidSelection
              selectedItems={filterBankAccount[index].children}
              bankName={filterBankAccount[index].name}
              handleSubmit={handleSubmit}
              mainCancel={mainCancel}
              setExistPage={setExistPage}
              existPage={existPage}
            />
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default PlaidBanks;
