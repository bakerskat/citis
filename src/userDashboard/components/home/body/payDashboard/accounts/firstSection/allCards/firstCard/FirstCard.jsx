import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import ManCard from "../../../../../../../../../assets/payDashboard/accounts/undraw_account.svg";
import { useContext } from "react";
import { ExistContext } from "../../../../../../../../context/existPlan/ExistContext";

const FirstCard = () => {
  const { handleExternal } = useContext(ExistContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-6 pt-4 pb-8 card2 ">
      <div className="space-y-4">
        <h4 className="font-extrabold text-customGray-900">
          Add an External Bank Account for Transfers
        </h4>
        <p className="text-sm text-customGray-400">
          You can transfer money to an external bank account by add it here.
        </p>
        <p onClick={() => handleExternal(navigate)} className="mt-4 linkBtn">
          Add External Account
          <BsChevronRight className="mb-[2px]" />
        </p>
      </div>
      <div className="hidden customMiniTablet:block">
        <img src={ManCard} alt="" />
      </div>
    </div>
  );
};

export default FirstCard;
