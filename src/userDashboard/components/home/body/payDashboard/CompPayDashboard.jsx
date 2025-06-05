import { Outlet } from "react-router-dom";
import Headers from "./payHeaders/Headers";
import ScrollTop from "../../../ScrollTop";

const CompPayDashboard = () => {
  return (
    <div className="bg-white">
      <ScrollTop />
      <Headers />
      <div className="px-4 pb-8 mx-auto customXlg:container customTablet1:px-6 customXlg:px-16">
        <Outlet />
      </div>
    </div>
  );
};

export default CompPayDashboard;
