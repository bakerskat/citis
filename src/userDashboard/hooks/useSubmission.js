import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/FirebaseConfig";

const useSubmission = (initialValue) => {
  const [selectedPath, setSelectedPath] = useState(initialValue);
  const [activePath, setActivePath] = useState(initialValue);
  const [allBankOpen, setAllBankOpen] = useState(false);

  useEffect(() => {
    const docRef = doc(db, "appState", "currentView");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setActivePath(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSelectedId = (id) => {
    setSelectedPath(id);
  };

  const handleSubmissionName = async () => {
    const docRef = doc(db, "appState", "currentView");

    try {
      await setDoc(
        docRef,
        {
          name: selectedPath.name,
          body: selectedPath.body,
          updatedAt: new Date(),
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSelectedId,
    selectedPath,
    handleSubmissionName,
    setAllBankOpen,
    allBankOpen,
    activePath,
  };
};

export default useSubmission;
