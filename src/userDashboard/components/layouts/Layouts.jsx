import { Outlet } from "react-router-dom";
import Header from "../home/header/Header";
import Footer from "../home/footer/Footer";
import PopUpCancel from "../../../authentication/components/PopUpCancel";
import useExternalArrays from "../../hooks/useExternalArrays";

const Layouts = () => {
  const { menuDetails1 } = useExternalArrays();
  return (
    <>
      <div>
        <PopUpCancel />

        <Header main="dashboard" link="/dashboard" nav={menuDetails1} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layouts;
