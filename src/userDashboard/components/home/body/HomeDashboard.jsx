import { Link, Outlet, useLocation } from "react-router-dom";
import FirstSection from "./firstSection/FirstSection";
import ScrollTop from "../../ScrollTop";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { BsChevronLeft } from "react-icons/bs";
import PageTitle from "../../../../PageTitle";

const HomeDashboard = () => {
  const [isMobile, settIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // this a function that is invoked when it gets to the exact width size
    const handleResize = () => {
      settIsMobile(window.innerWidth <= 700);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // this location check the link if is true before invoking the functions
  const isTargetedLocation =
    location.pathname === "/dashboard/savings-accounts" ||
    location.pathname === "/dashboard/checking-accounts";

  return (
    <>
      <PageTitle title="Citibank Online" />
      <div
        className={clsx(
          "block  customMiniTablet:flex customXlg:container customXlg:mx-auto",
          isMobile && isTargetedLocation
            ? "bg-customGray-300"
            : "bg-customBlue-400"
        )}
      >
        {(!isMobile || !isTargetedLocation) && (
          <div className="flex-[1.7] pr-2 ">
            <ScrollTop />
            <FirstSection />
          </div>
        )}
        {isMobile && isTargetedLocation && (
          <>
            <Link
              to="/dashboard"
              className="flex items-center gap-1 pt-4 pl-2 -mb-3 font-extrabold text-customBlue-500 hover:text-customBlue-300"
            >
              <BsChevronLeft size={16} className="mb-1" />
              <p>Back to Citi Summary</p>
            </Link>
          </>
        )}
        <div className=" flex-[3]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
