import { collection } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import { useDispatch } from "react-redux";
import { addToBankDatabase } from "../redux/feature/bankDatabase/bankDatabaseSlice";

const useAddToDatabase = (initialValue) => {
  const dataBaseRef = collection(db, initialValue);
  const dispatch = useDispatch();

  const addToAllDataBase = async (listItems) => {
    try {
      await dispatch(
        addToBankDatabase({ dataBaseRef: dataBaseRef, newValue: listItems })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addToAllDataBase,
  };
};

export default useAddToDatabase;
