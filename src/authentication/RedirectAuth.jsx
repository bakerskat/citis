import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../userDashboard/context/auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import FullLoader from "../userDashboard/components/home/loading/FullLoader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

const RedirectAuth = () => {
  const { loading, user } = useContext(AuthContext);
  const [checking, setChecking] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const checkVerification = async () => {
      if (user?.uid) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIsVerified(docSnap.data().isVerified === true);
        }
      }
      setChecking(false);
    };

    checkVerification();
  }, [user]);

  if (loading || checking) return <FullLoader />;

  // Redirect if already verified
  if (user && isVerified) return <Navigate to="/dashboard" replace />;

  // User is signed in but not verified → go to verify
  if (user && !isVerified) return <Navigate to="/verify" replace />;

  return <Outlet />;
};

export default RedirectAuth;
