import { useState } from "react";
import Security from "../../../security/Security";

const AccountInfoCard = ({ account }) => {
  const { icon, name, info } = account;
  const [selectedAccont, setSelectedAccount] = useState(false);

  const renderAccount = name === "Account Number";

  return (
    <>
      <div className="flex items-center justify-between space-y-6 customTablet1:pr-36 customXlg:pr-0 customXlg:block customXlg:space-y-0">
        <h3 className="text-customGray-200 text-[13.3px]">{name}</h3>
        <div
          className="flex space-x-1"
          onClick={() => renderAccount && setSelectedAccount(true)}
        >
          <p className="text-customGray-400">{info}</p>
          <span className="text-2xl text-customBlue-500">{icon && icon()}</span>
        </div>
      </div>
      {selectedAccont && <Security cancel={setSelectedAccount} />}
    </>
  );
};

export default AccountInfoCard;
