import BankLogo from "../../../../../../../assets/allBanks/plaids/plaids5.png";
import { RxExternalLink } from "react-icons/rx";
import clsx from "clsx";
import { BiArrowBack } from "react-icons/bi";
import PlaidLogo from "../../../../../../../assets/allBanks/plaids/plaids2.svg";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import useAddToDatabase from "../../../../../../hooks/useAddToDatabase";
import { useSelector } from "react-redux";
import { selectedAddLoading } from "../../../../../../redux/feature/bankDatabase/bankDatabaseSlice";
import { ClipLoader } from "react-spinners";

const PlaidLogin = ({
  selectedItems,
  setisBankPageOpen,
  isBankPageOpen,
  setIsOpen,
  setExistPage,
  existPage,
}) => {
  const { name } = selectedItems;
  const loading = useSelector(selectedAddLoading);
  const { addToAllDataBase } = useAddToDatabase("bankSelected");

  const handleTheSelectedPage = async () => {
    const newItems = {
      bankName: name,
    };
    try {
      await addToAllDataBase(newItems);
      setisBankPageOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "px-5 pt-5 pb-7",
        isBankPageOpen && "hidden",
        existPage && "hidden"
      )}
    >
      <div className="flex items-center justify-between w-full">
        <BiArrowBack size={23} onClick={() => setIsOpen(false)} />
        <div>
          <img src={PlaidLogo} alt="" />
        </div>
        <CgClose size={22} onClick={() => setExistPage(true)} />
      </div>
      <div className={clsx("flex justify-center items-center pt-[8.9rem] ")}>
        <div>
          <div className="flex justify-center w-full h-full mb-6">
            <img src={BankLogo} alt="" className="w-[83px]" />
          </div>
          <div className="space-y-1 text-center px-7">
            <h3 className="text-[20px] font-extrabold text-customGray-900">
              Log in at {name}
            </h3>
            <p className="text-customGray-1009">
              You&apos;ll be sent to {name} to securely log in to your account
            </p>
          </div>
          <button
            disabled={loading}
            className={clsx(
              "absolute flex items-center justify-center gap-3 mt-44 plaidButton bottom-7 left-2 customMiniTablet:left-6 w-[95%] customXlg:relative customXlg:bottom-0 customXlg:left-0 customXlg:w-full",
              loading ? "bg-opacity-45" : ""
            )}
            onClick={handleTheSelectedPage}
          >
            {loading && <ClipLoader size={10} color="#fff" />}
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                Continue to login <RxExternalLink size={24} />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlaidLogin;
