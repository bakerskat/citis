import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginUser,
  setIsVerified,
} from "../../../../../../../userDashboard/redux/feature/auth/authSlice";
import useForms from "../../../../../../../userDashboard/hooks/useForms";
import { userDetails } from "./formDetails";
import FormInput from "./FormInput";
import { useState } from "react";
import VerifiedForm from "./VerifiedForm";
import { auth, db } from "../../../../../../../firebase/FirebaseConfig";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

const Login = () => {
  const { formState, handleChange, handleSubmit, errorFormState } =
    useForms(userDetails);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getDeviceType = () => {
    // const width = window.innerWidth;
    // if (width < 768) return "phone";
    // if (width < 1024) return "tablet";
    // return "computer";
    const ua = navigator.userAgent;

    if (/android/i.test(ua)) {
      const match = ua.match(/Android.*;\s([^)]+)/);
      return match ? match[1].trim() : "Android Device";
    }

    if (/iPhone/i.test(ua)) return "iPhone";
    if (/iPad/i.test(ua)) return "iPad";

    if (/Macintosh/i.test(ua)) return "Mac";
    if (/Windows/i.test(ua)) return "Windows PC";

    if (/Linux/i.test(ua)) return "Linux Device";

    return "Unknown Device";
  };

  const loginSubmit = async () => {
    setLoading(true);
    try {
      await dispatch(
        loginUser({
          username: `${formState.username}@gmail.com`,
          password: formState.password,
        })
      ).unwrap();
      const user = auth.currentUser;
      if (!user) throw new Error("User not found after login.");

      const docRef = doc(db, "users", user.uid);

      const userSnap = await getDoc(docRef);
      const previousLogin = userSnap.exists()
        ? userSnap.data().lastLogin
        : null;
      const previousDevice = userSnap.exists()
        ? userSnap.data().lastDevice
        : null;

      await setDoc(
        docRef,
        {
          isVerified: false,
          lastLogin: serverTimestamp(),
          lastDevice: getDeviceType(),
          previousLogin,
          previousDevice,
        },
        { merge: true }
      );
      dispatch(setIsVerified(false));
    } catch (error) {
      console.log(error);
      setErrorMessage("User ID and Password are incorrect");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <FormInput
        formState={formState}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formSubmit={loginSubmit}
        errorForm={errorFormState}
        errorMessage={errorMessage}
        loading={loading}
      />
    </div>
  );
};

export default Login;
