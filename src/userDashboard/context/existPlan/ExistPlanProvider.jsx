import { useState } from "react";
import { ExistContext } from "./ExistContext";

const ExistPlanProvider = ({ children }) => {
  const [isExternal, setIsExternal] = useState(false);

  const handleExternal = (navigate) => {
    navigate("/domestic/input");
    setTimeout(() => {
      setIsExternal(true);
    }, 500);
  };

  return (
    <ExistContext.Provider
      value={{ isExternal, setIsExternal, handleExternal }}
    >
      {children}
    </ExistContext.Provider>
  );
};

export default ExistPlanProvider;
