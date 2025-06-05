import { useState } from "react";
import BankInfo from "../../personalDetails/banks/BankInfo";
import CreditCardInfo from "../../personalDetails/creditCard/CreditCardInfo";
import DebitCardInfo from "../../personalDetails/debitCard/DebitCardInfo";
import { AnimatePresence } from "framer-motion";
import FullLoader from "../../../loading/FullLoader";

const FormCard = ({ formd }) => {
  const { name, amountHold } = formd;
  const [accountOpen, setAccountOpen] = useState({
    loading: false,
    bankOpen: false,
    creditOpen: false,
    debitOpen: false,
  });

  const handleBankOpen = () => {
    setAccountOpen((prev) => ({
      ...prev,
      loading: true,
    }));
    setTimeout(() => {
      if (name === "Add Bank Account") {
        setAccountOpen((prev) => ({
          ...prev,
          bankOpen: true,
          loading: false,
        }));
      } else if (name === "Add Credit Card") {
        setAccountOpen((prev) => ({
          ...prev,
          creditOpen: true,
          loading: false,
        }));
      } else if (name === "Add Debit Card") {
        setAccountOpen((prev) => ({
          ...prev,
          debitOpen: true,
          loading: false,
        }));
      }
    }, 1000);
  };

  return (
    <div>
      <div
        className="flex items-center gap-10 px-5 mt-5 mb-5"
        onClick={handleBankOpen}
      >
        <h2 className="text-sm font-bold customMiniTablet:text-base text-customBlue-500 hover:underline">
          {name}
        </h2>
        <p className="text-[10px] customMiniTablet:text-customXST">
          {amountHold}
        </p>
      </div>

      {accountOpen.loading ? (
        <FullLoader />
      ) : (
        <AnimatePresence>
          {accountOpen.bankOpen && (
            <BankInfo
              cancel={() =>
                setAccountOpen((prev) => ({
                  ...prev,
                  bankOpen: false,
                }))
              }
              text="Connect your External Bank Account with Citi Instant Account Verification"
              para="or if you have your account and routine number, you can verify
                your accounts manually."
            />
          )}
          {accountOpen.debitOpen && (
            <DebitCardInfo
              cancel={() =>
                setAccountOpen((prev) => ({
                  ...prev,
                  debitOpen: false,
                }))
              }
              card="Debit Card"
            />
          )}
          {accountOpen.creditOpen && (
            <CreditCardInfo
              cancel={() =>
                setAccountOpen((prev) => ({
                  ...prev,
                  creditOpen: false,
                }))
              }
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FormCard;
