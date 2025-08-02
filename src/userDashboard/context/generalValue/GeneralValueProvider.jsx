import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 6665";
  const checkingNav = "2753";
  const savingNav = "7357";
  const checkingRouNum = "322271724";
  const countrtState = "California";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "Iphone (Iphone 12 pro max)";

  // const phoneNumber = "*** *** 4177";
  // const checkingNav = "2781";
  // const savingNav = "2802";
  // const checkingRouNum = "021000089";
  // const countrtState = "New York";
  // const accountMoney = "Chime Checking:2071";
  // const tyoeOfPhone = "iPhone (iPhone 13 Pro Max)";
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
