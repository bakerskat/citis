import { useContext } from "react";
import { AuthContext } from "../../../context/auth/AuthContext";

const AdminLink = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user?.email === import.meta.env.VITE_ADMIN_MAIL) {
    return children;
  }
  return null;
};

export default AdminLink;
