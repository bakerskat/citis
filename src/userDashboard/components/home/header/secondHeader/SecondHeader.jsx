import { useState } from "react";
import MenuMap from "./menu/laptopSize/MenuMap";
import { MdClose } from "react-icons/md";
import MenuMapM from "./menu/tabletSIze/MenuMapM";
import clsx from "clsx";
import { VscMenu } from "react-icons/vsc";
import { signOut } from "firebase/auth";
import { auth } from "../../../../../firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import Login from "../../../../../authentication/components/body/card/firstCard/secondPart/form/Login";

const SecondHeader = ({ nav, main }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [signToggle, setSignToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setMenuToggle((prevToggle) => !prevToggle);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/personalBanking");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={clsx(
        "flex items-center justify-between  px-3 bg-[#f0f5f7]  z-10   w-full shadow-md ",
        menuToggle ? "fixed top-0 transistion2 z-50" : "relative "
      )}
    >
      <div onClick={handleToggle} className="block customXlg:hidden -ml-[10px]">
        {menuToggle ? (
          <MdClose
            size={53}
            className="p-3 text-white rounded-sm focus:border focus:border-black active:border active:border-black bg-customBlue-100 "
          />
        ) : (
          <VscMenu
            size={45}
            className="p-3 rounded-sm text-customBlue-100 focus:border focus:border-black active:border active:border-black"
          />
        )}
      </div>
      <div
        className={
          menuToggle
            ? "absolute left-0 block w-full h-screen bg-white top-full "
            : "hidden customXlg:flex "
        }
      >
        {/* Laptop Size */}
        <div className="hidden customXlg:flex">
          <MenuMap navs={nav} />
        </div>
        {/* Tablet size and below */}
        <div className="block customXlg:hidden">
          <MenuMapM navs={nav} handleToggle={handleToggle} />
        </div>
      </div>
      <div className="flex items-center">
        <button
          className={clsx(
            "py-[12px] px-[10px] customSm:px-[20px] hover:bg-customGray-100 hover:text-white rounded-lg cursor-pointer transistion text-customBlue-100 font-medium block customXlg:hidden"
          )}
        >
          How can we help?
        </button>
        {main === "home" && (
          <span className="border-l-[1px] border-customBlue-100 h-6  my-2 customXlg:hidden"></span>
        )}

        {main === "home" && (
          <div>
            <LiaSearchSolid
              size={30}
              className="hidden mr-10 customBlue-100 customXlg:block"
            />
          </div>
        )}
        {main === "home" && (
          <div className="">
            <button
              onClick={() => setSignToggle((prev) => !prev)}
              className="py-[12px] px-[2px] customSm:px-[20px] hover:bg-customGray-100 hover:text-white rounded-lg cursor-pointer transistion text-customBlue-100 font-medium customTablet1:hidden"
            >
              {signToggle ? (
                <MdClose
                  size={30}
                  className="p-1 text-white rounded-sm focus:border focus:border-black active:border active:border-black bg-customBlue-100 "
                />
              ) : (
                " Sign On"
              )}
            </button>
            {signToggle && (
              <div className="absolute left-0 w-full top-6">
                <Login />
              </div>
            )}
          </div>
        )}
        {main === "dashboard" && (
          <>
            <span className="border-l-[1px] border-customBlue-100 h-6 mr-3 my-2"></span>
            <button
              onClick={handleLogout}
              className="py-[12px] px-[2px] customSm:px-[20px] hover:bg-customGray-100 hover:text-white rounded-lg cursor-pointer transistion text-customBlue-100 font-medium"
            >
              Sign Off
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondHeader;
