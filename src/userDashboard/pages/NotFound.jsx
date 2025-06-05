import { Navigate } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Navigate to="/dashboard" replace />
    </div>
  );
};

export default NotFound;
