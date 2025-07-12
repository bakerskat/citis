import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 1564";
  const checkingNav = "6566";
  const savingNav = "2733";
  const checkingRouNum = "113193532";
  const countrtState = "Texas";
  const accountMoney = "Capital One Checking:2071";
  const tyoeOfPhone = "iPhone (iPhone 15 pro max)";

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
