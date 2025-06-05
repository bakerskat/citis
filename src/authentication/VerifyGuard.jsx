import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase/FirebaseConfig";
import FullLoader from "../userDashboard/components/home/loading/FullLoader";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../userDashboard/context/auth/AuthContext";

const VerifyGuard = () => {
  const { user, loading } = useContext(AuthContext);
  const [checking, setChecking] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchVerification = async () => {
      if (user?.uid) {
        const docRef = doc(db, "users", user.uid);
        const snap = await getDoc(docRef);
        const data = snap.data();
        setIsVerified(data?.isVerified === true);
      }
      setChecking(false);
    };
    fetchVerification();
  }, [user]);

  if (loading || checking) return <FullLoader />;

  if (!user) return <Navigate to="/personalBanking" replace />;
  if (isVerified) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default VerifyGuard;
