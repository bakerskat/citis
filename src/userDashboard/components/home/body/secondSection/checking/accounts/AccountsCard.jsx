import card from "../../../../../../../assets/body/checking-img/checking1.png";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AccountsCard = ({ numberChecking, name }) => {
  return (
    <>
      <div className="px-6 pt-5 pb-12 text-white rounded-xl btn3">
        <h3 className="mb-5 text-[25.7px] font-light tracking-wide">{name}</h3>
        <div className="block gap-8 space-y-3 customXlg:flex customXlg:space-y-0">
          <div className="block gap-6 customXlg:flex">
            <div className="w-[74.2px] h-[46.75px] customXlg:block hidden">
              <img src={card} alt="" className="w-full h-full" />
            </div>
            <div className="space-y-2">
              <p className="text-[15.2px] flex items-center gap-1">
                Available Now <AiOutlineInfoCircle size={24} className="mb-1" />
              </p>
              <h4 className="text-[42px]">${numberChecking}.00</h4>
            </div>
          </div>
          <div className="space-y-5">
            <p className="text-[15.2px] flex items-center gap-1">
              On Deposit <AiOutlineInfoCircle size={24} className="mb-1" />
            </p>
            <div className="space-y-2">
              <h4 className="text-2xl">${numberChecking}.00</h4>
              <p className="text-[15.2px] flex items-center gap-1">
                Average Monthly Balanace: ${numberChecking}.00
                <AiOutlineInfoCircle size={24} className="mb-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsCard;
