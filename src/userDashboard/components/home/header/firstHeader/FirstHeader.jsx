import citiLogo from "../../../../../assets/header-img/citiredesign.svg";
import { PiUser } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import MenuMaps from "./menus/MenuMaps";
import { profileDetails } from "./profileDetails";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import Fdic from "../../../../../assets/home/fdic.svg";

const FirstHeader = ({ main, link }) => {
  const [profileToggle, setProfileToggle] = useState(false);

  return (
    <>
      <div className="pr-[45px]  customXlg:pl-[30px] customXlg:relative w-full bg-white">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <Link to={link} reloadDocument>
              <img src={citiLogo} alt="" />
            </Link>
            <div>
              <img src={Fdic} alt="" className="mt-3" />
            </div>
          </div>
          <div className="hidden customXlg:block">
            <div className="relative flex items-center space-x-9">
              {main === "dashboard" && (
                <div
                  onMouseEnter={() => setProfileToggle(true)}
                  onMouseLeave={() => setProfileToggle(false)}
                >
                  <div className="relative cursor-pointer text-customGray-200 group">
                    <div className="relative flex flex-col items-center group-hover:text-customPurple-100">
                      <PiUser size={30} />
                      <h3 className="pt-[5px] text-[11px] uppercase ">
                        Profile
                      </h3>
                    </div>
                  </div>

                  <div
                    className={
                      profileToggle
                        ? "absolute bg-white box-shadow top-[100%] -left-10 px-5 pb-4 z-40 rounded-md block"
                        : " hidden"
                    }
                  >
                    <MenuMaps navs={profileDetails} />
                  </div>
                </div>
              )}
              <div className="relative cursor-pointer text-customGray-200 group">
                <div className="relative flex flex-col items-center group-hover:text-customPurple-100">
                  <SlLocationPin size={30} />
                  <h3 className="pt-[5px] text-[11px] uppercase ">
                    ATM / BRANCH
                  </h3>
                </div>
              </div>
              {main === "home" && (
                <div className="relative cursor-pointer text-customGray-200 group">
                  <div className="relative flex flex-col items-center group-hover:text-customPurple-100">
                    <CiGlobe size={30} />
                    <h3 className="pt-[5px] text-[11px] uppercase ">ESPAÑOL</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstHeader;
