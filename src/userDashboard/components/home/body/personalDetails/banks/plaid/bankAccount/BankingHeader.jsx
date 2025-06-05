import { CgClose } from "react-icons/cg";

const BankingHeader = ({
  handleCancel,
  text,
  img,
  setIsOpenOtp,
  setAllBankItems,
  setOtpOpen,
}) => {
  const closeALL = () => {
    setIsOpenOtp(false);
    setAllBankItems(false);
    handleCancel(false);
    setOtpOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center py-1.5 pl-2 pr-4 text-xs text-white bg-customBlue-1003 ">
        <div className="flex items-center gap-1">
          <div>
            <img src={img} alt="" className="w-5 h-5 " />
          </div>
          <p className="mt-1">{text}</p>
        </div>
        <CgClose size={16} onClick={closeALL} />
      </div>
    </>
  );
};

export default BankingHeader;
