import { useContext, useEffect, useState } from "react";
import Greetings from "./Greetings";
import Header from "./bodyHeader/Header";
import { AuthContext } from "../../../../context/auth/AuthContext";
import AdminLink from "../../admin/AdminLink";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/FirebaseConfig";

const FirstSection = () => {
  const { user } = useContext(AuthContext);
  const [lastLoginInfo, setLastLoginInfo] = useState(null);

  // const atRemoved = user.email.indexOf("@");
  const atRemoved = user.email.indexOf("jacobs");
  const rawUsername = user.email.slice(0, atRemoved);
  const userName = rawUsername.replace(/[0-9]/g, "");

  useEffect(() => {
    const fetchLastLogin = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setLastLoginInfo({
          date: data?.previousLogin?.toDate(),
          device: data?.previousDevice || "unknown",
        });
      }
    };
    if (user?.uid) fetchLastLogin();
  }, [user]);

  return (
    <div className="h-full px-2 bg-white customMiniTablet:px-4 py-7">
      <div className="mb-4">
        <h3 className="text-[21px] text-customGray-400 mb-1 capitalize">
          <Greetings />, {userName}
        </h3>
        {/* {lastLoginInfo && ( */}
        <p className="text-customXST text-customGray-200">
          {lastLoginInfo
            ? `Last sign on: ${lastLoginInfo.date?.toLocaleString("en-US", {
                dateStyle: "medium",
                timeStyle: "short",
                timeZone: "America/New_York", // or your desired time zone
              })} from ${lastLoginInfo.device}.`
            : "Loading last sign-on..."}
        </p>
        {/* )} */}
      </div>
      <Header />
    </div>
  );
};

export default FirstSection;
