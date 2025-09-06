import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 8213";
  const checkingNav = "1265";
  const savingNav = "4244";
  const checkingRouNum = "021000089";
  const countrtState = "Oklahoma";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 14 pro max)";

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
