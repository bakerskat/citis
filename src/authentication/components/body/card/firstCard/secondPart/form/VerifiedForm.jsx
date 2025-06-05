import { useDispatch, useSelector } from "react-redux";
import {
  selectedUser,
  setIsVerified,
} from "../../../../../../../userDashboard/redux/feature/auth/authSlice";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { auth, db } from "../../../../../../../firebase/FirebaseConfig";
import FirstHeader from "../../../../../../../userDashboard/components/home/header/firstHeader/FirstHeader";
import useForms from "../../../../../../../userDashboard/hooks/useForms";
import clsx from "clsx";
import Footer from "../../../../../../../userDashboard/components/home/footer/Footer";
import AdminLink from "../../../../../../../userDashboard/components/home/admin/AdminLink";
import { AuthContext } from "../../../../../../../userDashboard/context/auth/AuthContext";
import { signOut } from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { GeneralContext } from "../../../../../../../userDashboard/context/generalValue/GeneralValueContext";

const VerifiedForm = () => {
  const { formState, handleChange, handleSubmit, errorFormState } = useForms({
    code: "",
  });
  const { user } = useContext(AuthContext);
  const { phoneNumber } = useContext(GeneralContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allState, setAllState] = useState({
    expectedCode: false,
    loading: false,
    codeReceived: false,
    codeResend: false,
  });

  const handleCancel = async () => {
    await signOut(auth);

    navigate("/personalBanking"); // back to login
  };

  useEffect(() => {
    if (!user?.uid) {
      navigate("/personalBanking");
    }
  }, [user, navigate]);

  useEffect(() => {
    const docRef = doc(db, "codeState", "newCode");
    const unsubScribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setAllState((prev) => ({
          ...prev,
          expectedCode: data.code,
        }));
      }
    });
    return () => unsubScribe();
  }, []);

  const sendCode = async () => {
    try {
      const docRef = doc(db, "codeState", "newCode");
      await setDoc(docRef, { code: allState.expectedCode }, { merge: true });
      setAllState((prev) => ({
        ...prev,
        codeReceived: true,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async () => {
    setAllState((prev) => ({
      ...prev,
      loading: true,
    }));
    try {
      if (formState.code === allState.expectedCode) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(userRef, { isVerified: true }, { merge: true });

        const codeRef = doc(db, "codeState", "newCode");
        await setDoc(codeRef, { code: "" }, { merge: true });

        dispatch(setIsVerified(true));
        navigate("/dashboard");
      } else {
        setErrorMessage("Invalid code. Please try again.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setAllState((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  return (
    <>
      <FirstHeader main="home" link="/personalBanking" />
      <div>
        <div className="p-5 ">
          <h2 className="mb-3 text-2xl font-bold customMiniTablet:text-3xl">
            Enter Authorization Code
          </h2>
          <p className="mb-5 font-medium text-customGray-100">
            An authorization code was sent to <span>{phoneNumber}</span> by text
            message
          </p>
          {allState.codeResend && (
            <p className="mb-4 text-sm font-medium text-customRed-100">
              A new verification code has been sent to your phone.
            </p>
          )}

          <p className="mb-2 text-sm text-customRed-100">{errorMessage}</p>
          <input
            type="number"
            value={formState.code}
            name="code"
            onChange={handleChange}
            placeholder="Authorization Code"
            className={clsx(
              "w-full customMiniTablet:w-1/3 py-3 px-4 rounded-md outline-none border border-customGray-600 no-spinner ",
              errorFormState.code && "border border-customRed-100"
            )}
          />
          {errorFormState.code && (
            <p className="flex gap-2 mt-2 text-sm text-customRed-100">
              Enter a valid Code.
            </p>
          )}
          <p
            onClick={() =>
              setAllState((prev) => ({
                ...prev,
                codeResend: true,
              }))
            }
            className="mt-5 text-customBlue-600"
          >
            Request another authorization code
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="w-full py-3 font-bold border rounded-lg customMiniTablet:w-max customMiniTablet:px-20 text-customBlue-500 border-customBlue-500 my-7"
            >
              Cancel
            </button>
            <button
              onClick={(e) => handleSubmit(e, handleVerify)}
              className={clsx(
                "w-full customMiniTablet:w-max customMiniTablet:px-20 py-3 font-bold text-white rounded-lg bg-customBlue-500 my-7",
                allState.loading
                  ? "bg-customBlue-500 bg-opacity-35 cursor-not-allowed"
                  : "bg-customBlue-500 "
              )}
            >
              {allState.loading && <ClipLoader size={10} color="#fff" />}
              {allState.loading ? "Loading" : "Verify"}
            </button>
          </div>
        </div>
      </div>
      <AdminLink>
        <input
          type="number"
          className={clsx(
            "w-1/3 py-3 px-4 rounded-md outline-none border border-customGray-600 no-spinner mb-6"
          )}
          value={allState.expectedCode}
          onChange={(e) =>
            setAllState((prev) => ({
              ...prev,
              expectedCode: e.target.value,
            }))
          }
        />
        <button
          onClick={sendCode}
          className="w-1/3 py-3 font-bold text-white rounded-lg bg-customBlue-500 my-7"
        >
          {allState.codeReceived ? "Code Sent" : "Send Code"}
        </button>
      </AdminLink>
      <Footer />
    </>
  );
};

export default VerifiedForm;
