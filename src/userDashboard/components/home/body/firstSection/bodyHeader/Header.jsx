import { NavLink } from "react-router-dom";
import BodyHeaderCard from "./BodyHeaderCard";
import Recommended from "../recommended/Recommended";
import { useContext } from "react";
import { AmountContext } from "../../../../../context/amount/AmountContext";
import { SavingsTransactionContext } from "../../../../../context/savingsTransactions/SavingTransactionContext";
import { GeneralContext } from "../../../../../context/generalValue/GeneralValueContext";

const Header = () => {
  const context = useContext(AmountContext);
  const context2 = useContext(SavingsTransactionContext);
  const { savingNav, checkingNav } = useContext(GeneralContext);

  if (!context) {
    return null;
  }

  const { checkingAmount } = context;
  const { savingAmount } = context2;
  const numberChecking = checkingAmount.toLocaleString();
  const numberChecking2 = savingAmount.toLocaleString();

  const bodyHeader = [
    {
      id: 2,
      path: "/dashboard/checking-accounts",
      element: "Checking",
      elemetNumber: `-${checkingNav}`,
      amount: numberChecking,
      available: "Account Restricted",
      // available: "Available Now",
      add: "Add Funds",
    },
    {
      id: 3,
      path: "/dashboard/savings-accounts",
      element: " Savings Account",
      elemetNumber: `-${savingNav}`,
      amount: numberChecking2,
      available: "On Deposit",
      add: "Add Funds",
    },
  ];

  return (
    <>
      <header>
        <nav>
          <div className="hidden w-full mb-5 customMiniTablet:block ">
            <h3 className="text-customGray-400 text-customXST font-extrabold tracking-[3px] mb-4 ">
              ACCOUNT OVERVIEW
            </h3>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "block btn px-6 py-6 text-white font-extrabold"
                  : "box-shadow  block px-6 py-6 text-customBlue-300 font-extrabold hover:box-shadow1 hover:ml-3 transistion rounded-lg"
              }
              end
            >
              Citi Summary
            </NavLink>
          </div>
          <div>
            <h3 className=" text-customGray-400 text-customXST font-extrabold tracking-[3px] mb-4 ">
              BANKING
            </h3>
            <div className="space-y-8">
              {bodyHeader.map((bodhe) => (
                <BodyHeaderCard key={bodhe.id} bodhe={bodhe} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-customGray-400 text-customXST font-extrabold tracking-[3px] mb-4 mt-10 ">
              RECOMMENDED OFFER
            </h3>
            <Recommended />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
