import { useSelector } from "react-redux";
import { selectedTransferInfo } from "../../../../../redux/feature/transfer/transferSlice";
import FormInput from "./FormInput";

const EditForms = () => {
  const transferInfo = useSelector(selectedTransferInfo);
};

export default EditForms;
