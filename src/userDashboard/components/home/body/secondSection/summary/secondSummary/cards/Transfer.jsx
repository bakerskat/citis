import { useState } from "react";
import { Link } from "react-router-dom";
import Security from "../../../../security/Security";
import { AnimatePresence } from "framer-motion";

const Transfer = ({ second }) => {
  const { icon, name, path } = second;
  const [selectedId, setSelectedId] = useState(false);

  const reqiredSecurity =
    name === "View Statment" || name === "Lock/Unlock a Card";

  return (
    <>
      <Link
        to={path}
        className="flex items-center gap-4 text-customBlue-500 hover:underline"
        onClick={() => reqiredSecurity && setSelectedId(true)}
      >
        <span>{icon({ size: "22px" })}</span>
        <span className="font-bold text-customXST text-customBlue-300">
          {name === "Send Money with zelle" ? <>{name}&reg;</> : name}
        </span>
      </Link>
      <AnimatePresence>
        {selectedId && reqiredSecurity && <Security cancel={setSelectedId} />}
      </AnimatePresence>
    </>
  );
};

export default Transfer;
