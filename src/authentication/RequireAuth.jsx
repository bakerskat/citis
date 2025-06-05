import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../userDashboard/context/auth/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import FullLoader from "../userDashboard/components/home/loading/FullLoader";
import { useSelector } from "react-redux";
import { selectedCodeVerified } from "../userDashboard/redux/feature/auth/authSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

const RequireAuth = () => {
  const { user, loading } = useContext(AuthContext);
  const [checking, setChecking] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkingVerified = async () => {
      try {
        if (user?.uid) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          setIsActive(docSnap.exists() && docSnap.data().isVerified === true);
        }
      } catch (error) {
        console.log(error);
      }
      setChecking(false);
    };
    checkingVerified();
  }, [user]);

  if (loading || checking) return <FullLoader />;

  if (!user) return <Navigate to="/personalBanking" replace />;

  if (!isActive) return <Navigate to="/verify" replace />;

  return <Outlet />;
};

export default RequireAuth;
