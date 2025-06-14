import { GeneralContext } from "./GeneralValueContext";

const GeneralValueProvider = ({ children }) => {
  const phoneNumber = "*** *** 9029";
  const checkingNav = "5796";
  const savingNav = "3579";
  const checkingRouNum = "021000089";
  const countrtState = "Oregon";
  const accountMoney = "Chime Checking:2071";
  const tyoeOfPhone = "iPhone (⁠iPhone 13 pro)";

  // const phoneNumber = "*** *** 9562";
  // const checkingNav = "5747";
  // const savingNav = "7847";
  // const checkingRouNum = "113193532";
  // const countrtState = "Texas";
  // const accountMoney = "Chime Checking:2071";
  // const tyoeOfPhone = "iPhone (iPhone 13)";

  // const phoneNumber = "*** *** 8831";
  // const checkingNav = "2206";
  // const savingNav = "3281";
  // const checkingRouNum = "021000089";
  // const countrtState = "New York";
  // const accountMoney = "Chime Checking:2071";
  // const tyoeOfPhone = "iPhone (iPhone 14 pro max)";

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
