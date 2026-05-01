import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 9302";
  const checkingNav = "8803";
  const savingNav = "2653";
  const checkingRouNum = "021000089";
  const countrtState = "Michigan";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 15 pro max)";

  return (
    <GeneralContext.Provider
      value={{
        phoneNumber,
        checkingNav,
        savingNav,
        checkingRouNum,
        countrtState,
        accountMoney,
        tyoeOfPhone,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralValueProvider;
