import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/FirebaseConfig";

const useSubmissionOtp = (initialValue) => {
  const [selectedOtp, setSelectedOtp] = useState(initialValue);
  const [activeOtp, setActiveOtp] = useState(initialValue);
  const [OtpOpen, setOtpOpen] = useState(false);

  useEffect(() => {
    const docRef = doc(db, "appOtpState", "currentView");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setActiveOtp(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSelectedOtp = (id) => {
    setSelectedOtp(id);
  };

  const handleSubmitOtp = async () => {
    const docRef = doc(db, "appOtpState", "currentView");

    try {
      await setDoc(
        docRef,
        {
          name: selectedOtp.name,
          body: selectedOtp.body,
          updatedAt: new Date(),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSelectedOtp,
    selectedOtp,
    handleSubmitOtp,
    setOtpOpen,
    OtpOpen,
    activeOtp,
  };
};

export default useSubmissionOtp;
